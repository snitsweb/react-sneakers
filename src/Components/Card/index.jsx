import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"
import AppContext from "../../context";
import React from 'react'

function Card({
                  onFavourite,
                  onPlus,
                  img,
                  price,
                  name,
                  itemId,
                  id,
                  favourited = false,
                  loading = false
              }) {
    const {isItemAdded, isItemFavourited} = React.useContext(AppContext)
    const [isFavourite, setIsFavourite] = React.useState(isItemFavourited({itemId}))

    const handleAdd = () => {
        onPlus({img, price, name, itemId, id})
    }

    const handleFavourite = () => {
        onFavourite({img, price, name, itemId, id})
        setIsFavourite(!isFavourite)
    }

    return (
        <div className={styles.content_card}>
            {loading ?
                <ContentLoader
                    speed={2}
                    width={160}
                    height={200}
                    viewBox="0 0 160 200"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="13" y="0" rx="5" ry="5" width="133" height="112"/>
                    <rect x="13" y="119" rx="6" ry="6" width="120" height="15"/>
                    <rect x="13" y="140" rx="6" ry="6" width="80" height="15"/>
                    <rect x="99" y="46" rx="6" ry="6" width="32" height="32"/>
                    <rect x="83" y="70" rx="6" ry="6" width="48" height="32"/>
                    <rect x="13" y="166" rx="6" ry="6" width="50" height="32"/>
                    <rect x="100" y="166" rx="6" ry="6" width="32" height="32"/>
                </ContentLoader> :
                <React.Fragment>
                    <div className={styles.card_like_btn} onClick={handleFavourite}>
                        <img src={isItemFavourited({itemId}) ? '/img/card-liked.svg' : '/img/card-unliked.svg'} alt="Unliked"
                             title='Dodaj do listy życzeń'/>
                    </div>
                    <img src={img} alt="Adidas" width={133} height={112}/>
                    <h4 className={styles.card_title}>
                        {name}
                    </h4>
                    <div className={styles.card_footer}>
                        <div className={styles.card_price_wr}>
                <span className={styles.card_price_text}>
                Cena:
                </span>
                            <span className={styles.card_price}>
            {price} zł.
                </span>
                        </div>
                        <button className={styles.card_btn} onClick={handleAdd}>
                            <img src={isItemAdded({itemId}) ? '/img/btn-added.svg' : '/img/btn-add.svg'} alt="Add to cart" width={32}
                                 height={32} title='Dodaj do koszyka'/>
                        </button>
                    </div>
                </React.Fragment>
            }


        </div>
    )
}

export default Card;



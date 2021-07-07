import styles from "./Card.module.scss";
import React from 'react'

function Card({onFavourite, onPlus, img, price, name}) {
    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavourite, setIsFavourite] = React.useState(false)

    const handleAdd = () => {
        onPlus({img, price, name})
        setIsAdded(!isAdded)
    }

    const handleFavourite = () => {
        onFavourite()
        setIsFavourite(!isFavourite)
    }

    return (
        <div className={styles.content_card}>
            <div className={styles.card_like_btn} onClick={handleFavourite}>
                <img src={isFavourite ? '/img/card-liked.svg' : '/img/card-unliked.svg'} alt="Unliked"
                     title='Dodaj do listy życzeń'/>
            </div>
            <img src={img} alt="Adidas" width={133} height={112}
                 className={styles.card_img}/>
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
                    <img src={isAdded ? '/img/btn-added.svg' : '/img/btn-add.svg'} alt="Add to cart" width={32}
                         height={32} title='Dodaj do koszyka'/>
                </button>
            </div>
        </div>
    )
}

export default Card;

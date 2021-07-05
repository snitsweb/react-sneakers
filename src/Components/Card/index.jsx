import styles from "./Card.module.scss";

console.log(styles)

function Card(props) {
    const onClickAdd = () => {
        alert(props.name)
    }

    return (
        <div className={styles.content_card}>
            <div className={styles.card_like_btn}>
                <img src="/img/card-unliked.svg" alt="Unliked" />
            </div>
            <img src={props.img} alt="Adidas" width={133} height={112}
                 className={styles.card_img}/>
            <h4 className={styles.card_title}>
                {props.name}
            </h4>
            <div className={styles.card_footer}>
                <div className={styles.card_price_wr}>
                                            <span className={styles.card_price_text}>
                                                Cena:
                                            </span>
                    <span className={styles.card_price}>
                                                {props.price} zł.
                                            </span>
                </div>
                <button className={styles.card_btn} onClick={onClickAdd}>
                    <img src="/img/btn-add.svg" alt="Add to cart" width={32} height={32}/>
                </button>
            </div>
        </div>
    )
}

export default Card;

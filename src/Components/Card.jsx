function Card() {
    return (
        <div className="content-card">
            <div className="card-like-btn">
                <img src="/img/card-unliked.svg" alt="Unliked" className="card-like-btn-img"/>
            </div>
            <img src="/img/sneakers/1.jpg" alt="Adidas" width={133} height={112}
                 className="card-img"/>
            <h4 className="card-title">
                Mięskie Nike Blazer Mid Suede
            </h4>
            <div className="card-footer">
                <div className="card-price-wr">
                                            <span className="card-price-text">
                                                Cena:
                                            </span>
                    <span className="card-price">
                                                229 zł.
                                            </span>
                </div>
                <button className="card-btn">
                    <img src="/img/btn-add.svg" alt="Add to cart" width={32} height={32}/>
                </button>
            </div>
        </div>
    )
}

export default Card;

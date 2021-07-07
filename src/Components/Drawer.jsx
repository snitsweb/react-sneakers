function Drawer({onCloseCart, items = []}) {

    return (
        <div className="overlay">
            <div className="drawer">
                <div className="title-wrapper">
                    <h2 className="title">Koszyk</h2>
                    <img onClick={onCloseCart} src="/img/remove-active.svg" alt="Usuń" className="cart-close"
                         title="Zamknij"/>
                </div>

                <div className="cart-items">
                    {items.filter((el) => !(JSON.stringify(el) === '{}')).map((item) => {
                        return (
                            <div className="cart-item" key={item.img+item.price+item.name}>
                                <img src={item.img} alt="" className="cart-item-img"/>
                                <div className="cart-item-desc">
                                    <p className="cart-item-title">
                                        {item.name}
                                    </p>
                                    <p className="cart-item-price">{item.price} zł.</p>
                                </div>
                                <img src="/img/remove-active.svg" alt="Usuń" className="cart-item-remove" title="Usuń"/>
                            </div>
                        )
                    })}

                </div>
                <div className="drawer-footer">
                    <ul>
                        <li>
                            <span>Cena:</span>
                            <div></div>
                            <b>600zł.</b>
                        </li>
                        <li><span>Podatek 5%:</span>
                            <div></div>
                            <b>30zł.</b>
                        </li>
                    </ul>
                    <button className="drawer-btn">Złóż zamówienie
                        <img src="/img/arrow.svg" alt="Arrow"/>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Drawer
function Drawer(){
    return (
        <div style={{display: 'none'}}className="overlay">
            <div className="drawer">
                <div className="title-wrapper">
                    <h2 className="title">Koszyk</h2>
                    <img src="/img/remove-active.svg" alt="Usuń" className="cart-close" title="Zamknij"/>
                </div>

                <div className="cart-items">
                    <div className="cart-item">
                        <img src="/img/sneakers/1.jpg" alt="" className="cart-item-img"/>
                        <div className="cart-item-desc">
                            <p className="cart-item-title">
                                Mięskie Nike Blazer Mid Suede
                            </p>
                            <p className="cart-item-price">229 zł.</p>
                        </div>
                        <img src="/img/remove-active.svg" alt="Usuń" className="cart-item-remove" title="Usuń"/>
                    </div>
                    <div className="cart-item">
                        <img src="/img/sneakers/1.jpg" alt="" className="cart-item-img"/>
                        <div className="cart-item-desc">
                            <p className="cart-item-title">
                                Mięskie Nike Blazer Mid Suede
                            </p>
                            <p className="cart-item-price">229 zł.</p>
                        </div>
                        <img src="/img/remove-active.svg" alt="Usuń" className="cart-item-remove"/>
                    </div>
                    <div className="cart-item">
                        <img src="/img/sneakers/1.jpg" alt="" className="cart-item-img"/>
                        <div className="cart-item-desc">
                            <p className="cart-item-title">
                                Mięskie Nike Blazer Mid Suede
                            </p>
                            <p className="cart-item-price">229 zł.</p>
                        </div>
                        <img src="/img/remove-active.svg" alt="Usuń" className="cart-item-remove"/>
                    </div>

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
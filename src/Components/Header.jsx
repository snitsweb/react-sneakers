function Header(){
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="logo">
                        <img width={40} height={40} className="logo-img" src="/img/logo.png" alt="Logotype"/>
                        <div className="logoinfo">
                            <h3 className="logo-title">
                                REACT SNEAKERS
                            </h3>
                            <span className="logo-text">Sklep najlepszych adidasów</span>
                        </div>
                    </div>
                    <ul className="list">
                        <li className="list-item">
                            <img className="list-item-img" src="/img/cart.svg" width={18} height={18} alt="cart"/>
                            <span className="list-item-text">1205 zł</span>
                        </li>
                        <li className="list-item">
                            <img className="list-item-img" src="/img/favorite.svg" width={18} height={18}
                                 alt="favorite"/>
                        </li>
                        <li className="list-item">
                            <img className="list-item-img" src="/img/union.svg" width={18} height={18}
                                 alt="My account"/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
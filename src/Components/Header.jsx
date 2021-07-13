import React from "react";
import {Link} from "react-router-dom"
import {useCart} from "../hooks/useCart";


function Header(props) {
    const {totalPrice} = useCart()
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <Link to="">
                        <div className="logo">
                            <img width={40} height={40} className="logo-img" src="img/logo.png" alt="Logotype"/>
                            <div className="logoinfo">
                                <h3 className="logo-title">
                                    REACT SNEAKERS
                                </h3>
                                <span className="logo-text">Sklep najlepszych adidasów</span>
                            </div>
                        </div>
                    </Link>
                    <ul className="list">
                        <li className="list-item" onClick={props.onClickCart}>
                            <img className="list-item-img" src="img/cart.svg" width={18} height={18} alt="cart"/>
                            <span className="list-item-text">{totalPrice} zł.</span>
                        </li>
                        <li className="list-item">
                            <Link to="favourites">
                                <img className="list-item-img" src="img/favorite.svg" width={18} height={18}
                                     alt="favorite"/>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="orders">
                                <img className="list-item-img" src="img/union.svg" width={18} height={18}
                                     alt="My account"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
import React from 'react'
import Info from "../Info";
import axios from "axios";

import {useCart} from "../../hooks/useCart";

import styles from "./Drawer.module.scss"

function Drawer({onCloseCart, onRemove, items = [], opened}) {

    const {cartItems, setCartItems, totalPrice, } = useCart()
    const [isOrderComplete, setIsOrderComplete] = React.useState(false)
    const [orderId, setOrderId] = React.useState(0)
    const [isLoading, setIsLoading] = React.useState(false)


    const onClickOrder = async () => {
        try{
            setIsLoading(true)
            const {data} = await axios.post('https://60e636ff086f730017a6feca.mockapi.io/orders', {items : cartItems})

            setIsOrderComplete(true)
            setCartItems([])
            setOrderId(data.id)

            cartItems.length !== 0 &&  cartItems.forEach(item => axios.delete(`https://60e636ff086f730017a6feca.mockapi.io/cart/${item.id}`))

        } catch (err) {
            alert('Błąd w trakcie złóżenia zamowienia')
            console.log(err)
        }

        setIsLoading(false)
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.visible : ''}`}>
            <div className={`${styles.drawer} ${opened ? styles.active : ''}`}>
                <div className={styles['title-wrapper']}>
                    <h2 className={styles.title}>Koszyk</h2>
                    <img onClick={onCloseCart} src="/img/remove-active.svg" alt="Usuń" className={styles['cart-close']}
                         title="Zamknij"/>
                </div>
                {items.length === 0 ? <Info image={isOrderComplete ?'/img/completeCart.png' : '/img/empty-cart.png' }
                                            title={isOrderComplete ? 'Zamowinie zostało złożone' : 'Koszyk jest pusty' }
                                            description={isOrderComplete ? `Twoje zamówienie # ${orderId} zostanie wkrótce dostarczone kurierem` : 'Dodaj co najmniej jedną parę trampek do zamówienia.'}
                /> : <div className={styles.cart_items_wr}>
                    <div className={styles['cart-items']}>
                        {items.filter((el) => !(JSON.stringify(el) === '{}')).map((item) => {
                            return (
                                <div className={styles['cart-item']} key={item.img + item.price + item.name}>
                                    <img src={item.img} alt={item.name} className={styles['cart-item-img']}/>
                                    <div className={styles['cart-item-desc']}>
                                        <p className={styles['cart-item-title']}>
                                            {item.name}
                                        </p>
                                        <p className={styles['cart-item-price']}>{item.price} zł.</p>
                                    </div>
                                    <img onClick={() => {
                                        onRemove(item)
                                    }} src="/img/remove-active.svg" alt="Usuń" className={styles['cart-item-remove']}
                                         title="Usuń"/>
                                </div>
                            )
                        })}

                    </div>
                    <div className={styles['drawer-footer']}>
                        <ul>
                            <li>
                                <span>Cena:</span>
                                <div></div>
                                <b>{totalPrice} zł.</b>
                            </li>
                            <li><span>Podatek 5%:</span>
                                <div></div>
                                <b>{totalPrice * .05} zł.</b>
                            </li>
                        </ul>
                        <button onClick={onClickOrder} className={`${styles['drawer-btn']} ${isLoading && 'disable'}`}>Złóż zamówienie
                            <img src="/img/arrow.svg" alt="Arrow"/>
                        </button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Drawer
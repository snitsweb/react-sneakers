import React from 'react'
import AppContext from "../context";

const Info = ({image, title, description, }) => {
    const {setCartOpened} = React.useContext(AppContext)
    return (
        <div className="cart_empty">
            <img src={image} alt="Empty box" className="cart_empty_img"/>
            <h4 className="cart_empty_title">{title}</h4>
            <p className="cart_empty_text">
                {description}
            </p>
            <button onClick={() => setCartOpened(false)} className="cart_empty_btn">
                <img src="img/arrow.svg" alt="Arrow" className="cart_empty_btn_img"/>
                Wróć
            </button>
        </div>
    )
}

export default Info
import React from "react";
import Card from "../Components/Card";
import AppContext from "../context";

function Favourites({onAddToCart, isFavourited = false}) {
    const {favourites, onAddFavourite, isItemFavourited} = React.useContext(AppContext)
    return (
        <section className="content">
            <div className="container">

                <div className="content-inner">
                    <div className="content-title-wrapper">
                        <h1 className="title">Ulubione</h1>
                    </div>

                    <div className="content-cards">

                        {favourites.map(item => (
                            <Card
                                key={item.name + item.price + item.img}
                                name={item.name}
                                price={item.price}
                                img={item.img}
                                onFavourite={(obj) => onAddFavourite(obj)}
                                onPlus={(obj) => onAddToCart(obj)}
                                favourited = {isItemFavourited(item)}
                                itemId={item.itemId}
                                id={item.id}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Favourites
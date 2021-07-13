import React from "react";
import Card from "../Components/Card";
import AppContext from "../context";
import axios from "axios";

function Orders({onAddToCart, isFavourited = false}) {
    const {onAddFavourite, isItemFavourited} = React.useContext(AppContext)

    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        (async () => {
            try{
                const {data} = await axios.get('https://60e636ff086f730017a6feca.mockapi.io/orders/')
                setOrders(data.reduce((prev,obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }

        })()
    }, [])
    return (
        <section className="content">
            <div className="container">

                <div className="content-inner">
                    <div className="content-title-wrapper">
                        <h1 className="title">Moje zamówienia</h1>
                    </div>

                    <div className="content-cards">

                        {(isLoading? [...Array(8)] : orders).map((item, index) => (
                            <Card
                                key = {index}
                                favourited = {isItemFavourited(item)}
                                loading = {isLoading}
                                {...item}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Orders
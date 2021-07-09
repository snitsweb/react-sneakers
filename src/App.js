import React from 'react'
import axios from "axios";
import {Route, Link} from 'react-router-dom'
import Card from "./Components/Card/";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";

function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favourites, setFavourites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        axios.get('https://60e636ff086f730017a6feca.mockapi.io/items').then((res) => {
            setItems(res.data)
        })
        axios.get('https://60e636ff086f730017a6feca.mockapi.io/cart').then((res) => {
            setCartItems(res.data)
        })
        axios.get('https://60e636ff086f730017a6feca.mockapi.io/favourite').then((res) => {
            setFavourites(res.data)
            console.log(res.data)
        })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
        axios.post('https://60e636ff086f730017a6feca.mockapi.io/cart', obj)
    }

    const onRemoveFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.itemId !== itemId))
        axios.delete(`https://60e636ff086f730017a6feca.mockapi.io/cart/${itemId}`)
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onAddFavourite = (obj) => {
        if (favourites.find(item => item.itemId === obj.itemId)) {
            axios.delete(`https://60e636ff086f730017a6feca.mockapi.io/favourite/${obj.id}`)
            setFavourites(prev => prev.filter(item => item.itemId !== obj.itemId))
        } else {
            axios.post('https://60e636ff086f730017a6feca.mockapi.io/favourite/', obj)
            setFavourites(prev => [...prev, obj])
        }
    }

    return (
        <div className="wrapper">
            {cartOpened &&
            <Drawer onRemove={onRemoveFromCart} items={cartItems} onCloseCart={() => setCartOpened(false)}
            />}
            <Header onClickCart={() => setCartOpened(true)}/>
            <main>
                <Route path="/" exact>
                    <Home searchValue={searchValue}
                          onChangeSearchInput={onChangeSearchInput}
                          setSearchValue={setSearchValue}
                          onAddFavourite={onAddFavourite}
                          onAddToCart={onAddToCart}
                          items={items}
                    />
                </Route>
                <Route path="/favourites">
                    <Favourites items={favourites}
                                onAddFavourite={onAddFavourite}
                                onAddToCar={onAddToCart}
                    />
                </Route>

            </main>

        </div>
    );
}

export default App;

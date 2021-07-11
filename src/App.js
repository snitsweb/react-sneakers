import React from 'react'
import axios from "axios";
import {Route} from 'react-router-dom'
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import AppContext from "./context";


function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favourites, setFavourites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const itemsResponse = await axios.get('https://60e636ff086f730017a6feca.mockapi.io/items')
            const cartResponse = await axios.get('https://60e636ff086f730017a6feca.mockapi.io/cart')
            const favouritesResponse = await axios.get('https://60e636ff086f730017a6feca.mockapi.io/favourite')

            setCartItems(cartResponse.data)
            setFavourites(favouritesResponse.data)
            setItems(itemsResponse.data)
            setIsLoading(false)
        }

        fetchData()
    }, [])

    const onAddToCart = (obj) => {
        try {
            const searchObj = cartItems.find((item, index) => item.itemId === obj.itemId)
            if(searchObj){
                axios.delete(`https://60e636ff086f730017a6feca.mockapi.io/cart/${searchObj.id}`)
                setCartItems(prev => prev.filter(item => item.itemId !== obj.itemId))
            } else {
                setCartItems(prev => [...prev, obj])
                axios.post('https://60e636ff086f730017a6feca.mockapi.io/cart', obj)
            }

        } catch (err) {
            alert('Nie udało się dodać do koszyka')
            console.log(err)
        }

    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onAddFavourite = (obj) => {
        try {
            if (favourites.find(item => item.itemId === obj.itemId)) {
                axios.delete(`https://60e636ff086f730017a6feca.mockapi.io/favourite/${obj.id}`)
                setFavourites(prev => prev.filter(item => item.itemId !== obj.itemId))
            } else {
                axios.post('https://60e636ff086f730017a6feca.mockapi.io/favourite/', obj)
                setFavourites(prev => [...prev, obj])
            }
        } catch (err) {
            alert('Nie udało się zmienić listę ulubionych')
            console.log(err)
        }

    }

    const isItemAdded = (item) => {
        return cartItems.some(cartItem => Number(cartItem.itemId) === Number(item.itemId))
    }

    return (
        <AppContext.Provider value={{cartItems, favourites, items, setCartItems, isItemAdded}}>
            <div className="wrapper">
                {cartOpened &&
                <Drawer onRemove={onAddToCart} items={cartItems} onCloseCart={() => setCartOpened(false)}
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
                              cartItems={cartItems}
                              isLoading = {isLoading}
                        />
                    </Route>
                    <Route path="/favourites">
                        <Favourites
                                    onAddFavourite={onAddFavourite}
                                    onAddToCar={onAddToCart}
                        />
                    </Route>

                </main>

            </div>
        </AppContext.Provider>
    );
}

export default App;

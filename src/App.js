import React from 'react'
import axios from "axios";
import {Route} from 'react-router-dom'
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import AppContext from "./context";
import Orders from "./Pages/Orders";


function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favourites, setFavourites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        async function fetchData() {
            try{
                setIsLoading(true)
                const [itemsResponse, cartResponse, favouritesResponse] = await Promise.all([
                    axios.get('https://60e636ff086f730017a6feca.mockapi.io/items'),
                    axios.get('https://60e636ff086f730017a6feca.mockapi.io/cart'),
                    axios.get('https://60e636ff086f730017a6feca.mockapi.io/favourite')
                ])

                setCartItems(cartResponse.data)
                setFavourites(favouritesResponse.data)
                setItems(itemsResponse.data)
                setIsLoading(false)
            } catch (err) {
                alert("Nie udało się pobrać danych z serwera")
                console.log(err)
            }

        }

        fetchData()
    }, [])

    const onAddToCart = async (obj) => {
        try {
            const searchObj = cartItems.find((item, index) => item.itemId === obj.itemId)
            if(searchObj){
                axios.delete(`https://60e636ff086f730017a6feca.mockapi.io/cart/${searchObj.id}`)
                setCartItems(prev => prev.filter(item => item.itemId !== obj.itemId))
            } else {
                const {data} = await axios.post('https://60e636ff086f730017a6feca.mockapi.io/cart', obj)
                setCartItems(prev => [...prev, data])
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
            const searchItem = favourites.find(item => Number(item.itemId) === Number(obj.itemId));
            if (searchItem) {
                axios.delete(`https://60e636ff086f730017a6feca.mockapi.io/favourite/${searchItem.id}`)
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

    const isItemFavourited = (item) => {
        return favourites.some(card => Number(card.itemId) === Number(item.itemId))
    }



    return (
        <AppContext.Provider value={{cartItems, favourites, items, setCartItems, isItemAdded, isItemFavourited, onAddFavourite, setCartOpened}}>
            <div className="wrapper">
                    <Drawer onRemove={onAddToCart} items={cartItems} onCloseCart={() => setCartOpened(false)} opened={cartOpened}/>
                <Header onClickCart={() => setCartOpened(true)}/>
                <main>
                    <Route path="" exact>
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
                    <Route path="favourites">
                        <Favourites
                                    onAddFavourite={onAddFavourite}
                                    onAddToCar={onAddToCart}
                        />
                    </Route>
                    <Route path="orders">
                        <Orders/>
                    </Route>

                </main>

            </div>
        </AppContext.Provider>
    );
}

export default App;

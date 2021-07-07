import React from 'react'
import Card from "./Components/Card/";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";

function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        fetch('https://json.extendsclass.com/bin/f03ec4c858e2').then((res) => {
            return res.json()
        }).then((json) => {
            setItems(json)
        })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="wrapper">
            {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)}
            />}
            <Header onClickCart={() => setCartOpened(true)}/>
            <main>
                <section className="content">
                    <div className="container">

                        <div className="content-inner">
                            <div className="content-title-wrapper">
                                <h1 className="title">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Wszystkie adidasy'}</h1>
                                <div className="search-panel">
                                    <img src="/img/search.svg" alt="Search" className="search-icon"/>
                                    <input onChange={onChangeSearchInput} type="text" value={searchValue} placeholder="Szukaj..."/>
                                    {searchValue && <img src="/img/remove-active.svg" onClick={() => setSearchValue('')} alt="Clear input" className="clear_btn"/>}
                                </div>
                            </div>

                            <div className="content-cards">

                                {items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map(item => (
                                    <Card
                                        key={item.name+item.price+item.img}
                                        name={item.name}
                                        price={item.price}
                                        img={item.img}
                                        onFavourite = {() => console.log('Added to fav')}
                                        onPlus = {(obj) => onAddToCart(obj)}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default App;

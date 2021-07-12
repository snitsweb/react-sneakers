import React from "react";
import Card from "../Components/Card";
import AppContext from "../context";
function Home(props) {

    const {isItemFavourited} = React.useContext(AppContext)
    const renderItems = () => {
        const filteredItems = props.items.filter(item => item.name.toLowerCase().includes(props.searchValue.toLowerCase()));
        return ((props.isLoading ? [...Array(10)] : filteredItems).map((item, index) => {
                return (
                    <Card
                        key={index}
                        onFavourite={(obj) => props.onAddFavourite(obj)}
                        onPlus={(obj) => props.onAddToCart(obj)}
                        loading={props.isLoading}
                        favourited={item && isItemFavourited(item)}
                        {...item}

                    />)
            })
        )

    }

    return (
        <section className="content">
            <div className="container">

                <div className="content-inner">
                    <div className="content-title-wrapper">
                        <h1 className="title">{props.searchValue ? `Поиск по запросу: ${props.searchValue}` : 'Wszystkie adidasy'}</h1>
                        <div className="search-panel">
                            <img src="/img/search.svg" alt="Search" className="search-icon"/>
                            <input onChange={props.onChangeSearchInput} type="text" value={props.searchValue}
                                   placeholder="Szukaj..."/>
                            {props.searchValue &&
                            <img src="/img/remove-active.svg" onClick={() => props.setSearchValue('')}
                                 alt="Clear input" className="clear_btn"/>}
                        </div>
                    </div>

                    <div className="content-cards">
                        {renderItems()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
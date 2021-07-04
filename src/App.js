import Card from "./Components/Card";
import Header from "./Components/Header";

function App() {
    return (
        <div className="wrapper">
            <div style={{display: 'none'}}className="overlay">
                <div className="drawer">
                    <div className="title-wrapper">
                        <h2 className="title">Koszyk</h2>
                        <img src="/img/remove-active.svg" alt="Usuń" className="cart-close" title="Zamknij"/>
                    </div>

                    <div className="cart-items">
                        <div className="cart-item">
                            <img src="/img/sneakers/1.jpg" alt="" className="cart-item-img"/>
                            <div className="cart-item-desc">
                                <p className="cart-item-title">
                                    Mięskie Nike Blazer Mid Suede
                                </p>
                                <p className="cart-item-price">229 zł.</p>
                            </div>
                            <img src="/img/remove-active.svg" alt="Usuń" className="cart-item-remove" title="Usuń"/>
                        </div>
                        <div className="cart-item">
                            <img src="/img/sneakers/1.jpg" alt="" className="cart-item-img"/>
                            <div className="cart-item-desc">
                                <p className="cart-item-title">
                                    Mięskie Nike Blazer Mid Suede
                                </p>
                                <p className="cart-item-price">229 zł.</p>
                            </div>
                            <img src="/img/remove-active.svg" alt="Usuń" className="cart-item-remove"/>
                        </div>
                        <div className="cart-item">
                            <img src="/img/sneakers/1.jpg" alt="" className="cart-item-img"/>
                            <div className="cart-item-desc">
                                <p className="cart-item-title">
                                    Mięskie Nike Blazer Mid Suede
                                </p>
                                <p className="cart-item-price">229 zł.</p>
                            </div>
                            <img src="/img/remove-active.svg" alt="Usuń" className="cart-item-remove"/>
                        </div>
                        
                    </div>
                    <div className="drawer-footer">
                        <ul>
                            <li>
                                <span>Cena:</span>
                                <div></div>
                                <b>600zł.</b>
                            </li>
                            <li><span>Podatek 5%:</span>
                                <div></div>
                                <b>30zł.</b>
                            </li>
                        </ul>
                        <button className="drawer-btn">Złóż zamówienie
                            <img src="/img/arrow.svg" alt="Arrow"/>
                        </button>
                    </div>

                </div>
            </div>
            <Header />
            <main>
                <section className="content">
                    <div className="container">

                        <div className="content-inner">
                            <div className="content-title-wrapper">
                                <h1 className="title">Wszystkie adidasy</h1>
                                <div className="search-panel">
                                    <img src="/img/search.svg" alt="Search" className="search-icon"/>
                                    <input type="text" placeholder="Szukaj..."/>
                                </div>
                            </div>

                            <div className="content-cards">

                                <Card />
                                <div className="content-card">
                                    <div className="card-like-btn">
                                        <img src="/img/card-unliked.svg" alt="Unliked" className="card-like-btn-img"/>
                                    </div>
                                    <img src="/img/sneakers/2.jpg" alt="Adidas" width={133} height={112}
                                         className="card-img"/>
                                    <h4 className="card-title">
                                        Mięskie Nike Air Max 270
                                    </h4>
                                    <div className="card-footer">
                                        <div className="card-price-wr">
                                            <span className="card-price-text">
                                                Cena:
                                            </span>
                                            <span className="card-price">
                                                229 zł.
                                            </span>
                                        </div>
                                        <button className="card-btn">
                                            <img src="/img/btn-add.svg" alt="Add to cart" width={32} height={32}/>
                                        </button>
                                    </div>
                                </div>
                                <div className="content-card">
                                    <div className="card-like-btn">
                                        <img src="/img/card-unliked.svg" alt="Unliked" className="card-like-btn-img"/>
                                    </div>
                                    <img src="/img/sneakers/3.jpg" alt="Adidas" width={133} height={112}
                                         className="card-img"/>
                                    <h4 className="card-title">
                                        Mięskie Nike Blazer Mid Suede
                                    </h4>
                                    <div className="card-footer">
                                        <div className="card-price-wr">
                                            <span className="card-price-text">
                                                Cena:
                                            </span>
                                            <span className="card-price">
                                                229 zł.
                                            </span>
                                        </div>
                                        <button className="card-btn">
                                            <img src="/img/btn-add.svg" alt="Add to cart" width={32} height={32}/>
                                        </button>
                                    </div>
                                </div>
                                <div className="content-card">
                                    <div className="card-like-btn">
                                        <img src="/img/card-unliked.svg" alt="Unliked" className="card-like-btn-img"/>
                                    </div>
                                    <img src="/img/sneakers/4.jpg" alt="Adidas" width={133} height={112}
                                         className="card-img"/>
                                    <h4 className="card-title">
                                        Puma X Aka Boku Future Rider
                                    </h4>
                                    <div className="card-footer">
                                        <div className="card-price-wr">
                                            <span className="card-price-text">
                                                Cena:
                                            </span>
                                            <span className="card-price">
                                                229 zł.
                                            </span>
                                        </div>
                                        <button className="card-btn">
                                            <img src="/img/btn-add.svg" alt="Add to cart" width={32} height={32}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default App;

import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";

const arr = [
    {
        name: "Mięskie Nike Blazer Mid Suede",
        price: 200,
        img: '/img/sneakers/1.jpg'
    },
    {
        name: "Mięskie Nike Air Max 270 ",
        price: 220,
        img: '/img/sneakers/2.jpg'
    },
    {
        name: "Puma X Aka Boku Future Rider",
        price: 220,
        img: '/img/sneakers/3.jpg'
    },
    {
        name: "Under Armour Curry 8",
        price: 180,
        img: '/img/sneakers/4.jpg'
    },
    {
        name: "Nike Kyrie 7",
        price: 240,
        img: '/img/sneakers/5.jpg'
    },
    {
        name: "Jordan Air Jordan 11",
        price: 350,
        img: '/img/sneakers/6.jpg'
    },
    {
        name: "Nike LeBron XVIII",
        price: 110,
        img: '/img/sneakers/7.jpg'
    },
    {
        name: "Nike Lebron XVIII Low",
        price: 300,
        img: '/img/sneakers/8.jpg'
    }
]

function App() {
    return (
        <div className="wrapper">
            <Drawer/>
            <Header/>
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

                                {arr.map(obj => (
                                    <Card
                                        name={obj.name}
                                        price={obj.price}
                                        img={obj.img}
                                    />))
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default App;

import React, { useContext } from 'react'
import { FlowersContext } from '../../../context/FlowersContext'
import { BasketFlowers } from '../../../context/BasketContext'
import Swal from 'sweetalert2';
import { FavoritesFlowers } from '../../../context/FavoritesFlowers';
import { Link } from 'react-router-dom';

function SectionSix() {
    let { flowers, originalFlowers, setFlowers } = useContext(FlowersContext)
    let { basketFlowers, setBasketFlowers } = useContext(BasketFlowers)
    let { favoritesFlowers, setFavoritesFlowers } = useContext(FavoritesFlowers)

    // Basket add etmek
    function handleBasket(flower) {
        let basketFlower = basketFlowers.find(basket => basket.id == flower.id)
        if (basketFlower) {
            basketFlower.count++
            setBasketFlowers([...basketFlowers])
        } else {
            setBasketFlowers([...basketFlowers, { ...flower, count: 1 }])
        }
        Swal.fire({
            icon: "success",
            title: `${flower.name} added to basket!`,
            showConfirmButton: false,
            timer: 1500,
        });
    }

    function handleFavorites(flower) {
        let find = favoritesFlowers.find(favFlower => favFlower.id == flower.id)
        if (find) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This flower is already in your favorites!"
            });
        } else {
            setFavoritesFlowers([...favoritesFlowers, flower]);
            Swal.fire({
                icon: "success",
                title: `${flower.name} added to favorites!`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    function handleSearch(value) {
        let searchValue = value.trim().toLowerCase()
        if (!searchValue) {
            setFlowers(originalFlowers)
            return
        }
        let filter = originalFlowers.filter(({ name }) => name.toLowerCase().includes(searchValue))
        setFlowers(filter)
    }

    function handleSort(sortValue) {
        let sortedFlowers

        switch (sortValue) {
            case "firstCheap":
                sortedFlowers = [...flowers].sort((a, b) => a.price - b.price)
                break;
            case "firstExpensive":
                sortedFlowers = [...flowers].sort((a, b) => b.price - a.price)
                break;
            case "fromAtoZ":
                sortedFlowers = [...flowers].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "fromZtoA":
                sortedFlowers = [...flowers].sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                sortedFlowers = [...originalFlowers];
        }
        setFlowers(sortedFlowers)
    }
    return (
        <div className='SectionSix'>
            <div className="container">
                <div className="text">
                    <p style={{ color: ' #f45d96', fontSize: '30px', letterSpacing: '2px' }}>Our flower</p>
                    <h2 style={{ fontSize: '40px' }}>New Arrivals</h2>
                    <ul>
                        <li style={{ border: '2px solid #f45d96', padding: '5px' }}>All</li>
                        <li>Bouqet</li>
                        <li>Flower box</li>
                        <li>Flower shelf</li>
                        <li>Basket of flower</li>
                        <li>Gift combos</li>
                    </ul>
                </div>
                <div className="sort-search">
                    <div className="search">
                        <input type="text" placeholder='Search ...' onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                    <div className="sort" onChange={(e) => handleSort(e.target.value)}>
                        <select className="form-select">
                            <option value="default">Default</option>
                            <option value="firstCheap">First cheap</option>
                            <option value="firstExpensive">First expensive</option>
                            <option value="fromAtoZ">From A to Z</option>
                            <option value="fromZtoA">From Z to A</option>
                        </select>
                    </div>
                </div>
                <div className="card-wrapper">

                    {
                        flowers.map((flower) => (
                            <div className="card" key={flower.id}>
                                <div className="image">
                                    <img src={flower.image} alt="" style={{width:"250px",height:"300px"}}/>
                                </div>
                                <div className="icons">
                                    <div className="icon"><button><Link to={`/${flower.id}`} style={{ color: "black" }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg></Link></button></div>
                                    <div className="icon">
                                        <button onClick={() => handleBasket(flower)}>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                                        </button>
                                    </div>
                                    <div className="icon">
                                        <button onClick={() => handleFavorites(flower)}>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <span style={{ fontSize: '20px' }}>{flower.name}</span>
                                <h5>{flower.price}$</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionSix

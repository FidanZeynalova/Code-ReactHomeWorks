import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';
import { BasketFlowers } from '../../../context/BasketContext';
import Swal from 'sweetalert2';
import { FavoritesFlowers } from '../../../context/FavoritesFlowers';

function Detail() {
  let [flower, setFlower] = useState("")
  let { basketFlowers, setBasketFlowers } = useContext(BasketFlowers)
  let { favoritesFlowers, setFavoritesFlowers } = useContext(FavoritesFlowers)
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/flowers/${id}`)
      .then((res) => {
        setFlower(res.data)
      })
  }, [])

  // Basket add etmek
  function handleBasket(flower) {
    let basketFlower = basketFlowers.find(basket => basket.id == flower.id)
    if (basketFlower) {
      basketFlower.count++
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
  // Detail-den favorites add etmek
  function handleFavorites(flower) {
    let findFav = favoritesFlowers.find(favFlower => favFlower.id == flower.id)
    if (findFav) {
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

  return (
    <div className='User-detail'>
      <div className="container">
        <h1 style={{ color: "#f45d96" }}>Flower Detail Page</h1>

        <div className="card">
          <div className="img">
            <img src={flower.image} alt={flower.name} style={{ width: "300px", borderRadius: "10px", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="text">
            <h1>{flower.name} </h1>
            <span>{flower.description} </span>
            <p>{flower.price} $</p>
            <div className="icons">
              <div className="icon"><button><Link to={`/`} style={{ color: "black" }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 7V11L2 6L8 1V5H13C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21H4V19H13C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7H8Z"></path></svg></Link></button></div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail

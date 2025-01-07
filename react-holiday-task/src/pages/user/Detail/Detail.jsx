import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';
import { BasketFlowers } from '../../../context/BasketContext';
import Swal from 'sweetalert2';
import { FavoritesFlowers } from '../../../context/FavoritesFlowers';
import { Helmet } from 'react-helmet';

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

    <>
      <Helmet>
        <link rel="icon" href="data:image/png;base64,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" />
        <title>Detail Page</title>
      </Helmet>
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
    </>
  )
}

export default Detail

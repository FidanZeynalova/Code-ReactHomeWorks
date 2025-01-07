import React, { useContext } from 'react'
import { FlowersContext } from '../../../context/FlowersContext'
import { FavoritesFlowers } from '../../../context/FavoritesFlowers'
import { Link } from 'react-router'
import Swal from 'sweetalert2'
import { BasketFlowers } from '../../../context/BasketContext'
import { Helmet } from 'react-helmet'

function Favorites() {
  let { flowers, setFlowers } = useContext(FlowersContext)
  let { basketFlowers, setBasketFlowers } = useContext(BasketFlowers)
  let { favoritesFlowers, setFavoritesFlowers } = useContext(FavoritesFlowers)


  // Delete
  function handleDelete(flower) {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove ${flower.name} from your favorites?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        let delFlower = favoritesFlowers.filter(fav => fav.id !== flower.id)
        setFavoritesFlowers(delFlower)
        Swal.fire({
          title: "Deleted!",
          text: `${flower.name} successfully removed from favorites`,
          icon: "success"
        });
      }
    });
  }
  // Clear
  function handleClear() {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to clear your favorites?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setFavoritesFlowers([])
        Swal.fire({
          title: "Deleted!",
          text: "Favorites cleared successfully",
          icon: "success"
        });
      }
    });
  }
  // Baskete elave etmek
  function handleBasket(flower) {
    let basketFlower = basketFlowers.find(basketF => basketF.id == flower.id)
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

  return (

 <>
 <Helmet>
  <link rel="icon" type='image/png' href="data:image/png;base64,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" />
      <title>Favorites Page</title>
 </Helmet>
    <div className="User-favorites">
      <div className="container">
        <h1 style={{ color: "#f45d96" }}>Your Favorites Flowers</h1>

        {
          favoritesFlowers.length === 0 ? (
            <div className="empty">
              <h1>Your favorites is empty🦋</h1>
              <button><Link to={"/"} style={{ color: "white", textDecoration: "none" }}>Go Shopping!</Link></button>
            </div>
          ) : (
            <div className="cards-wrapper">
              {favoritesFlowers.map((flower) => (
                <div className="card" key={flower.id}>
                  <div className="image">
                    <img src={flower.image} alt="" />
                  </div>
                  <div className="icons">
                    <div className="icon"><Link to={`/${flower.id}`} style={{ color: "black" }}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg></Link></div>
                    <div className="icon">
                      <button onClick={() => handleBasket(flower)}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                      </button>
                    </div>
                    <div className="icon">
                      <button onClick={() => handleDelete(flower)}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M51.9 76.6l25 25c-18.1 20.3-29 47.3-29 77.6 0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2c20.6-18.9 39.9-36.6 57.5-53.3l92.2 92 24-24-383.8-383-24.2 24.1zM464 179.1C464 114.2 414.1 64 349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64c-8.4 0-16.5.9-24.3 2.5l253.7 253.1C437.3 270.9 464 228 464 179.1z"></path></svg></button>
                    </div>
                  </div>
                  <span style={{ fontSize: '20px' }}>{flower.name}</span>
                  <h5>{flower.price}$</h5>
                </div>

              ))}
            </div>
          )}
        <button className='fav-clear' onClick={() => handleClear()}>Clear All</button>
      </div>
    </div>
 </>
  )
}

export default Favorites

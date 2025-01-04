import React, { useContext } from 'react'
import { FlowersContext } from '../../../context/FlowersContext'
import { FavoritesFlowers } from '../../../context/FavoritesFlowers'
import { Link } from 'react-router'
import Swal from 'sweetalert2'
import { BasketFlowers } from '../../../context/BasketContext'

function Favorites() {
  let { flowers, setFlowers } = useContext(FlowersContext)
  let {basketFlowers,setBasketFlowers} = useContext(BasketFlowers)
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
      basketFlower.count ++
    }else{
      setBasketFlowers([...basketFlowers,{...flower,count:1}])
    }
     Swal.fire({
                icon: "success",
                title: `${flower.name} added to basket!`,
                showConfirmButton: false,
                timer: 1500,
            });
  }

  return (
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
                    <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg></div>
                    <div className="icon">
                      <button onClick={() => handleBasket(flower)}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                      </button>
                    </div>
                    <div className="icon">
                      <button onClick={()=>handleDelete(flower)}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M51.9 76.6l25 25c-18.1 20.3-29 47.3-29 77.6 0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2c20.6-18.9 39.9-36.6 57.5-53.3l92.2 92 24-24-383.8-383-24.2 24.1zM464 179.1C464 114.2 414.1 64 349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64c-8.4 0-16.5.9-24.3 2.5l253.7 253.1C437.3 270.9 464 228 464 179.1z"></path></svg></button>
                    </div>
                  </div>
                  <span style={{ fontSize: '20px' }}>{flower.name}</span>
                  <h5>{flower.price}$</h5>
                </div>
               
              ))}
              </div>
            )}
         <button className='fav-clear' onClick={()=>handleClear()}>Clear All</button>
      </div>
    </div>
  )
}

export default Favorites

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketFlowers } from '../../../context/BasketContext'
import { FavoritesFlowers } from '../../../context/FavoritesFlowers'

function UserNavbar() {
  let { basketFlowers, setBasketFlowers } = useContext(BasketFlowers)
  let { favoritesFlowers, setFavoritesFlowers } = useContext(FavoritesFlowers)
  return (
    <div className='user-navbar'>
      <div className="container">
        <div className="image">
          <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="logo" />
        </div>

        <div className="nav">
          <ul style={{ textDecoration: "none" }}>
            <li><Link to="" style={{ color: "#f460a6", textDecoration: "none" }}>Home</Link></li>
            <li><Link style={{ textDecoration: "none" }}>About</Link></li>
            <li><Link style={{ textDecoration: "none" }}>Services</Link></li>
            <li><Link style={{ textDecoration: "none" }}>Shop</Link></li>
            <li><Link style={{ textDecoration: "none" }}>Pages</Link></li>
            <li><Link style={{ textDecoration: "none" }}>Blog</Link></li>
            <li><Link style={{ textDecoration: "none" }}>Contact</Link></li>
          </ul>
        </div>
        {/* <div className="search">
      <input type="text" placeholder='Search ...' />
    </div> */}
        <div className="basket-fav">
          <button><Link to="favorites" style={{ color: "black", textDecoration: "none", fontSize: "30px", display: "flex", alignItems: "center" }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"></path></svg><span style={{ fontSize: "17px", marginLeft: "2px" }}>({favoritesFlowers.length})</span></Link></button>
          <button><Link to="basket" style={{ color: "black", textDecoration: "none", fontSize: "25px", display: "flex", alignItems: "center" }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path></svg><span style={{ fontSize: "17px", marginLeft: "4px" }}>({basketFlowers.length})</span></Link></button>
          <div className="res-icon">
            <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" style={{ fontSize: "25px" }}></path></svg></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar

import React, { useContext, useEffect, useState } from 'react'
import { BasketContext } from '../../../context/basketContext'
import { Link } from 'react-router';



function Basket() {
  let [totalPrice, setTotalPrice] = useState(0)
  let { basketBooks, setBasketBooks } = useContext(BasketContext)


  function handleDecrease(basketBook) {
    if (basketBook.count > 1) {
      basketBook.count--
      setBasketBooks([...basketBooks])
    } else {
      let filtered = basketBooks.filter(book => book.id != basketBook.id)
      setBasketBooks(filtered)
    }
  }
  function handleIncrease(basketBook) {
    basketBook.count++
    setBasketBooks([...basketBooks])
  }

  // Total Price
  useEffect(() => {
    let total = basketBooks.reduce((sum, item) => sum + (item.price * item.count), 0)
    setTotalPrice(total.toFixed(2))
  })
  // Delete
  function handleDelete(id) {
    let filtered = basketBooks.filter(basketBook => basketBook.id !== id)
    setBasketBooks(filtered)
    console.log(filtered);
  }
  // Clear
  function handleClear() {
    setTotalPrice(0)
    setBasketBooks([])
  }

  return (
      <>
      {
        basketBooks.length == 0 ? (
          <div className="basket-head">
            <h1>Basket is empty!😓</h1>
            <button><Link to="/books" className='link' style={{ textDecoration: "none" }}>Go Shopping!</Link></button>
          </div>
        ) : (
          <div className='admin-basket'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>TotalPrice</th>
                  <th>Decrease</th>
                  <th>Count</th>
                  <th>Increase</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  basketBooks.map((basketBook) => (
                    <tr key={basketBook.id}>
                      <td>{basketBook.id}</td>
                      <td><img src={basketBook.image} alt={basketBook.title} style={{ height: "100px", width: "100px", objectFit: "cover" }} /></td>
                      <td>{basketBook.title}</td>
                      <td>{basketBook.price}$</td>
                      <td>{(basketBook.price * basketBook.count).toFixed(2)}$</td>
                      <td><button onClick={() => handleDecrease(basketBook)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></button></td>
                      <td>{basketBook.count}</td>
                      <td><button onClick={() => handleIncrease(basketBook)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></button></td>
                      <td><button onClick={() => handleDelete(basketBook.id)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button></td>
                    </tr>
                  ))
               }

              </tbody>
            </table>
            <div className="line"></div>
            <div className="total">
            <span><b>Total Price:{totalPrice}$</b></span>
            <button onClick={() => handleClear()}>Clear Price</button>
            </div>
          </div>
         )
        }
      </>
      )
    }


export default Basket

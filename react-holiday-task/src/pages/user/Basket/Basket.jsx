import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import { BasketFlowers } from '../../../context/BasketContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

function Basket() {
  let [totalPrice, setTotalPrice] = useState(0)
  let { basketFlowers, setBasketFlowers } = useContext(BasketFlowers)

  // Azaltmag
  function handleDecrease(flower) {
    if (flower.count > 1) {
      flower.count--
      setBasketFlowers([...basketFlowers])
    } else {
      let filter = basketFlowers.filter(basketFlower => basketFlower.id !== flower.id)
      setBasketFlowers(filter)
    }
  }
  // Artim
  function handleIncrease(flower) {
    flower.count++
    setBasketFlowers([...basketFlowers])
  }
// Delete
  function handleDelete(flower) {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure to delete ${flower.name}?😊`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        let deleteFlower = basketFlowers.filter(basketFlower => basketFlower.id !== flower.id);
        setBasketFlowers(deleteFlower);
  
        Swal.fire({
          title: "Deleted!",
          text: `${flower.name} has been successfully deleted👌`,
          icon: "success",
        });
      }
    });
  }
  // Total Price
  useEffect(() => {
    let total = basketFlowers.reduce((sum, flower) => sum + flower.price * flower.count, 0)
    setTotalPrice(total.toFixed(2))
  }, [basketFlowers])

  // Clear All
  function handleClear() {
    Swal.fire({
      title: "Are you sure?",
      text: "You are sure to delete everything in the basket?😊",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setBasketFlowers([])
        setTotalPrice(0)
        Swal.fire({
          title: "Deleted!",
          text: "Basket successfully emptied.👌",
          icon: "success"
        });
      }
    });
  }
  return (
    <>
    <Helmet>
      <title>Basket Page</title>
      <link rel="icon" type='image/png' href="data:image/png;base64,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" />
    </Helmet>
    <div className='User-Basket'>
      <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",color:"#f45d96"}}>Your Basket Page</h1>
      {
        basketFlowers.length == 0 ? (
          <div className="empty">
            <h1>Your basket is empty🦋</h1>
            <button><Link to={"/"} style={{color:"white",textDecoration:"none"}}>Go Shopping!</Link></button>
          </div>
          
        ) : (
          
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>Image</th>
                <th>Flower Name</th>
                <th>Price($)</th>
                <th>Total Price</th>
                <th>Decrease</th>
                <th>Count</th>
                <th>Increase</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                basketFlowers.map((flower) => (
                  <tr key={flower.id}>
                    <td><img src={flower.image} alt={flower.name} style={{ width: "100px", height: "150px", objectFit: "cover" }} /></td>
                    <td>{flower.name}</td>
                    <td>{flower.price}($)</td>
                    <td>{(flower.price * flower.count).toFixed(2)}$</td>
                    <td onClick={() => handleDecrease(flower)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></td>
                    <td>{flower.count}</td>
                    <td onClick={() => handleIncrease(flower)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></td>
                    <td><button onClick={() => handleDelete(flower)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path></svg></button></td>
                  </tr>
                ))
              }
            </tbody>
          </Table>

        )
      }
      <div className="result">
      <h3>Total Price: {totalPrice}$</h3>
      <button onClick={()=>handleClear()}>Clear All</button>
      </div>
    </div>
    </>
  )
}

export default Basket

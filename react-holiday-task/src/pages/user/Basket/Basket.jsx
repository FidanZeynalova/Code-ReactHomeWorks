import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import { BasketFlowers } from '../../../context/BasketContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

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
  )
}

export default Basket

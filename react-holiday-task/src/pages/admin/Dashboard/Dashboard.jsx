import React, { useContext } from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FlowersContext } from '../../../context/FlowersContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



function Dashboard() {
  let { flowers, setFlowers } = useContext(FlowersContext)

  async function handleDelete(id,flower) {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure to delete ${flower.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/flowers/${id}`)
        .then(() => {
          let updatedFlowers = flowers.filter(flower => flower.id !== id);
          setFlowers(updatedFlowers);
        })
        Swal.fire({
          title: "Deleted!",
          text: `${flower.name} has been successfully deleted`,
          icon: "success"
        });
      }
    });
 
  }
  return (
    <div className='Admin-dashboard'>
      <div className="container">
        <h1 style={{ color: "#f45d96" }}>Admin Flowers Table</h1>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>ID</th>
              <th>Flower Image</th>
              <th>Flower Name</th>
              <th>Price</th>
              <th>Info</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              flowers.map((flower) => (
                <tr key={flower.id}>
                  <td>{flower.id}</td>
                  <td><img src={flower.image} alt={flower.name} style={{ width: "150px", height: "150px", objectFit: "cover" }} /></td>
                  <td>{flower.name}</td>
                  <td>{flower.price}$</td>
                  <td style={{ fontSize: "30px" }}>
                    <Link to ={ `/admin/${flower.id}`} style={{color:"black"}}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
                    </Link>
                  </td>
                  <td style={{ fontSize: "30px" }}>
                    <Link to ={ `/admin/edit/${flower.id}`} style={{color:"black"}}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </Link>
                  </td>
                  <td style={{ fontSize: "30px" }} onClick={() => handleDelete(flower.id,flower)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z" ></path></svg></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Dashboard;

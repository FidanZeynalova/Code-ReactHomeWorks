import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';

function AdminDetail() {
  let [flower, setFlower] = useState("")
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/flowers/${id}`)
      .then((res) => {
        setFlower(res.data)
      })
  }, [])
  return (
    <div className='Admin-detail'>
      <div className="container">
        <h1 style={{ color: "#f45d96" }}>Admin Flower Detail Page</h1>

        <div className="card">
          <div className="img">
            <img src={flower.image} alt={flower.name} style={{ width: "300px", borderRadius: "10px", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="text">
            <h1>{flower.name} </h1>
            <span>{flower.description} </span>
            <p>{flower.price} $</p>
            <div className="icons">
              <div className="icon">
                <Link to={`/admin/edit/${flower.id}`} style={{ color: "black" }}>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </Link>
              </div>
              <div className="icon">
              <Link to={`/admin/dashboard`} style={{ color: "black" }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 7V11L2 6L8 1V5H13C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21H4V19H13C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7H8Z"></path></svg></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDetail

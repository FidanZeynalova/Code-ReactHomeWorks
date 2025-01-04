import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

function AdminBookDetail() {
  let [book, setBook] = useState("")
  let { id } = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:4000/books/${id}`)
      .then((res) => {
        setBook(res.data)
      })
  }, [])


  return (
    <div>
      <div className="admin-bookDetail">
        <div className="image"><img src={book.image} alt="" style={{ height: "350px", width: "250px", objectFit: "cover"}} /></div>
        <div className="content">
          <h1 style={{ fontSize: "35px" }}>{book.title}</h1>
          <p style={{ fontSize: "20px" }}>{book.genre}, {book.author}, {book.publishedYear}il, {book.pagesCount} səhifə</p>
          <p>{book.description}</p>
          <p>{book.price}$</p>
          <p>{book.language}</p>
          <button><Link to="/admin/books" className='Link'>Go Back</Link></button>
        </div>
      </div>
    </div>
  )
}

export default AdminBookDetail

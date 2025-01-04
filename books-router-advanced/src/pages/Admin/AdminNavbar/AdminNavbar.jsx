import React from 'react'
import { Link } from 'react-router'

function AdminNavbar() {
  return (
    <div className="admin-navbar-container">
      <div className='admin-navbar'>
      <div className="logo">
      <h1> <Link to = "books" style={{color:"black",textDecoration:"none"}}>🕮Books</Link></h1>
      </div>
      <div className="list">
        <ul>
          <li><Link to = "/admin"style={{color:"black"}}>Home</Link></li>
          <li><Link to = "books"style={{color:"black",textDecoration:"none"}}>Books Table</Link></li>
        </ul>
      </div>
      
    </div>
    </div>
  )
}

export default AdminNavbar

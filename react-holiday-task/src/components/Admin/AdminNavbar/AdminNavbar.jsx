  import React from 'react'
  import { Link, NavLink } from 'react-router'

  function AdminNavbar() {
    return (
      <div className='admin-navbar'>
      <div className="container">
      <div className="image">
        <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="logo" />
      </div>
      
    <div className="nav">
      <ul>
        <li><Link to={""} style={{ color: "black", textDecoration: "none" }}>Dashboard</Link></li>
        <li><NavLink to={"dashboard"}  style={({ isActive }) => ({ color: isActive ? "#f460a6" : "black", textDecoration: "none" })}>Products</NavLink></li>
        <li><NavLink to={"add"}  style={({ isActive }) => ({ color: isActive ? "#f460a6" : "black", textDecoration: "none" })}>Add</NavLink></li>
      </ul>
    </div>
      </div>
    </div>
    )
  }

  export default AdminNavbar

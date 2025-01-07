import React from 'react'
import { Helmet } from "react-helmet"
function AdminHome() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwmcAB6kiewyj-NjTGdqouDAJNndEjhNbzQ&s" />
        <title>Admin Page</title>
      </Helmet>
      <div className='Admin-home'>
        <h1>Welcome Admin!❤️</h1>
      </div>
    </>
  )
}

export default AdminHome;

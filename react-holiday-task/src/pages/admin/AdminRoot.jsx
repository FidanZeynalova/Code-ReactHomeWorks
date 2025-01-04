import React from 'react'
import AdminFooter from '../../components/Admin/AdminFooter/AdminFooter'
import { Outlet } from "react-router"
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar'

function AdminRoot() {
  return (
    <div>
      <AdminNavbar/>
      <Outlet/>
      <AdminFooter/>
    </div>
  )
}

export default AdminRoot

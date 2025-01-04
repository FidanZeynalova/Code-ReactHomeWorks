import React from 'react'
import { Outlet } from "react-router"
import AdminNavbar from './AdminNavbar/AdminNavbar'
import AdminFooter from './AdminFooter/AdminFooter'

function AdminRoot() {
    return (
        <div>
            <AdminNavbar />
            <Outlet/>
            <AdminFooter />
        </div>
    )
}

export default AdminRoot

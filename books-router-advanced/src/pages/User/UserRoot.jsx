import React from 'react'
import { Outlet } from "react-router"
import UserFooter from './UserFooter/UserFooter'
import UserNavbar from './UserNavbar/UserNavbar'

function UserRoot() {
    return (
        <div>
            <UserNavbar />
            <Outlet />
            <UserFooter />
        </div>
    )
}

export default UserRoot

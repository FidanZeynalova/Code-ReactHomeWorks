import React from 'react'
import UserFooter from '../../components/User/UserFooter/UserFooter'
import { Outlet } from "react-router"
import UserNavbar from '../../components/User/UserNavbar/UserNavbar'

function UserRoot() {
  return (
    <div>
      <UserNavbar/>
      <Outlet/>
      <UserFooter/>
    </div>
  )
}

export default UserRoot

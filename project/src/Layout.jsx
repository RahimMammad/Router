import React from 'react'
import Navbar from './layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
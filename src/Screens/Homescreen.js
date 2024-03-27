import React from 'react'
import Navbar from '../components/Navbar'
// import Body from '../components/Body'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Homescreen = () => {
  return (
    <div >
      <div><Navbar/></div>
      <div><Outlet/></div>
      <div><Footer/></div>
      
    </div>
  )
}

export default Homescreen

import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo'></img>
        <ul className='navbar-menu'></ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-App</li>
        <li>Contact Us</li>

    </div>
  )
}

export default Navbar
import React from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets"

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={assets.logo} className='logo'></img>
            <ul className='navbar-menu'>
                <li>Home</li>
                <li>Menu</li>
                <li>Mobile-App</li>
                <li>Contact Us</li>
            </ul>

            <div className='navbar-right'>
                <img src={assets.search_icon}></img>
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon}></img>
                    <div className='dot'></div>

                </div>
                <button>Sign in</button>

            </div>


        </div>
    )
}

export default Navbar
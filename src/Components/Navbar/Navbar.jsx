import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import basket_icon from '../assets/basket_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" id="logo" />
        <ul className="navbar-menu">
            <li>Home</li>
            <li>products</li>
            <li>AboutUs</li>
            <li>Customer Service</li>
        </ul>
        <div class="navbar-right">
            <img src={search} alt="" className="search" />
            <div className="navbar-search-icon">
                <img src={basket_icon} alt="" className="basket" />
                <div className="dot"></div>
                <button>Sign in</button>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar
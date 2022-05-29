import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar({ openDrawer }) {
    return (
        <div className='navbar'>
            <button className="hamburger" onClick={openDrawer}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="navbar-pages">
                <ul className='navbar-pages-link'>
                    <NavLink className='link-nav ' to='/'>Home</NavLink>
                    <NavLink className='link-nav' to='/shop'>Shop</NavLink>
                    <NavLink className='link-nav' to='/cart'>Cart</NavLink>

                </ul>
            </div>
            <div className="navbar-users">
                <ul className='navbar-users-link'>
                    <NavLink className='link-nav' to='/register'>Register</NavLink>
                    <NavLink className='link-nav' to='/login '>Login</NavLink>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
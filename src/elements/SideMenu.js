import React from 'react'
import { Link } from 'react-router-dom'
import './sidemenu.css'
function SideMenu({ closeDrawer, open }) {
    //console.log("open", open)
    return (
        <div className={`sidemenu ${open ? "active" : ""} `} onClick={closeDrawer}>

            <div className="sidemenu-nav">

                <div className="sidebar-pages">
                    <ul className='sidebar-pages-link'>
                        <Link className='link-nav' to='/'>Home</Link>
                        <Link className='link-nav' to='/shop'>Shop</Link>
                        <Link className='link-nav' to='/cart'>Cart</Link>

                    </ul>
                </div>
                <div className="sidebar-users">
                    <ul className='sidebar-users-link'>
                        <Link className='link-nav' to='/register'>Register</Link>
                        <Link className='link-nav' to='/login '>Login</Link>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default SideMenu
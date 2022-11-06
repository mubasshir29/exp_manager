import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='container'>
    <div className='nav-container'>
        <div className='logo-container'>
            <span className='logo'>Track Money</span>
        </div>
        <ul className='nav-list'>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>Archives</a>
            </li>
            <li>
                <a>Borrow</a>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <nav>
        <span>Shopify</span>
        <div className="right">
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li > <Link to='/cart' className='cart-btn'> Cart </Link> </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
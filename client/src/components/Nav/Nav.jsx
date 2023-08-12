import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Nav.css'
const Nav = () => {
  const data = useSelector((state)=>{return state.cart});
  console.log(data);
  return (
    <nav>
        <span>Shopify</span>
        <div className="right">
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li > <Link to='/cart' className='cart-btn'> Cart <span className='cnt'>{data.length}</span> </Link> </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
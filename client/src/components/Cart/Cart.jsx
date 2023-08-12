import React from 'react'
import Nav from '../Nav/Nav'
import { useSelector,useDispatch } from 'react-redux';
import { removeItem } from '../../store/slices/cart';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>{ return state.cart});
  return (
    <div>
        <Nav/>
        <div className="container">
          
        {      
          cart.length>0 ? cart.map((e,id)=>{
            return <div className='card' key={id}>
                <div className="top"> <img src={e.image} alt="" /> </div>
                <div className="bottom">
                <h4>
                {e.title.slice(0,30)+"..."}
                </h4>
                <p className='desc'> {e.description.slice(0,60)+"..."} </p>
                <h3 className='price'>Rs.{e.price }/-</h3>
                <div className="buttons">
                 
                  <button onClick={()=>{dispatch(removeItem(id))}}> Remove Item </button>
                </div>
                </div>
            </div>
            
        }) : <div className='noitems'>
            <h3> No Items in the Cart</h3>
              <br />
            <Link to='/'>Go Back</Link> 
        </div>
      }
       </div>
    </div>
  )
}

export default Cart
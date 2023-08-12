import React, { useEffect } from 'react'
import Nav from './components/Nav/Nav'
import './App.css'
import {useSelector,useDispatch} from 'react-redux';
import { addProduct } from './store/slices/product';
import {addItem} from './store/slices/cart'

const App = () => {
  const dispatch = useDispatch();
  
  const products  = useSelector((state)=>{ return state.products });
  const cart = useSelector((state)=>{ return state.cart});
  const fetchPrdcts = async () => 
  {
    const products = await fetch("https://fakestoreapi.com/products");
    const json = await products.json();
    json.forEach(element => {
        dispatch(addProduct(element));
      });
  }
  useEffect(()=>{
    fetchPrdcts();   
    // eslint-disable-next-line 
  },[]);
  const addCart = (id)=>{
      dispatch(addItem(products[id]));
  }
  return (
    <>
    <Nav/>
    <div className="container">
      {
          products.map((e,id)=>{
            return <div className='card' key={id}>
                <div className="top"> <img src={e.image} alt="" /> </div>
                <div className="bottom">
                <h4>
                {e.title.slice(0,30)+"..."}
                </h4>
                <p className='desc'> {e.description.slice(0,60)+"..."} </p>
                <h3 className='price'>Rs.{e.price }/-</h3>
                <div className="buttons">
                  <button>Buy Now</button> 
                  <button onClick={()=>{addCart(id)}} disabled={ cart.includes(e) }> {cart.includes(e)?"Added":"Add to Cart"} </button>
                </div>
                </div>
            </div>
          })
      }
    </div>
    </>
  )
}

export default App
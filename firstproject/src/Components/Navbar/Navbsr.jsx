import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assetss/logo.png'
import cart_icon from '../Assetss/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import { createContext } from 'react';
import { useContext } from 'react';

const Navbsr = () => {
    const [menu,setMenu]=useState("shop");
    const{getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
     <div className='nav-logo'>
        < img src={logo} alt=""/>
        <p>StyleSpectrum</p>
     </div>
     < ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link  style={{ textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("mens")}}><Link  style={{ textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("kids")}}><Link  style={{ textDecoration:'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
     </ul>
     < div className='nav-login-cart'>
      <Link to='/login'><button>Login</button></Link>  
       <Link to='/cart'>< img src={cart_icon} alt=""/></Link> 
        <div className='nav-cart-count'>{getTotalCartItems()}

        </div>
     </div>
    </div>
  )
}
export default Navbsr
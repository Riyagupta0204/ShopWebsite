import React from 'react'
import './Offers.css'
import exclusive_image from '../Assetss/exclusive_image.png'
import {Link} from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
     <h1> Exclusive</h1>
     <h1>Offers For you</h1>
     <p>Only On Best Sellers Product</p>
    <Link to="/newcollection"> <button>Check Now</button></Link>
        </div>
        <div className='offers-right'>
            <img src= {exclusive_image} alt=""/> 
        </div>
      
    </div>
  )
}

export default Offers

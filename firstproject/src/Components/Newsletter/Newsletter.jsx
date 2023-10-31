import React from 'react'
import './Newsletter.css'
import {Link} from 'react-router-dom'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay Updated </p>
      <div>
        <input type="email" placeholder='Your Email id'/>
       <Link to="/confirmationpage"> <button>Subscribe</button></Link>
      </div>
    </div>
  )
}

export default Newsletter

import React from 'react'
import './ConfirmationPage.css'
import {Link} from 'react-router-dom'
const ConfirmationPage = () => {
  return (
    <div className='cp'>
    <h1>Thanks For Subscribing</h1>
    <div className="button-container">
   <Link to="/">   <button className='gb'>Go Back</button></Link>
    </div>
  </div>
    

  )
}

export default ConfirmationPage

import React from 'react'
import './CSS/LoginSign.css'
import  { useState } from 'react';
import {Link} from 'react-router-dom'

 const LoginSign = () => {
    const [isOtpModalVisible, setOtpModalVisible] = useState(false);

  const handleContinue = () => {
    // You can add your OTP sending logic here.
    // Once the OTP is sent, set isOtpModalVisible to true to display the modal.
    setOtpModalVisible(true);
  };

  const handleCloseModal = () => {
    // This function will hide the OTP modal when called.
    setOtpModalVisible(false);
  };
  return (
    <div className='loginsignup'>
        <div className='loginsignup-container'>
            <h1>Sign Up</h1>
            < div className='loginsignup-fields'>
                < input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Email Address'/>
                <input type="password" placeholder='Password'/>
            </div>
            <button  onClick={handleContinue}> Continue</button>
            <p className='loginsignup-login'>Already Have an Account?<span>Login here</span></p>
            <div classNmae="loginsignup-agree">
                <input type="checkbox" name='' id=''/>
                <p>By continuing ,i agree to the terms of use & privacy policy</p>
            </div>
        </div>
        {isOtpModalVisible && (
        <div className="otp-modal">
          <div className="otp-modal-content">
            <p>OTP Sent Successfully</p>
            <button  className='bt' onClick={handleCloseModal}>Close</button><button className="bt1">Verify</button>
          </div>
        </div>
      )}
    </div>
  )
}
export default LoginSign
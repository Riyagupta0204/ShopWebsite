import React from 'react'
import './Hero.css'
import './Hero.css'
import hand_icon from'../Assetss/hand_icon.png'
import arrow_icon from'../Assetss/arrow.png'
import hero_image from '../Assetss/hero_image.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p> Collections</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>
               <Link  to="/newcollection"><button className='latest'>Latest Collection</button></Link> </div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}
export default Hero
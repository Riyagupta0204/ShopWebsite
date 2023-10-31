import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assetss/star_icon.png';
import star_dull_icon from '../Assetss/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { createContext } from 'react';
import { useContext } from 'react';
import Cart from '../../Pages/Cart';
import{Link} from 'react-router-dom'

const ProductDisplay = (props) => {
  const { product } = props;
  const{addToCart}=useContext(ShopContext);

  if (!product) {
    // Handle the case where 'product' is undefined
    return null; // or render an error message
  }

  return (
    <div className='productdisplay'>

      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img className="productdisplay-img-main" src={product.image} alt='' />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        < div className='productdisplay-right-prices'>
            <div  className='productdisplay-right-price-old'>${product.old_price}</div>
           < div className='productdisplay-right-price-new'> $ {product.new_price}</div>
        
        </div>
        <div className='productdisplay-right-description'>
            A Lightweight,usually knitted ,pullovershirt.
        </div>
        < div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            < div className='productdisplay-right-size'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
       < button onClick ={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDisplay;
import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assetss/breadcrum_arrow.png';

const Breadcrums = (props) => {
  const { product } = props;

  if (!product) {
    // Handle the case where the product is undefined
    return (
      <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=""/> SHOP
      </div>
    );
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP {product.category && (
        <span>
          <img src={arrow_icon} alt="" /> {product.category}
        </span>
      )}
      {product.name && (
        <span>
          <img src={arrow_icon} alt="" /> {product.name}
        </span>
      )}
    </div>
  );
};

export default Breadcrums;

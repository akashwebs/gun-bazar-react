import React from 'react';
import './CardProduct.css'
import { BsFillCartFill } from "react-icons/bs";

const CardProduct = ({product,cartProduct}) => {
    const {name, price, action, img, bullet, category, capacity}=product;
    return (
        <div className='card'>
        <div className='image-container'>
          <img src={img} alt='' />
        </div>
        <div className='gun-info'>
          <h1>{name}</h1>
          <p>Bullet Type : {bullet} </p>
          <p>Capacity : {capacity}</p>
          <p>Action : {action}</p>
        </div>
        <div className='add-to-cart'>
          <button onClick={()=>cartProduct(product)}>
            <BsFillCartFill className='icon' />
          </button>
          <h1>{price}</h1>
        </div>
      </div>
    );
};

export default CardProduct;
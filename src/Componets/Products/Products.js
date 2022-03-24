import React, { useEffect, useState } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './Products.css'

const Products = ({products, cartProduct}) => {

   

    return (
        <div className=''>
           
            <div className='product-container'>

            {
                products.map(product=><CardProduct 
                    product={product}
                    key={product.id}
                    cartProduct={cartProduct}
                ></CardProduct>)
            }
            </div>
            
        </div>
    );
};

export default Products;
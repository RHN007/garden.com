import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Product = ({product, handleAddToCart}) => {

    const {name,img,price,ratings} = product


   
    return (
         <div className='product'>
                <img src={img} alt="" />
                <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p>Ratings : {ratings}</p>
               
              
                </div>

            <button className='btn-cart' onClick={()=>handleAddToCart(product)}>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;
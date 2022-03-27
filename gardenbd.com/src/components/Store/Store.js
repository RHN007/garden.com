import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] =useState([])
  
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    

    return (
        <div className= 'store-container'>
           
           
            <div className='products-container'>
                {
                products.map(product => <Product key ={product.id}
                product = {product}
                // handleAddToCart = {handleAddToCart}
                
                ></Product>)
            }

         

            </div>
            <div className='cart-container'>
                <Cart cart ={cart}></Cart>

            </div>
        </div>
    );
};

export default Store;
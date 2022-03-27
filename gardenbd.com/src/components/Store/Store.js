import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([])
    // console.log(products)
   
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    

    const [cart, setCart] =useState([])

    

    const handleAddToCart =(product) => {
        //  setCart(product)
    if((cart.length >=4 )){
        alert('You cannot add more than 4 items at a time ')
    }
    else{
        const newCart = [...cart,product];
        setCart(newCart); 
    }     
    }

        const handleRemoveItem = (cart) => {
            
            setCart()
        }
  
   

    

    return (
        <div className= 'store-container'>     
            <div className='products-container'>
                {
                products.map(product => <Product key ={product.id}
                product = {product}
                handleAddToCart = {handleAddToCart}
                
                ></Product>)
            }
            </div>
            <div className='cart-container'>
                   
                 <Cart cart={cart}
                 handleRemoveItems = {handleRemoveItem}
                 ></Cart>  
                

            </div>
        </div>
    );
};

export default Store;
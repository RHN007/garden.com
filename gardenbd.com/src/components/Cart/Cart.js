import React from 'react';
import './Cart.css'
const Cart = ({cart} ) => {
    
   
    return (
        <div className='cart'>
            
            <h2 style={{color:"green"}}> Order Cart </h2>
            <p>Selected Items : {cart.length}</p>
           
           
           
            {
                cart.map((item)=> <h4 key={item.id} ><img src={item.img} alt="" /> {item.name}</h4>)
            }
           
        </div>
    );
};

export default Cart;
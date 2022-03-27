import React from 'react';
import './Cart.css'
const Cart = (cart) => {
    return (
        <div className='cart'>
            <h4>Selection Summary</h4>
            <p>Items : {cart.length}</p>
        </div>
    );
};

export default Cart;
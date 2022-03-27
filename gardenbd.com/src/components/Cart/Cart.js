import React, { useState } from 'react';
// import Product from '../Product/Product';
import './Cart.css'
const Cart = ({cart, handleRemoveItem} ) => {
    console.log(cart)
 const items = [
    {
       name: "Gardening Tool 3 in one",
    },
    {
      name: "Mud Pot 12 inch"
    },
     {
      name: "White Pot"
    },
     {
      name: "Prunner"
    },
      {
      name: "Water Pot 200Ml"
    }


  ];

  const [itemNames, setItemNames] = useState(0);

  const randomItem = () => {
    const len = items.length;
    setItemNames(Math.floor(Math.random() * len));
  };
  
 

    return (
        <div className='cart'>
            
            <h2 style={{color:"green"}}> Order Cart </h2>
            <p>Selected Items : {cart.length}</p>
           
           
           
            {
                cart.map((item)=> <h4 key={item.id} ><img src={item.img} alt="" /> {item.name}</h4>)
            }
           


           
           <button className='random-button' onClick={randomItem} >Choose One For Me</button>

            <p>Random Item:
                {items[itemNames].name}  </p>


           <button className='delete-button' onClick={() => handleRemoveItem}  >Deselect All </button>
        </div>
    );
};

export default Cart;
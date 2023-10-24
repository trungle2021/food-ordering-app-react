import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({});

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([])
    const [totalItems, setTotalItems] = useState(0)

  

    useEffect(() =>{
      const calculateTotalItems = () => {
        console.log("Calculating total items")
          return cartItems.reduce((accumulator,currentItem)=>{
            return accumulator+currentItem.quantity;
          },0)
      }

      setTotalItems(calculateTotalItems)

      return () => {}
    },[cartItems])

  return (
    <CartContext.Provider value={
      {
        cart:{cartItems,setCartItems}, totalItems
      }
      } >
         {props.children}
    </CartContext.Provider>
  )
}

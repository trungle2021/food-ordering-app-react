import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [scaleCart, setScaleCart] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0) {
      console.log(cartItems);
      const calculateTotalItems = () => {
        return cartItems.reduce((accumulator, currentItem) => {
          return accumulator + parseInt(currentItem.quantity);
        }, 0);
      };
      setTotalItems(calculateTotalItems);
    }

    return () => {};
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cart: { cartItems, setCartItems },
        totalItems,
        scale: {
          scaleCart,
          setScaleCart,
        },
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [scaleCart, setScaleCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  useEffect(() => {
    const calTotalPrice = cartItems.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    setTotalPrice(calTotalPrice);
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length > 0) {
      const calculateTotalItems = () => {
        return cartItems.reduce((accumulator, currentItem) => {
          return accumulator + parseInt(currentItem.quantity);
        }, 0);
      };
      setTotalItems(calculateTotalItems);
    }
    return () => {};
  }, [cartItems]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setScaleCart(false);
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [scaleCart]);

  const values = {
    cart: { cartItems, setCartItems },
    totalPrice: { totalPrice, setTotalPrice },
    totalItems: totalItems,
    scale: { scaleCart, setScaleCart },
    isOpen: { cartIsOpen, setCartIsOpen },
  };

  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
};

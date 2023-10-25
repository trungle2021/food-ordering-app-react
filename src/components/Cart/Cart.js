import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import Button from "../UI/Button/Button";
import { CartContext } from "../../context/CartContext";
import Overlay from "../UI/Overlay/Overlay";
import Modal from "../UI/Modal/Modal";

export default function Cart({ className }) {
  const { totalItems, scale } = useContext(CartContext);
  const scale_animation = scale.scaleCart ? styles[`scale-cart`] : "";
  const [cartOpen, setCartOpen] = useState(false);

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleOverlayClick = () => {
    setCartOpen(false);
  };
  return (
    <>
      <Button
        onClick={handleOpenCart}
        className={`${className}  ${scale_animation}`}
      >
        <img src="/cart-icon.png" alt="cart icon" />
        <p>Your cart</p>
        <p className={styles["cart-quantity"]}>{totalItems}</p>
      </Button>
      {cartOpen && <Overlay id={`overlay`} onClick={handleOverlayClick} />}
      {cartOpen && <Modal />}
    </>
  );
}

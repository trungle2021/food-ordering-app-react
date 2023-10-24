import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Button from "../UI/Button/Button";
import { CartContext } from "../../context/CartContext";

export default function Cart({ className }) {
  const { totalItems, scale } = useContext(CartContext);
  const scale_animation = scale.scaleCart === true ? `scale-cart` : "";

  return (
    <Button className={`${className}  ${scale_animation}`}>
      <img src="/cart-icon.png" alt="cart icon" />
      <p>Your cart</p>
      <p className={styles["cart-quantity"]}>{totalItems}</p>
    </Button>
  );
}

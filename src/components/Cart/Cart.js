import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Button from "../UI/Button/Button";
import { CartContext } from "../../store/cart-context";
import Overlay from "../UI/Overlay/Overlay";
import Card from '../UI/Card/Card';
import { CartItem } from "./CartItem/CartItem";

export default function Cart({ className }) {
  const { cart,totalPrice,totalItems, scale,isOpen } = useContext(CartContext);
  const scale_animation = scale.scaleCart ? styles[`scale-cart`] : "";
  const cartItem = cart.cartItems.map((meal) => {
    return (
      <CartItem
        id={meal.id}
        key={meal.id}
        quantity={meal.quantity}
        name={meal.name}
        price={meal.price}
      />
    );
  });
  
  const handleOpenCart = () => {
    isOpen.setCartIsOpen(true);
  };
  const handleOverlayClick = () => {
    isOpen.setCartIsOpen(false);
  };
  const modalBody = {
    border:"none",
    borderBottom: "1px solid black"
  }
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
      {isOpen.cartIsOpen && <Overlay id={`overlay`} onClick={handleOverlayClick} />}
      {isOpen.cartIsOpen && 
        <div className={styles.modal} id="cart-modal">
          <div className="modal-header">
            <span id="closeModal" className={styles.close}>
              &times;
            </span>
          </div>
          <div style={modalBody}>
            <Card className={styles['available-meals']}>
              <ul>{cartItem}</ul>
            </Card>
          </div>
          <div className="modal-footer">
            <div>
              <p>{totalPrice.totalPrice}</p>
            </div>
            <div>
              <Button>Close</Button>
              <Button>Order</Button>
            </div>
          </div>
        </div>
      }
    </>
  );
}

import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import Button from "../UI/Button/Button";
import { CartContext } from "../../store/cart-context";
import Overlay from "../UI/Overlay/Overlay";
import Card from '../UI/Card/Card';
import { CartItem } from "./CartItem/CartItem";

export default function Cart({ className }) {
  const { cart,totalItems, scale } = useContext(CartContext);
  const scale_animation = scale.scaleCart ? styles[`scale-cart`] : "";
  const [cartOpen, setCartOpen] = useState(false);

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
      {cartOpen && 
        <div className={styles.modal} id="cart-modal">
          <div className="modal-header">
            <span id="closeModal" className={styles.close}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <Card className={styles['available-meals']}>
              <ul>{cartItem}</ul>
            </Card>
          </div>
          <div className="modal-footer">
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

import React, { useContext } from "react";
import styles from "./CartItem.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { CartContext } from "../../../store/cart-context";
export const CartItem = (props) => {
  const { cart, totalItems } = useContext(CartContext);

  const handleIncrementItem = () => {
    cart.setCartItems((prevState) => {
      const meal = cart.cartItems.find((meal) => meal.id === props.id);
      if (meal !== undefined) {
        return prevState.map((item) => {
          if (item.id === props.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
    });
  };
  const handleDecrementItem = () => {
    if (props.quantity === 1) {
      const pos = cart.cartItems.findIndex((item) => item.id === props.id);
      console.log(pos);
      return;
    }
    cart.setCartItems((prevState) => {
      const meal = cart.cartItems.find((meal) => meal.id === props.id);
      if (meal !== undefined) {
        return prevState.map((item) => {
          if (item.id === props.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      }
    });
  };

  return (
    <>
      <li className={styles["meal-item"]}>
        <div className={styles["meal-item-info"]}>
          <span className={styles.name}>{props.name}</span>
          <div className={styles["meal-item-info-price-quantity"]}>
            <p className={styles.price}>${props.price}</p>x{" "}
            <Input
              value={props.quantity}
              readOnly={true}
              type="number"
              id={`amount-item-${props.id}`}
              className={styles["quantity"]}
            />
          </div>
        </div>
        <div className={styles["meal-item-action"]}>
          <Button
            onClick={() => handleDecrementItem("DECREMENT")}
            className={styles["action-button"]}
          >
            -
          </Button>
          <Button
            onClick={() => handleIncrementItem("INCREMENT")}
            className={styles["action-button"]}
          >
            +
          </Button>
        </div>
      </li>
    </>
  );
};

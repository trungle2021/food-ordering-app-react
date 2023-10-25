import React, { useContext, useState } from "react";
import styles from "./CartItem.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { CartContext } from "../../../store/cart-context";
export const CartItem = (props) => {
  const { cart } = useContext(CartContext);

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
  const handleDecrementItem = () => {};
  // const reducer = (state, action) => {
  //   let meal = cart.cartItems.find((meal) => meal.id === props.id);
  //   console.log(meal);
  //   if (!meal) {
  //     console.log("not found item");
  //     return;
  //   }
  //   switch (action) {
  //     case "INCREMENT":
  //       cart.setCartItems((prevState) => {
  //         return prevState.map((meal) => {
  //           if (meal.id === props.id) {
  //             return {
  //               ...meal,
  //               quantity: parseInt(state) + 1,
  //             };
  //           }
  //           return meal;
  //         });
  //       });
  //       break;
  //     case "DECREMENT":
  //       cart.setCartItems((prevState) => {
  //         return prevState.map((meal) => {
  //           return {
  //             ...meal,
  //             quantity: parseInt(state) - 1,
  //           };
  //         });
  //       });
  //       break;
  //     default:
  //       throw new Error("Action Invalid");
  //   }
  // };
  // const [quantityItem, dispatchQuantity] = useReducer(reducer, props.quantity);
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

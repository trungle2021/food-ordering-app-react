import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import styles from "./MealItem.module.css";
import Input from "../../UI/Input/Input";
import { CartContext } from "../../../store/cart-context";

export default function MealItem(props) {
  const { cart, scale } = useContext(CartContext);
  const handleAddItemToCart = () => {
    const value = parseInt(
      document.getElementById("amount-item-" + props.id).value
    );
    if (value <= 0 || isNaN(value)) {
      return;
    }
    const newItem = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      quantity: value,
    };
    cart.setCartItems((prevState) => {
      let itemIsExist = prevState.find((item) => item.id === props.id);
      if (itemIsExist !== undefined) {
        return prevState.map((item) => {
          if (item.id === props.id) {
            return {
              ...item,
              quantity: parseInt(item.quantity) + value,
            };
          }
          return item;
        });
      } else {
        return [...prevState, newItem];
      }
    });

    scale.setScaleCart(true);
  };

  return (
    <>
      <li className={styles["meal-item"]}>
        <div className={styles["meal-item-info"]}>
          <h2>{props.name}</h2>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.price}>${props.price}</p>
        </div>
        <div className={styles["meal-item-action"]}>
          <div className={styles["amount-info-container"]}>
            <h3>Amount</h3>
            <Input
              defaultValue="0"
              type="number"
              className={`${styles["amount-item"]}`}
              id={`amount-item-${props.id}`}
            />
          </div>
          <Button
            onClick={handleAddItemToCart}
            className={styles["add-to-cart"]}
            type="button"
          >
            + Add
          </Button>
        </div>
      </li>
    </>
  );
}

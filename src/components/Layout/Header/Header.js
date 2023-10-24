import React, { useContext } from "react";
import Cart from "../../Cart/Cart";
import styles from "./Header.module.css";
import { CartContext } from "../../../context/CartContext";

export default function Header() {
  return (
    <>
      <div className={styles["header-container"]}>
        <header>
          <h2 className={styles["header-title"]}>ReactMeals</h2>
        </header>
        <Cart className={`${styles["cart-container"]}`} />
      </div>
      <div className={styles["main-container"]}>
        <img src="/meals.jpg" />
      </div>
    </>
  );
}

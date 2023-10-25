import React from 'react'
import styles from './CartItem.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
export const CartItem = (props) => {
  return (
    <>
    <li className={styles["meal-item"]}>
      <div className={styles["meal-item-info"]}>
        <span className={styles.name}>{props.name}</span>
        <div className={styles["meal-item-info-price-quantity"]}>
            <p className={styles.price}>${props.price}</p>
           x <Input
                value={props.quantity}
                defaultValue="0"
                type="number"
                id={`amount-item-${props.id}`}
                className={styles['quantity']}
                />
        </div>
      </div>
      <div className={styles["meal-item-action"]}>
        <Button className={styles['action-button']}>-</Button>
        <Button className={styles['action-button']}>+</Button>
      </div>
    </li>
  </>
  )
}

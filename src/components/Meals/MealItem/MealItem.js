import React, { useContext } from 'react'
import Button from '../../UI/Button/Button'
import styles from './MealItem.module.css'
import Input from '../../UI/Input/Input'
import { CartContext } from '../../../context/CartContext'
export default function MealItem(props) {
  const {cart} = useContext(CartContext)
  const handleAddItemToCart = () => {
    const newItem = {
      "id":props.id,
      "name":props.name,
      "description":props.description,
      "price":props.price,
    }
    cart.setCartItems(prevState => [...prevState,newItem])
    console.log(cart.cartItems)
  }
  return (
    <>
      <li className={styles['meal-item']}>
        <div className={styles['meal-item-info']}>
          <h2>{props.name}</h2>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.price}>${props.price}</p>
        </div>
        <div className={styles['meal-item-action']}>
          <div className={styles['amount-info-container']}>
            <h3>Amount</h3>
            <Input defaultValue="0" type="number" className={`${styles['amount-item']}`} id={`amount-item-${props.id}`} />
          </div>
          <Button onClick={handleAddItemToCart} className={styles['add-to-cart']} type="button">+ Add</Button>
        </div>
      </li>
    </>
  )
}

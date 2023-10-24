import React, { useContext} from 'react'
import styles from './Cart.module.css'
import Button from '../UI/Button/Button'
import  { CartContext } from '../../context/CartContext'

export default function Cart({className}) {
  const {totalItems} = useContext(CartContext)
  const handleClick = () => {
   
  }
  return (
    <Button className={className} onClick={handleClick}>
        <img src='/cart-icon.png' alt='cart icon'/>
        <p>Your cart</p>
        <p className={styles['cart-quantity']}>{totalItems}</p>
    </Button>
  )
}

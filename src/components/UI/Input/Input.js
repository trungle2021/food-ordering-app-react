import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type} className={props.className} defaultValue={props.defaultValue}/>
  )
}

export default Input;

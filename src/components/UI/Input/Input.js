import React from "react";

const Input = (props) => {
  return (
    <input
      id={props.id}
      type={props.type}
      className={props.className}
      defaultValue={props.defaultValue}
    />
  );
};

export default Input;

import React from "react";

const Input = (props) => {
  return (
    <input
      id={props.id}
      type={props.type}
      className={props.className}
      defaultValue={props.defaultValue}
      value={props.value}
      readOnly={props.readOnly}
    />
  );
};

export default Input;

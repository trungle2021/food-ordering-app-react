import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

export default function Modal() {
  return (
    <>
      <div className={styles.modal} id="cart-modal">
        <div className="modal-header">
          <span id="closeModal" className={styles.close}>
            &times;
          </span>
        </div>
        <div className="modal-body">{props.body}</div>
        <div className="modal-footer">
          <div>
            <Button>Close</Button>
            <Button>Order</Button>
          </div>
        </div>
      </div>
    </>
  );
}

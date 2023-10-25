import React from "react";
import styles from "./Overlay.module.css";
export default function Overlay(props) {
  return (
    <div id={props.id} onClick={props.onClick} className={styles.overlay}></div>
  );
}

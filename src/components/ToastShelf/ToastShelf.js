import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant, handleDismiss }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} handleDismiss={handleDismiss}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

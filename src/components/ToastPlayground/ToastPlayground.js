import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { addToast } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          addToast(message, variant);
          setMessage("");
          setVariant(VARIANT_OPTIONS[0]);
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(evt) => setMessage(evt.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((opt) => (
                <label htmlFor={`variant-${opt}`} key={`variant-${opt}`}>
                  <input
                    id={`variant-${opt}`}
                    type="radio"
                    name="variant"
                    value={`${opt}`}
                    checked={`${opt}` === variant}
                    onChange={(evt) => setVariant(evt.target.value)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

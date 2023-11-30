import { useContext } from "react";
import { ShoeContext } from "../../context/shoeContext";
import { CartIcon } from "../../svg";

import styles from "./CartButton.module.css"
export function CartButton({setToggleCart}) {
      // value of cart
  const { cartAmount } = useContext(ShoeContext);
  return (
    <>
      <button className={styles.button} onClick={() => setToggleCart((prev) => !prev)}>
        <p
          className={`${styles["cart-counter"]} ${
            cartAmount > 0 ? styles.active : ""
          } `}
        >
          {cartAmount}
        </p>
        <CartIcon />
      </button>
    </>
  );
}

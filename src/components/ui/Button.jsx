import { useContext } from "react";
import { CartIcon } from "../../svg";
import styles from "./Button.module.css";
import { ShoeContext } from "../../context/shoeContext";

export function Button({ addToCart, name, price, image }) {
  const { count, setCount, setCartAmount } = useContext(ShoeContext);
  function updateCart() {
    addToCart(count, name, price, image);
    setCartAmount((amount) => amount + count);
    setCount(1);
  }

  return (
    <>
      <button
        aria-label="Add to Cart"
        className={styles.button}
        onClick={updateCart}
      >
        <CartIcon /> Add to cart
      </button>
    </>
  );
}

import { useContext } from "react";
import styles from "./CartList.module.css";
import { ShoeContext } from "../context/shoeContext";
import { CartItem } from "./CartItem";

export function CartList({ toggleCart, setToggleCart }) {
  // import ShoeContext
  const { cartItems, clearCart, setCartAmount, cartAmount } =
    useContext(ShoeContext);
  // clears cart + sets cart item counter to 0
  function clear() {
    clearCart();
    setCartAmount(0);
  }
  return (
    <>
      {/* used to close cart on clicked outside of cart */}
      {toggleCart && (
        <div
          className={styles.modal}
          onClick={() => setToggleCart(false)}
        ></div>
      )}
      {/* cart */}
      <div className={`${styles.cart} ${toggleCart ? styles.active : ""}`}>
        <div className={styles.header}>
          <div className={styles["header-information"]}>
            <h3>Cart</h3>
            <p aria-label="Clear cart" onClick={() => clear()}>
              Clear All
            </p>
          </div>
        </div>
        <div className={styles.content}>
          {cartItems.length < 1 ? (
            <p className={styles["empty-cart"]}>Your cart is empty</p>
          ) : (
            <ul className={styles["cart-list"]}>
              {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

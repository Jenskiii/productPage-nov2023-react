import { useContext } from "react";
import { DeleteIcon } from "../svg";
import { ShoeContext } from "../context/shoeContext";

import styles from "./CartItem.module.css";
// start cartItem function
export function CartItem({ id, name, amount, price, image }) {
  const { deleteCartItem, setCartAmount } = useContext(ShoeContext);

  // deletes cart item + subtracts amount from cart item counter
  function deleteCart() {
    setCartAmount((count) => count - amount);
    deleteCartItem(id);
  }
  return (
    <>
      <li className={styles.container}>
        <img src={image} alt="sneaker" />

        <div className={styles.information}>
          <p>{name}</p>
          <p>
            {`$${price.toFixed(2)} x ${amount} `}
            <span className={styles.price}>${(price * amount).toFixed(2)}</span>
          </p>
        </div>

        {/* cart item delete button */}
        <button
          aria-label="Delete cart item"
          className={styles.delete}
          onClick={() => deleteCart()}
        >
          <DeleteIcon />
        </button>
      </li>
    </>
  );
}

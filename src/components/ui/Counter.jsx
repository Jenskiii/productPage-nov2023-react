import { useContext } from "react";
import { Minus, Plus } from "../../svg";
import styles from "./Counter.module.css";
import { ShoeContext } from "../../context/shoeContext";

export function Counter() {
  const { count, setCount } = useContext(ShoeContext);

  return (
    <>
      <div aria-label="Product counter" className={styles.container}>
        <button
          aria-label="Decrement"
          className={styles.button}
          onClick={() =>
            setCount((count) => (count > 1 ? (count -= 1) : (count = 1)))
          }
        >
          <Minus />
        </button>
        <p className={styles.count}>{count}</p>
        <button
          aria-label="Increment"
          className={styles.button}
          onClick={() => setCount((count) => count + 1)}
        >
          <Plus />
        </button>
      </div>
    </>
  );
}

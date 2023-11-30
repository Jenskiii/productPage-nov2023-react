import { useContext } from "react";
import { Button } from "../../components/ui/Button";
import { Counter } from "../../components/ui/Counter";
import styles from "./ShoeInformation.module.css";
import { ShoeContext } from "../../context/shoeContext";
import { shoeData } from "../../data/shoeData";

export function ShoeInformation({className}) {
  const { addCartItem } = useContext(ShoeContext);

  // normally would do fetch / .map but its only one shoe
  const sneaker = shoeData[0].shoes[0];
  let totalPrice = sneaker.price - (sneaker.price / 100) * shoeData[0].sale;

  return (
    <>
      <p className={styles["sub-title"]}>Sneaker Company</p>
      <h1 className={styles.title}>{sneaker.name}</h1>
      <p className={styles.information}>{sneaker.information}</p>

      <div className={styles["price-container"]}>
        <div className={styles["total-price__wrapper"]}>
          <p className={styles["total-price"]}>${totalPrice.toFixed(2)}</p>
          {/* if on sale display sale indicator else hide it */}
          {shoeData[0].sale !== 0 && (
            <p className={styles["price-discount"]}>{shoeData[0].sale}%</p>
          )}
        </div>
        {shoeData[0].sale !== 0 && (
          <p className={styles.price}>${sneaker.price.toFixed(2)}</p>
        )}
      </div>

      <div className={styles["button-wrapper"]}>
        <Counter />
        <Button
          addToCart={addCartItem}
          name={sneaker.name}
          price={totalPrice}
          image={sneaker.image}
        />
      </div>
    </>
  );
}

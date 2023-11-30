import styles from "./Modal.module.css";

export function Modal({active, setActive}) {
  return (
    <>
      <div
        className={`${styles.modal} | ${active && styles.active}`}
        onClick={() => setActive((prev) => !prev)}
      ></div>
    </>
  );
}

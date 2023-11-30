import styles from "./HamburgerMenu.module.css";

export function HamburgerMenu({ active, toggle }) {
  return (
    <>
      <button aria-label="Hamburger Menu"
        className={`${styles.hamburger}  ${active && styles.active}`}
        onClick={() => toggle((prev) => !prev)}
      >
        <div className={styles.bar}></div>
      </button>
    </>
  );
}

import styles from "./Nav.module.css";
export function Nav({ active, setActive }) {
  return (
    <>
      <nav className={`${styles.nav}  ${active && styles.active}`}>
        <ul className={styles["nav-list"]}>
          <li onClick={() => setActive(false)}>
            <a href="#">Collections</a>
          </li>
          <li onClick={() => setActive(false)}>
            <a href="#">Men</a>
          </li>
          <li onClick={() => setActive(false)}>
            <a href="#">Women</a>
          </li>
          <li onClick={() => setActive(false)}>
            <a href="#">About</a>
          </li>
          <li onClick={() => setActive(false)}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

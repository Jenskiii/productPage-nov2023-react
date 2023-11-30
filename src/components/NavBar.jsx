import { useContext, useState } from "react";
import { HamburgerMenu } from "./ui/HamburgerMenu";
import { Nav } from "./ui/Nav";
import { Modal } from "./ui/Modal";
import { CartIcon } from "../svg";
import { CartList } from "./CartList";

import Logo from "../assets/logo.svg";
import Profile from "../assets/image-avatar.png";
import styles from "./NavBar.module.css";
import { ShoeContext } from "../context/shoeContext";
import { CartButton } from "./ui/CartButton";

export function NavBar() {
  // toggles for nav and cart
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <>
      <header>
        {/* background behind mobile nav */}
        <Modal active={toggleNav} setActive={setToggleNav} />

        {/* start header */}
        <div className="container">
          <div className={styles.container}>
            {/* hamburger menu */}
            <div className={styles.hamburger}>
              <HamburgerMenu active={toggleNav} toggle={setToggleNav} />
            </div>

            {/* logo */}
            <img
              className={styles["company-logo"]}
              src={Logo}
              alt="Company logo"
            />

            {/* navigation */}
            <div className={styles.nav}>
              <Nav active={toggleNav} setActive={setToggleNav} />
            </div>

            {/* cart */}
            <div className={styles.cart}>
              <CartButton setToggleCart={setToggleCart}/>
              <CartList toggleCart={toggleCart} setToggleCart={setToggleCart} />
            </div>

            {/* profile img */}
            <img
              className={styles["profile-img"]}
              src={Profile}
              alt="profile image"
            />
          </div>
        </div>
      </header>
    </>
  );
}

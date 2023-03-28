import React, { useState } from "react";

import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { hamburger, headerLogo } from "../../images/images";
import { Container } from "../Commont.styled";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navItems = [
    { navItems: "Home", to: "/" },
    { navItems: "About", to: "/about" },
    { navItems: "Pricing ", to: "/pricing" },
    { navItems: "Career", to: "/carrer" },
    { navItems: "Blog", to: "/blog" },
  ];
  return (
    <div className={styles.navbarContainer}>
      <Container maxWidth="1400px">
        <div className={styles.navbar}>
          <img src={headerLogo} alt="" className={styles.logo} />

          {!sidebar && (
            <img
              src={hamburger}
              alt="#"
              className={styles.hamburger}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}

          <div
            className={[
              styles.navItemsAndButton,
              sidebar && styles.sidebar,
            ].join(" ")}
          >
            <MdOutlineClose
              className={styles.close}
              onClick={() => setSidebar((prev) => !prev)}
            />
            <p></p>
            <div className={styles.navItems}>
              {navItems.map((el, i) => (
                <NavLink
                  onClick={() => setSidebar((prev) => !prev)}
                  to={el.to}
                  key={i}
                  className={({ isActive }) =>
                    isActive
                      ? [styles.navItemActive, styles.navItem].join(" ")
                      : styles.navItem
                  }
                >
                  {el.navItems}
                </NavLink>
              ))}
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button}> Log In</button>
              <button
                className={[styles.button, styles.activeButton].join(" ")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

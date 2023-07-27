"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Logo from "public/logo/logo.svg";
import MenuIcon from "public/icons/home/navbar_icon.svg";
import CloseIcon from "public/icons/home/close_icon.svg";
import SignUpIcon from "public/icons/home/register_icon.svg";
import SignInIcon from "public/icons/home/login_icon.svg";

const Navbar = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  const hideMenu = () => {
    if(expandMenu) {
      setExpandMenu(false);
    }
  };

  const showMenu = () => {
    setExpandMenu(!expandMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer} onClick={hideMenu}>
        <div>
          <Link href="/">
            <Image src={Logo} className={styles.logo} />
          </Link>
        </div>

        <nav
          className={`${styles.navigation} ${
            expandMenu ? styles.collapsedNavigation : ""
          }`}
        >
          <ul className={styles.menu}>
            <li>
              <Link href="/" className={`${styles.menuItem} ${styles.active}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.menuItem}>
                About
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.menuItem}>
                Find Expert
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.menuItem}>
                Book sessions
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.menuItem}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`${styles.callToAction} ${
            expandMenu ? styles.collapsedCallToAction : ""
          }`}
        >
          <div>
            <Link href="/login" className={styles.authBtn}>
              <Image src={SignInIcon} className={styles.authIcon} />
              <span className={styles.authText}>Login</span>
            </Link>
          </div>
          <div>
            <Link href="/register" className={styles.authBtn}>
              <Image src={SignUpIcon} className={styles.authIcon} />
              <span className={styles.authText}>Register</span>
            </Link>
          </div>
        </div>

        <div className={styles.menuIconOuter} onClick={showMenu}>
          <Image
            src={MenuIcon}
            className={styles.menuIcon}
            style={expandMenu ? { display: "none" } : { display: "initial" }}
          />
          <Image
            src={CloseIcon}
            className={styles.closeIcon}
            style={expandMenu ? { display: "initial" } : { display: "none" }}
          />
        </div>

        <div className={styles.bottomLayer}></div>
      </div>
    </div>
  );
};

export default Navbar;

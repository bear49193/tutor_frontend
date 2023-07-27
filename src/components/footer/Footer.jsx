import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "./footer.module.css";
import Logo from "public/logo/logo_on_footer.svg";
import FacebookIcon from "public/icons/home/facebook_icon.svg";
import InstagramIcon from "public/icons/home/instagram_icon.svg";
import LinkedinIcon from "public/icons/home/linkedin_icon.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.firstCol}>
          <div>
            <Image src={Logo} alt="Logo" className={styles.logo} />
          </div>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className={styles.icons}>
            <Link href="/">
              <div className={styles.iconOuter}>
                <Image src={FacebookIcon} className={styles.fbIcon} />
              </div>
            </Link>
            <Link href="/">
              <div className={styles.iconOuter}>
                <Image src={InstagramIcon} className={styles.instaIcon} />
              </div>
            </Link>
            <Link href="/">
              <div className={styles.iconOuter}>
                <Image src={LinkedinIcon} className={styles.lnkIcon} />
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.secondCol}>
          <h5>Main Pages</h5>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Find tutors</Link>
            </li>
            <li>
              <Link href="/">Book sessions</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        <div className={styles.thirdCol}>
          <h5>Support</h5>
          <ul>
            <li>
              <Link href="/">Help</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className={styles.fourthCol}>
          <h5>Newsletter</h5>
          <form>
            <input type="email" placeholder="abc@gmail.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.footerText}>
        <p>&copy; All rights reserved by Sessionly.</p>
        <p>hello@example.com</p>
      </div>
    </div>
  );
}

export default Footer
import React from "react";
import styles from "./banner.module.css";
import BookNowIcon from "public/icons/home/book_now_icon.svg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topPortion}></div>
      <div className={styles.BottomPortion}></div>

      <div className={styles.content}>
        <div>
          <h3>Book your session today.</h3>
          <p>
            Don't wait, book your session today and start learning from the
            best!
          </p>
        </div>
        <div>
          <Link href="/">
            <span>Book Now</span>
            <Image src={BookNowIcon} className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner
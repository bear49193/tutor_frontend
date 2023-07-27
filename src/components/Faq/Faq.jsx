import React from 'react'
import styles from "./faq.module.css";
import PlusIcon from "public/icons/home/plus_icon.svg";
import MinusIcon from "public/icons/home/minus_icon.svg";
import Image from 'next/image';

const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Frequently asked questons</h2>
        <p>
          Don't be afraid to ask questions. Your expert is there to help you
          understand the material and achieve your goals.
        </p>
      </div>

      <div>
        <div className={styles.qa}>
          <h4>
            <span>
              How do I get started with Sessionly?
            </span>
            <Image src={MinusIcon} className={styles.collapseIcon} />
          </h4>
          <p>
            We offer a free 14-day trial so you can explore our platform, begin
            building a site, and decide if you're ready to subscribe to
            Sessionly.
          </p>
        </div>

        <div className={styles.qa}>
          <h4>
            <span>What does a Sessionly subscription include?</span>
            <Image src={PlusIcon} className={styles.collapseIcon} />
          </h4>
          {/* <p>
            We offer a free 14-day trial so you can explore our platform, begin
            building a site, and decide if you're ready to subscribe to
            Sessionly.
          </p> */}
        </div>

        <div className={styles.qa}>
          <h4>
            <span>How does billing work?</span>
            <Image src={PlusIcon} className={styles.collapseIcon} />
          </h4>
          {/* <p>
            We offer a free 14-day trial so you can explore our platform, begin
            building a site, and decide if you're ready to subscribe to
            Sessionly.
          </p> */}
        </div>

        <div className={styles.qa}>
          <h4>
            <span>What is your cancellation policy?</span>
            <Image src={PlusIcon} className={styles.collapseIcon} />
          </h4>
          {/* <p>
            We offer a free 14-day trial so you can explore our platform, begin
            building a site, and decide if you're ready to subscribe to
            Sessionly.
          </p> */}
        </div>

        <div className={styles.qa}>
          <h4>
            <span>Can other info be added to an invoice?</span>
            <Image src={PlusIcon} className={styles.collapseIcon} />
          </h4>
          {/* <p>
            We offer a free 14-day trial so you can explore our platform, begin
            building a site, and decide if you're ready to subscribe to
            Sessionly.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Faq
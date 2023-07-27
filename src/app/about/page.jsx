import Image from 'next/image';
import React from 'react'
import Hero from "public/images/about/about_hero.svg";
import RightArrow from "public/icons/home/right_arrow_icon.svg";
import styles from "./page.module.css";
import Banner from '@/components/Banner/Banner';
import Faq from '@/components/Faq/Faq';

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <h1>About us</h1>
          <p>
            Teaching process has stayed the same for decades. The traditional
            teaching and offline education system are plagued with multiple
            inefficiencies. Teaching and learning are set to transform at a
            rapid pace and our mission at Sessionly is to accelerate these
            transformations.
          </p>
          <a>
            Get Started
            <Image src={RightArrow} className={styles.rightArrow} />
          </a>
        </div>

        <Image src={Hero} alt="Hero" className={styles.heroImg} />
      </div>

      {/* FAQ Section */}
      <Faq />

      {/* Banner Section */}
      <Banner />
    </div>
  );
}

export default page
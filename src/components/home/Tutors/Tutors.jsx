"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./tutors.module.css";
import Link from "next/link";
import Image from "next/image";
import Math from "public/icons/home/tutors/math.svg";
import Science from "public/icons/home/tutors/science.svg";
import Physics from "public/icons/home/tutors/physics.svg";
import Chemistry from "public/icons/home/tutors/chemistry.svg";
import Biology from "public/icons/home/tutors/biology.svg";
import English from "public/icons/home/tutors/english.svg";
import Programming from "public/icons/home/tutors/programming.svg";
import Health from "public/icons/home/tutors/health.svg";
import Design from "public/icons/home/tutors/design.svg";
import Finance from "public/icons/home/tutors/finance.svg";
import Management from "public/icons/home/tutors/management.svg";

export default class Tutors extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
      className: `${styles.sliderContainer}`,
      responsive: [
        {
          breakpoint: 1205,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 710,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={styles.container}>
        <div>
          <div className={styles.heading}>
            <h2>Featured tutors</h2>
            <Link href="/">See all</Link>
          </div>

          <Slider {...settings}>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Math} className={styles.subjectIcon} />
                  <h6>Math</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Science} className={styles.subjectIcon} />
                  <h6>Science</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Physics} className={styles.subjectIcon} />
                  <h6>Physics</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Chemistry} className={styles.subjectIcon} />
                  <h6>Chemistry</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Biology} className={styles.subjectIcon} />
                  <h6>Biology</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={English} className={styles.subjectIcon} />
                  <h6>English</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Programming} className={styles.subjectIcon} />
                  <h6>Programming</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Health} className={styles.subjectIcon} />
                  <h6>Health</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Design} className={styles.subjectIcon} />
                  <h6>Design</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Finance} className={styles.subjectIcon} />
                  <h6>Finance</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subject}>
                <div>
                  <Image src={Management} className={styles.subjectIcon} />
                  <h6>Management</h6>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
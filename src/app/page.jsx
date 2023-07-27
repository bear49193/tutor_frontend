import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import RightArrow from "public/icons/home/right_arrow_icon.svg";
import LearnIcon from "public/icons/home/learn_icon.svg";
import PersonalizedIcon from "public/icons/home/personalized_icon.svg";
import PotentialIcon from "public/icons/home/potential_icon.svg";
import ReadMoreIcon from "public/icons/home/read_more_arrow_icon.svg";
import Hero from "public/images/home/hero.svg";
import Benefit1 from "public/images/home/benefit1.svg";
import Benefit2 from "public/images/home/benefit2.svg";
import Benefit3 from "public/images/home/benefit3.svg";
import Benefit4 from "public/images/home/benefit4.svg";
import Article1 from "public/images/home/articles/article1.svg";
import Article2 from "public/images/home/articles/article2.svg";
import Article3 from "public/images/home/articles/article3.svg";
import Article4 from "public/images/home/articles/article4.svg";
import Tutors from "@/components/home/Tutors/Tutors";
import Faq from "@/components/Faq/Faq";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <div className={styles.primaryArea}>
          <h1 className={styles.heroTitle}>
            <span className={styles.learn}>Learn</span> from the best.
          </h1>
          <div className={styles.heroContent}>
            <h6 className={styles.heroSubtitle}>
              Imagine having the opportunity to learn from the world's leading
              experts, right from your own home.
            </h6>
            <p className={styles.heroDesc}>
              With our <span style={{ fontWeight: "700" }}>one-on-one</span>{" "}
              live online sessions, you can do just that. Whether you're looking
              to <span style={{ fontWeight: "700" }}>improve your skills</span>{" "}
              in business, technology, or personal development, we have the
              perfect expert for you.
            </p>
          </div>
          <div className={styles.callToActionOuter}>
            <Link href="/" className={styles.callToAction}>
              Get Started <Image src={RightArrow} className={styles.arrow} />
            </Link>
          </div>
        </div>

        <div className={styles.topLayer}></div>
        <div>
          <Image src={Hero} alt="Learning" className={styles.heroImg} />
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.featureSection}>
        <div className={styles.feature1}>
          <div className={styles.ftrIconOuter1}>
            <Image src={LearnIcon} className={styles.learnIcon} />
          </div>

          <div className={styles.ftrContent1}>
            <div>
              <h4 className={styles.ftrTitle1}>Learn from experts</h4>
              <p className={styles.ftrDesc1}>
                Our one-on-one live online sessions give you the opportunity to
                learn from the world's leading experts in your field.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.feature2}>
          <div className={styles.ftrIconOuter2}>
            <Image src={PersonalizedIcon} className={styles.personalizedIcon} />
          </div>

          <div className={styles.ftrContent2}>
            <div>
              <h4 className={styles.ftrTitle2}>Get personalized attention</h4>
              <p className={styles.ftrDesc2}>
                Your expert will work with you to create a learning plan that's
                tailored to your specific needs and goals.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.feature3}>
          <div className={styles.ftrIconOuter3}>
            <Image src={PotentialIcon} className={styles.potentialIcon} />
          </div>

          <div className={styles.ftrContent3}>
            <div>
              <h4 className={styles.ftrTitle3}>Reach your full potential</h4>
              <p className={styles.ftrDesc3}>
                With our one-on-one sessions, you can reach your full potential
                by learning from best and getting personalized attention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advantage-1 Section */}
      <div className={styles.benefit1}>
        <div className={styles.bnft1Heading}>
          <h2>
            Get <span>personalized</span> <span>attention.</span>
          </h2>
          <p>
            Our one-on-one sessions are designed to give you the individualized
            attention you need to succeed. Your expert will work with you to
            create a <span style={{ fontWeight: "700" }}>learning plan</span>{" "}
            that's tailored to your specific needs and goals.
          </p>
        </div>

        <div className={styles.bnft1Content}>
          <div>
            <Image src={Benefit1} alt="Benefit" className={styles.bnft1Img} />
          </div>
          <div className={styles.bnft1Text}>
            <div>
              <h3>
                <span style={{ fontWeight: "700" }}>Schedule</span> your session
                at your convenience.
              </h3>
              <p>
                We understand that you have busy schedules, so we make it easy
                to{" "}
                <span style={{ fontWeight: "600" }}>schedule your session</span>{" "}
                at a time that works for you. Whether you're looking for a
                morning session or a late-night session, we can accommodate your
                needs.
              </p>
              <Link href="/">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tutors Section */}
      <Tutors />

      {/* Advantage-2 Section */}
      <div className={styles.benefit2}>
        <div className={styles.bnft2Content}>
          <h2>
            <span>Learn</span> at your own pace.
          </h2>
          <p>
            Our one-on-one sessions are self-paced, so you can learn at your own
            pace. If you need to review a concept, you can always go back and
            watch the recording of your session.
          </p>
          <Link href="/">Start Now</Link>
        </div>
        <div className={styles.bnft2ImgOuter}>
          <Image src={Benefit2} alt="Benefit2" className={styles.bnft2Img} />
        </div>
      </div>

      {/* Motivated Section */}
      <div className={styles.motivatedSection}>
        <div className={styles.mtvHeading}>
          <h2>Stay motivated</h2>
          <p>
            With our one-on-one live online sessions, you can reach your full
            potential. Learn from the best, get personalized attention, and
            build relationships with experts in your field.
          </p>
        </div>

        <div className={styles.mtvContent}>
          <div className={styles.primaryArticle}>
            <div>
              <Image
                src={Article1}
                alt="Teaching"
                className={styles.primArticleImg}
              />
            </div>
            <div className={styles.primArticleText}>
              <h4 className={styles.articleTitle}>
                3891 Ranchview Dr. Richardson, California 62639
              </h4>
              <p>
                Artificial intelligence, or AI, is the theory and developm...
              </p>
              <Link href="/" className={styles.readMore}>
                <span>Read more</span>
                <Image src={ReadMoreIcon} className={styles.readMoreIcon} />
              </Link>
            </div>
          </div>

          <div className={styles.scndArticles}>
            <div className={styles.scndArticle}>
              <div>
                <Image
                  src={Article2}
                  alt="Teaching"
                  className={styles.scndArticleImg}
                />
              </div>
              <div className={styles.scndArticleText}>
                <h4 className={styles.articleTitle}>
                  Gray St. Utica, Pennsylvania 57867
                </h4>
                <Link href="/" className={styles.readMore}>
                  <span>Read more</span>
                  <Image src={ReadMoreIcon} className={styles.readMoreIcon} />
                </Link>
              </div>
            </div>

            <div className={styles.scndArticle}>
              <div>
                <Image
                  src={Article3}
                  alt="Teaching"
                  className={styles.scndArticleImg}
                />
              </div>
              <div className={styles.scndArticleText}>
                <h4 className={styles.articleTitle}>
                  6391 Elgin St. Celina, Delaware 10299
                </h4>
                <Link href="/" className={styles.readMore}>
                  <span>Read more</span>
                  <Image src={ReadMoreIcon} className={styles.readMoreIcon} />
                </Link>
              </div>
            </div>

            <div className={styles.scndArticle}>
              <div>
                <Image
                  src={Article4}
                  alt="Teaching"
                  className={styles.scndArticleImg}
                />
              </div>
              <div className={styles.scndArticleText}>
                <h4 className={styles.articleTitle}>
                  2972 Westheimer Rd. Santa Ana
                </h4>
                <Link href="/" className={styles.readMore}>
                  <span>Read more</span>
                  <Image src={ReadMoreIcon} className={styles.readMoreIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantage-3 Section */}
      <div className={styles.benefit3}>
        <div>
          <Image src={Benefit3} alt="Benefit3" className={styles.bnft3Img} />
        </div>
        <div className={styles.bnft3Content}>
          <h2>Build relationships.</h2>
          <p>
            Our one-on-one sessions are a great way to build relationships with
            experts in your field. You'll have the opportunity to network with
            other students and get advice from your expert.
          </p>
          <Link href="/">Start Now</Link>
        </div>
      </div>

      {/* Advantage-4 Section */}
      <div className={styles.benefit4}>
        <div className={styles.bnft4Content}>
          <h2>Reach your full potential.</h2>
          <p>
            With our one-on-one live online sessions, you can reach your full
            potential. Learn from the best, get personalized attention, and
            build relationships with experts in your field.
          </p>
          <Link href="/">Start Now</Link>
        </div>
        <div className={styles.bnft4ImgOuter}>
          <Image src={Benefit4} alt="Benefit4" className={styles.bnft4Img} />
        </div>
      </div>

      {/* FAQ Section */}
      <Faq />

      {/* Banner Section */}
      <Banner />
    </div>
  );
}
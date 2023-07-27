import React from 'react'
import styles from "./page.module.css";
import SignInImg from "public/images/auth/login.svg";
import GoogleLogo from "public/logo/google.svg";
import FBLogo from "public/logo/facebook.svg";
import MailIcon from "public/icons/auth/mail_icon.svg";
import LockIcon from "public/icons/auth/lock_icon.svg";
import EyeOffIcon from "public/icons/auth/eye_off_icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Image src={SignInImg} alt="Login" className={styles.signInImg} />
        <h5>Duis aute irure dolor in reprehenderit.</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.firstportion}>
          <h3>Sign In</h3>
          <h4>Welcome back!</h4>
          <p>Please log into your account to continue using it.</p>
        </div>

        <div className={styles.secondportion}>
          <Link href="/">
            <Image src={GoogleLogo} className={styles.corporateLogo} />
            <p>Google</p>
          </Link>
          <Link href="/">
            <Image src={FBLogo} className={styles.corporateLogo} />
            <p>Facebook</p>
          </Link>
        </div>

        <div className={styles.thirdportion}>
          <hr />
          <p>or Sign up with Email</p>
          <hr />
        </div>

        <div className={styles.fourthportion}>
          <form>
            <div className={styles.inputHolder}>
              <input type="email" placeholder="johnsmith@gmail.com" />
              <Image src={MailIcon} className={styles.mailIcon} />
            </div>
            <div className={styles.inputHolder}>
              <input
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
              <Image src={LockIcon} className={styles.lockIcon} />
              <Image src={EyeOffIcon} className={styles.eyeOffIcon} />
            </div>

            <div className={styles.formInner}>
              <div>
                <input type="checkbox" id="rememberMe" defaultChecked />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <p>
                <Link href="/">Forgot Password?</Link>
              </p>
            </div>

            <button>Log In</button>
          </form>
        </div>

        <p className={styles.fifthportion}>
          Don’t have an account? <Link href="/">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default page
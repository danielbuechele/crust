import Logo from "@/components/Logo";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./Footer.module.css";
import localFont from "next/font/local";
import Link from "next/link";

const medium = localFont({
  src: "../../public/basiercircle-medium-webfont.woff2",
});

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.col}>
          <ul className={styles.links}>
            <li>
              <h4>Explore Crust</h4>
              <ul>
                <li>
                  <Link href="/">Overview</Link>
                </li>
                <li>
                  <Link href="/specs">Tech Specs</Link>
                </li>
                <li>
                  <Link href="">Quick Start</Link>
                </li>
              </ul>
            </li>
            <li>
              <h4>Customer Care</h4>
              <ul>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Manual</a>
                </li>
                <li>
                  <a href="">Returns Policy</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </li>
            <li>
              <h4>Our Company</h4>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Media Kit</a>
                </li>
              </ul>
            </li>
            <li>
              <h4>Socials</h4>
              <ul>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">X (Twitter)</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className={styles.sosumi}>
            <hr />© 2024 Crust Mill LLC. All rights reserved.
          </div>
        </div>
        <div className={styles.newsletter}>
          <h3 className={medium.className}>Crust Newsletter</h3>
          <p>
            Latest news, musings, announcements and updates direct to your
            inbox. No Spam ever.
          </p>
          <form className={styles.form}>
            <input type="email" placeholder="Your E-Mail Address" />
            <button type="submit">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.39205 10.6023L5.36932 9.59091L8.92045 6.03977H0V4.5625H8.92045L5.36932 1.01705L6.39205 0L11.6932 5.30114L6.39205 10.6023Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>

          <small>
            By signing up, I agree with the data protection policy of Crust.
          </small>
          <div className={styles.logo}>
            <Logo width="90%" />
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

"use client";

import Logo from "@/components/Logo";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./Footer.module.css";
import { medium } from "@/utils/medium";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const isHome = usePathname() === "/";

  return (
    <>
      <section className={styles.root}>
        <Wrapper>
          <Link href={isHome ? "/specs" : "/"} className={styles.link}>
            <div>{isHome ? "Tech Specs" : "Overview"}</div>
            <div className={styles.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="39"
                viewBox="0 0 44 39"
                fill="none"
              >
                <path
                  d="M24.8435 38.3129L22.3207 35.8115L37.2012 20.9524H0V17.3605H37.2012L22.3207 2.50146L24.8435 0L44 19.1565L24.8435 38.3129Z"
                  fill="#0E0F12"
                />
              </svg>
            </div>
          </Link>
        </Wrapper>
      </section>
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
                  {/* <li>
                    <Link href="/guide/pepper">
                      Pepper and Salt Buying Guide
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <h4>Customer Care</h4>
                <ul>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <a href="/manual">Manual</a>
                  </li>
                  <li>
                    <a href="/returns">Returns Policy</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Our Company</h4>
                <ul>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms">Terms of Service</a>
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
                    <a href="https://instagram.com/crust.mill">Instagram</a>
                  </li>
                  <li>
                    <a href="">X (Twitter)</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.newsletter}>
            {/* <Newsletter /> */}
            <div className={styles.logo}>
              <Logo width="90%" />
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className={styles.sosumi}>
            <hr />© 2024 Crust Mill LLC. All rights reserved.
          </div>
        </Wrapper>
      </footer>
    </>
  );
}

function Newsletter() {
  return (
    <div>
      <h3 className={medium.className}>Crust Newsletter</h3>
      <p>
        Latest news, musings, announcements and updates direct to your inbox. No
        Spam ever.
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
    </div>
  );
}

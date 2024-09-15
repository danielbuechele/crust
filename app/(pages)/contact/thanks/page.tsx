import Link from "next/link";
import styles from "../page.module.css";
import { medium } from "@/utils/medium";

export default function Thanks() {
  return (
    <div className={styles.thanks}>
      <h3 className={medium.className}>
        Thank you, your message has been sent.
      </h3>
      <Link href="/contact">
        Send another message&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
        >
          <path
            d="M6.39205 10.6023L5.36932 9.59091L8.92045 6.03977H0V4.5625H8.92045L5.36932 1.01705L6.39205 0L11.6932 5.30114L6.39205 10.6023Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  );
}

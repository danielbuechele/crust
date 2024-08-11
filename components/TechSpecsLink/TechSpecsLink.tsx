import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./TechSpecsLink.module.css";

export default function TechSpecsLink() {
  return (
    <Wrapper>
      <Link href="/specs" className={styles.link}>
        <div className={styles.text}>Tech Specs</div>
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
  );
}

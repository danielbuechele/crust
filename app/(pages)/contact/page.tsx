import clsx from "clsx";
import styles from "./page.module.css";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

export default function Contact() {
  return (
    <form
      className={styles.form}
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input
        type="hidden"
        name="access_key"
        value="6e8a3d5c-ce08-481d-8aa4-31f44b0b7ac4"
      />
      <input
        type="hidden"
        name="redirect"
        value="https://crustmill.com/contact/thanks"
      />
      <div className={styles.row}>
        <input required type="text" name="name" placeholder="Name" />
        <input required type="email" name="email" placeholder="Email" />
      </div>
      <div className={clsx(styles.row, styles.select)}>
        <select required name="reason">
          <option>Product Details and Questions</option>
          <option>Shipping and Order Details</option>
          <option>Exchanges and Returns</option>
          <option>General, Media & Business Inquiries</option>
          <option>Other</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
        >
          <path
            d="M6.4304 0V10.5085L10.4702 6.45597L11.4673 7.44034L5.72727 13.1676L0 7.44034L0.971591 6.45597L5.02415 10.5085V0H6.4304Z"
            fill="#8E8E8E"
          />
        </svg>
      </div>
      <textarea className={styles.row} name="message" required rows={10} placeholder="Your message" />
      <div className={clsx(styles.row, styles.reverseWhenSmall)}>
        <div>
          <p className={styles.fineprint}>
            This site is protected by reCAPTCHA and the Google Privacy
            Policy and Terms of Service apply.
          </p>
        </div>
        <PrimaryButton width="100%" variant="black" type="submit">
          Send
        </PrimaryButton>
      </div>
    </form>
  );
}

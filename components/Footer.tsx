import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <ul>
          <li>
            <h4>Explore Crust</h4>
            <ul>
              <li>
                <a href="">Overview</a>
              </li>
              <li>
                <a href="">Tech Specs</a>
              </li>
              <li>
                <a href="">Quick Start</a>
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
        <hr />
      </div>
      <div>
        <h3>Crust Newsletter</h3>
        <p>
          Latest news, musings, announcements and updates direct to your inbox.
          No Spam ever.
        </p>
        <form>
          <input type="email" placeholder="Your E-Mail Address" />
          <button type="submit">Subscribe</button>
        </form>

        <small>
          By signing up, I agree with the data protection policy of Crust.
        </small>
        <Logo />
      </div>
    </footer>
  );
}

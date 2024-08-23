import Wrapper from "../Wrapper/Wrapper";
import styles from "./Features.module.css";
import localFont from "next/font/local";
import clsx from "clsx";

import elegant from "./elegant.png";
import functional from "./functional.png";
import compatible from "./compatible.png";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const ppRegular = localFont({
  src: "../../public/PPEditorialNew-Regular.woff2",
});
const ppItalic = localFont({
  src: "../../public/PPEditorialNew-Italic.woff2",
});

export default function Features() {
  return (
    <Wrapper className={styles.wrapper}>
      <div className={clsx(styles.box, styles.elegant)}>
        <Image src={elegant} alt="" fill objectFit="cover" sizes="30vw" />
        <p>
          <strong>Elegant.</strong> Easy to use with a timeless design that
          looks artful on display when not in use.
        </p>
      </div>

      <div className={clsx(styles.box)}>
        <Image
          src={compatible}
          alt=""
          fill
          className={styles.compatibleImg}
          sizes="30vw"
        />
        <p>
          <strong>Compatible Spices.</strong> Usable for all dry peppers, salt,
          and spices.
        </p>
      </div>

      <div className={clsx(styles.box, styles.today)}>
        <h3 className={ppRegular.className}>
          Get your Crust Mill <em className={ppItalic.className}>today.</em>
        </h3>
        <p>Now available for $299.</p>
        <PrimaryButton className={styles.buy} variant="dark" href="/buy">
          Buy
        </PrimaryButton>
        <div className={styles.grow} />
        <p className={styles.shipping}>
          <strong>Free Shipping in the US.</strong> We normally ship within 2-3
          business days after receiving your order.
        </p>
      </div>

      <div className={styles.subgrid}>
        <div className={clsx(styles.box, styles.green)}>
          <svg
            width="49"
            height="52"
            viewBox="0 0 49 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2891 32.0625C12.8047 32.1875 12.3438 32.1328 11.9062 31.8984C11.4844 31.6641 11.2188 31.2891 11.1094 30.7734L9.46875 23.8594L2.64844 25.875C2.16406 26.0312 1.70312 25.9922 1.26562 25.7578C0.84375 25.5078 0.570312 25.1328 0.445312 24.6328C0.304688 24.1641 0.351562 23.7188 0.585938 23.2969C0.820312 22.875 1.19531 22.5938 1.71094 22.4531L9.42188 20.2734C9.82812 20.1641 10.1875 20.1172 10.5 20.1328C10.8281 20.1484 11.1406 20.25 11.4375 20.4375C11.9844 20.75 12.3672 21.3047 12.5859 22.1016L14.5547 29.9062C14.6953 30.3906 14.6406 30.8438 14.3906 31.2656C14.1406 31.6875 13.7734 31.9531 13.2891 32.0625ZM6.46875 45.1641C5.14062 45.1641 3.99219 44.875 3.02344 44.2969C2.05469 43.7344 1.30469 42.9609 0.773438 41.9766C0.257812 40.9922 0 39.8984 0 38.6953C0 38.1641 0.0703125 37.6328 0.210938 37.1016C0.367188 36.5547 0.585938 36.0234 0.867188 35.5078L9.07031 20.8828L12.2578 22.7578L4.125 37.3125C4 37.5312 3.91406 37.7656 3.86719 38.0156C3.82031 38.25 3.79688 38.4766 3.79688 38.6953C3.79688 39.4297 4.03906 40.0781 4.52344 40.6406C5.02344 41.2031 5.67969 41.4844 6.49219 41.4844H19.0312C19.5781 41.4844 20.0312 41.6562 20.3906 42C20.7656 42.3594 20.9531 42.8047 20.9531 43.3359C20.9531 43.8672 20.7656 44.3047 20.3906 44.6484C20.0312 44.9922 19.5781 45.1641 19.0312 45.1641H6.46875ZM35.3906 20.3203L26.8359 5.0625C26.5703 4.59375 26.2266 4.25781 25.8047 4.05469C25.3984 3.83594 24.9688 3.72656 24.5156 3.72656C24.0469 3.72656 23.6016 3.83594 23.1797 4.05469C22.7578 4.25781 22.4141 4.59375 22.1484 5.0625L15.6797 16.6641C15.4141 17.1328 15.0312 17.4453 14.5312 17.6016C14.0469 17.7422 13.5703 17.6797 13.1016 17.4141C12.6484 17.1484 12.3516 16.7812 12.2109 16.3125C12.0859 15.8438 12.1719 15.3438 12.4688 14.8125L18.9375 3.25781C19.5469 2.19531 20.3516 1.39062 21.3516 0.84375C22.3672 0.28125 23.4219 0 24.5156 0C25.6094 0 26.6562 0.273438 27.6562 0.820312C28.6719 1.36719 29.4766 2.17969 30.0703 3.25781L38.5781 18.4688L35.3906 20.3203ZM35.7188 20.8828L27.9844 18.7031C27.4844 18.5625 27.1172 18.2812 26.8828 17.8594C26.6484 17.4375 26.5938 16.9922 26.7188 16.5234C26.8594 16.0391 27.1406 15.6797 27.5625 15.4453C27.9844 15.1953 28.4375 15.1406 28.9219 15.2812L35.7656 17.2969L37.4062 10.3828C37.5156 9.86719 37.7812 9.49219 38.2031 9.25781C38.6406 9.02344 39.1016 8.96875 39.5859 9.09375C40.0703 9.20312 40.4297 9.46875 40.6641 9.89062C40.9141 10.3125 40.9688 10.7656 40.8281 11.25L38.8828 19.0547C38.6641 19.8203 38.2812 20.375 37.7344 20.7188C37.4219 20.9062 37.1094 21.0078 36.7969 21.0234C36.4844 21.0391 36.125 20.9922 35.7188 20.8828ZM25.9453 45.1641V41.4844H42.4922C43.3047 41.4844 43.9609 41.2031 44.4609 40.6406C44.9766 40.0781 45.2344 39.4297 45.2344 38.6953C45.2344 38.4766 45.2031 38.25 45.1406 38.0156C45.0781 37.7656 44.9844 37.5312 44.8594 37.3125L38.6953 26.2969C38.4297 25.8281 38.3672 25.3516 38.5078 24.8672C38.6484 24.3672 38.9453 23.9844 39.3984 23.7188C39.8516 23.4531 40.3203 23.3828 40.8047 23.5078C41.2891 23.6172 41.6641 23.9219 41.9297 24.4219L48.1406 35.5078C48.4375 36.0391 48.6562 36.5703 48.7969 37.1016C48.9375 37.6328 49.0078 38.1641 49.0078 38.6953C49.0078 39.8984 48.7422 40.9922 48.2109 41.9766C47.6953 42.9609 46.9531 43.7344 45.9844 44.2969C45.0156 44.875 43.8672 45.1641 42.5391 45.1641H25.9453ZM31.0078 50.7422L25.2422 45.1406C24.6797 44.5938 24.3984 43.9922 24.3984 43.3359C24.3984 42.6797 24.6797 42.0703 25.2422 41.5078L31.0078 35.9297C31.3672 35.5547 31.7891 35.375 32.2734 35.3906C32.7578 35.3906 33.1719 35.5703 33.5156 35.9297C33.875 36.2734 34.0547 36.6953 34.0547 37.1953C34.0547 37.6797 33.8672 38.1016 33.4922 38.4609L28.3359 43.3359L33.4922 48.2109C33.8672 48.5703 34.0547 48.9922 34.0547 49.4766C34.0547 49.9766 33.875 50.3984 33.5156 50.7422C33.1719 51.1016 32.7578 51.2812 32.2734 51.2812C31.7891 51.2969 31.3672 51.1172 31.0078 50.7422Z"
              fill="#AFE67F"
            />
          </svg>

          <h3 className={ppRegular.className}>
            Grind with a <em className={ppItalic.className}>Green</em> Touch
          </h3>
          <p>
            Made with durable, premium materials without compromising
            sustainability. Built to last, it reduces the need for disposable
            spice containers, contributing to a more eco-friendly kitchen.
          </p>
        </div>

        <div className={clsx(styles.box, styles.functional)}>
          <Image
            src={functional}
            alt=""
            fill
            className={styles.functionalImg}
            sizes="30vw"
          />
          <p>
            <strong>Functional.</strong> Precise functionality developed with
            high-quality German craftsmanship.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

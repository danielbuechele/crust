import Legalese from "@/components/Legalese/Legalese";
import PageHeader from "@/components/PageHeader/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { medium } from "@/utils/medium";
import styles from "./page.module.css";
import image from "./image.png";

export default function Privacy() {
  return (
    <>
      <PageHeader
        title="Return Policy"
        lead="We're sure you'll love your new mill as soon as you open the box, but if you change your mind it's easy to return it within 30 days."
        byline={
          <>
            For full information, please check our 
            <Link href="terms">Terms of Service</Link>.
          </>
        }
      />

      <div className={styles.root}>
        <Legalese className={styles.content}>
          <hr />
          <p>To be eligible for a return:</p>
          <ul>
            <li>
              Your item must be in the same condition that you received it,
              <strong className={medium.className}>
                unused, undamaged, in re-sellable condition,
              </strong>{" "}
              and in its original packaging.
            </li>
            <li>
              Your return request is submitted within 
              <strong className={medium.className}>30 days</strong> of receiving
              your original order.
            </li>
          </ul>
          <p>
            We reserve the right to refuse returns that do not meet these
            criteria.
          </p>
          <p>
            To initiate a return, email{" "}
            <a href="mailto:returns@crustmill.com">returns@crustmill.com</a>{" "}
            with your order number and the reason for the return. For any
            questions about returns, feel free to contact us at any time.
          </p>
          <h3>Damages and Issues</h3>
          <p>
            Please inspect your order upon receipt and{" "}
            <Link href="/contact">contact us</Link> immediately if the item is
            defective, damaged, or if you receive the wrong item, so that we may
            evaluate the issue and make it right.
          </p>
          <p>
            Unfortunately, we cannot accept returns on sale items or gift cards.
          </p>
          <h3>Exchanges</h3>
          <p>
            The fastest way to ensure you get what you want is to return the
            item you have, and once the return is accepted, make a separate
            purchase for the new item.
          </p>
          <h3>Return Costs</h3>
          <p>
            For a small fee at checkout, you can qualify for a return at no
            additional cost, allowing you to avoid higher return handling and
            shipping fees. If you choose not to add this fee, you can still
            return your item, but you’ll need to cover the cost of the return
            shipping label.
          </p>
          <h3>Refunds</h3>
          <p>
            We will notify you once we’ve received and inspected your return to
            let you know if the refund was approved or not. If approved, you’ll
            be automatically refunded on your original payment method within 15
            business days. Please remember it can take some time for your bank
            or credit card company to process and post the refund too.
          </p>
          <p>
            If more than 15 business days have passed since we’ve approved your
            return, please <Link href="/contact">contact us</Link>.
          </p>
        </Legalese>

        <Image
          alt=""
          width={752}
          src={image}
          className={styles.img}
          quality={90}
        />
      </div>
    </>
  );
}

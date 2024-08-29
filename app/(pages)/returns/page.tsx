import Legalese from "@/components/Legalese/Legalese";
import PageHeader from "@/components/PageHeader/PageHeader";
import Image from "next/image";
import Link from "next/link";
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
              unused, undamaged, in re-sellable condition, and in its original
              packaging.
            </li>
            <li>
              Your return request is submitted within 30 days of receiving your
              original order.
            </li>
          </ul>
          <p>
            We reserve the right to refuse returns that do not meet these
            criteria.
          </p>
          <p>
            To start a return, you may use our online portal to select which
            product(s) you would like to return and create a shipping label. You
            can always <Link href="/contact">contact us</Link> for any return
            questions.
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

        <Image alt="" width={752} src={image} className={styles.img} />
      </div>
    </>
  );
}

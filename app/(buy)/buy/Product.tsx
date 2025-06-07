import RoundButton from "@/components/RoundButton/RoundButton";
import { ProductFragment as ProductFragmentT } from "@/utils/storefront";
import { gql } from "@apollo/client";
import styles from "./Product.module.css";
import Image from "next/image";
import clsx from "clsx";

export const ProductFragment = gql`
  fragment Product on Product {
    id
    availableForSale
    variants(first: 1) {
      nodes {
        id
        availableForSale
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;

export default function Product(
  props: {
    title: string;
    subtitle: string;
    description: string;
    image: any;
    quantity: number;
    available?: boolean;
    onIncrease: () => void;
    onDecrease: () => void;
  } & ProductFragmentT,
) {
  const price = props.variants.nodes[0].price;
  const compareAtPrice = props.variants.nodes[0].compareAtPrice;

  return (
    <li className={clsx(styles.product, compareAtPrice && styles.productSale)}>
      <div className={styles.titleRow}>
        <h2>{props.title}</h2>
        {props.availableForSale ? (
          <div className={styles.stepper}>
            <RoundButton
              onClick={props.onDecrease}
              disabled={props.quantity === 0}
            >
              -
            </RoundButton>
            <span className={styles.quantity}>{props.quantity}</span>
            <RoundButton
              onClick={props.onIncrease}
              disabled={props.quantity === 9}
            >
              +
            </RoundButton>
          </div>
        ) : (
          <span className={styles.soon}>Back in Stock Soon</span>
        )}
      </div>
      <div className={styles.row}>
        <Image width={128} alt="Burr" src={props.image} quality={90} />
        <div className={styles.content}>
          {compareAtPrice && (
            <>
              <div className={styles.savings}>
                save&nbsp;
                {Intl.NumberFormat("en-US", {
                  currency:
                    compareAtPrice.currencyCode === "XXX"
                      ? "USD"
                      : (compareAtPrice.currencyCode ?? "USD"),
                  style: "currency",
                }).format(compareAtPrice.amount - price.amount)}
              </div>
              <br />
            </>
          )}
          {props.subtitle}
          <p className={styles.desc}>{props.description}</p>

          <div className={styles.price}>
            {Intl.NumberFormat("en-US", {
              currency:
                price.currencyCode === "XXX"
                  ? "USD"
                  : (price.currencyCode ?? "USD"),
              style: "currency",
            }).format(price.amount ?? 0)}

            {compareAtPrice && (
              <div className={styles.compareAtPrice}>
                {Intl.NumberFormat("en-US", {
                  currency:
                    compareAtPrice.currencyCode === "XXX"
                      ? "USD"
                      : (compareAtPrice.currencyCode ?? "USD"),
                  style: "currency",
                }).format(compareAtPrice.amount ?? 0)}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

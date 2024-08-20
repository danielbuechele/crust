import RoundButton from "@/components/RoundButton/RoundButton";
import { ProductFragment as ProductFragmentT } from "@/utils/storefront";
import { gql } from "@apollo/client";
import styles from "./Product.module.css";

export const ProductFragment = gql`
  fragment Product on Product {
    id
    title
    description
    availableForSale
    featuredImage {
      url
      altText
    }
    variants(first: 1) {
      nodes {
        id
        availableForSale
        price {
          amount
          currencyCode
        }
      }
    }
  }
`;

export default function Product(
  props: {
    quantity: number;
    available?: boolean;
    subtitle: string;
    onIncrease: () => void;
    onDecrease: () => void;
  } & ProductFragmentT
) {
  return (
    <li className={styles.product}>
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
        {props.featuredImage && (
          <img
            className={styles.featuredImage}
            alt={props.featuredImage.altText ?? undefined}
            src={props.featuredImage.url}
          />
        )}
        <div>
          {props.subtitle}
          <p className={styles.desc}>{props.description}</p>
        </div>
      </div>
    </li>
  );
}

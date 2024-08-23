import RoundButton from "@/components/RoundButton/RoundButton";
import { ProductFragment as ProductFragmentT } from "@/utils/storefront";
import { gql } from "@apollo/client";
import styles from "./Product.module.css";
import Image from "next/image";

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
        <Image width={128} alt="Burr" src={props.image} />
        <div className={styles.content}>
          {props.subtitle}
          <p className={styles.desc}>{props.description}</p>
        </div>
      </div>
    </li>
  );
}

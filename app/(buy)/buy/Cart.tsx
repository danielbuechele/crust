"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import Product from "./Product";
import {
  AddToCartMutation,
  AddToCartMutationVariables,
  CartQuery as CartQueryT,
  CreateCartMutation,
  CreateCartMutationVariables,
  ProductFragment,
  UpdateCartMutation,
  UpdateCartMutationVariables,
} from "@/utils/storefront";
import { useCallback } from "react";
import styles from "./Cart.module.css";
import RoundButton from "@/components/RoundButton/RoundButton";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import useSessionStorageState from "use-session-storage-state";
import ceramic from "./ceramic.png";
import steel from "./steel.png";

const CartFragment = gql`
  fragment Cart on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 2) {
      nodes {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
          }
        }
      }
    }
  }
`;

const CartQuery = gql`
  query Cart($cartId: ID!) {
    cart(id: $cartId) {
      ...Cart
    }
  }
  ${CartFragment}
`;

const CreateCart = gql`
  mutation CreateCart($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart {
        ...Cart
      }
    }
  }
  ${CartFragment}
`;

const UpdateCart = gql`
  mutation UpdateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...Cart
      }
    }
  }
  ${CartFragment}
`;

const AddToCart = gql`
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...Cart
      }
    }
  }
  ${CartFragment}
`;

export default function Cart({
  salt,
  pepper,
}: {
  salt?: ProductFragment | null;
  pepper?: ProductFragment | null;
}) {
  const [cartId, setCartId] = useSessionStorageState<string | null>("cartId", {
    defaultValue: null,
  });

  const router = useRouter();

  const { data, loading: l0 } = useQuery<CartQueryT>(CartQuery, {
    variables: {
      cartId,
    },
    // fetchPolicy: "cache-only",
    skip: !cartId,
  });

  const cart = data?.cart;

  const [createCart, { loading: l1 }] = useMutation<
    CreateCartMutation,
    CreateCartMutationVariables
  >(CreateCart);
  const [updateCart, { loading: l2 }] = useMutation<
    UpdateCartMutation,
    UpdateCartMutationVariables
  >(UpdateCart);
  const [addToCart, { loading: l3 }] = useMutation<
    AddToCartMutation,
    AddToCartMutationVariables
  >(AddToCart);

  const loading = l0 || l1 || l2 || l3;

  const onChange = useCallback(
    (variantId: string, modify: -1 | 1) => {
      if (!cartId) {
        createCart({
          variables: {
            lines: [
              {
                quantity:
                  (cart?.lines?.nodes.find(
                    (n) => n.merchandise.id === variantId,
                  )?.quantity || 0) + modify,
                merchandiseId: variantId,
              },
            ],
          },
        }).then((res) => {
          setCartId(res.data?.cartCreate?.cart?.id ?? null);
        });
      } else if (
        cart?.lines.nodes.some((n) => n.merchandise.id === variantId)
      ) {
        updateCart({
          variables: {
            cartId,
            lines: [
              {
                quantity:
                  (cart?.lines.nodes.find((n) => n.merchandise.id === variantId)
                    ?.quantity || 0) + modify,
                merchandiseId: variantId,
                id: cart?.lines.nodes.find(
                  (n) => n.merchandise.id === variantId,
                )!.id,
              },
            ],
          },
        });
      } else {
        addToCart({
          variables: {
            cartId,
            lines: [
              {
                quantity:
                  (cart?.lines.nodes.find((n) => n.merchandise.id === variantId)
                    ?.quantity || 0) + modify,
                merchandiseId: variantId,
              },
            ],
          },
        });
      }
    },
    [cart, cartId, setCartId],
  );

  return (
    <div className={styles.root}>
      <RoundButton onClick={() => router.push("/")} className={styles.close}>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 10.2386L0.892046 9.13068L9.61364 0.4375L10.7216 1.54545L2 10.2386ZM9.61364 10.2386L0.892046 1.54545L2 0.4375L10.7216 9.13068L9.61364 10.2386Z"
            fill="currentColor"
          />
        </svg>
      </RoundButton>
      <h1 className={styles.h1}>
        Choose your
        <br />
        Crust Mill
      </h1>
      <ul className={styles.cart}>
        {pepper && (
          <Product
            {...pepper}
            image={steel}
            title="P–1 Pepper Mill"
            subtitle="Stainless Steel Grinding Burr"
            description="Our stainless steel burr grinder is perfect for pepper due to its hardness and durability."
            quantity={
              cart?.lines.nodes.find(
                (n) => n.merchandise.id === pepper.variants.nodes[0]?.id,
              )?.quantity || 0
            }
            onDecrease={() => onChange(pepper.variants.nodes[0].id, -1)}
            onIncrease={() => onChange(pepper.variants.nodes[0].id, 1)}
          />
        )}

        {salt && (
          <Product
            {...salt}
            image={ceramic}
            title="S–1 Salt Mill"
            subtitle="Ceramic Grinding Burr"
            description="Our ceramic burr grinder is perfect for salt because it is non-reactive, keeping the flavor pure."
            quantity={
              cart?.lines.nodes.find(
                (n) => n.merchandise.id === salt!.variants.nodes[0]?.id,
              )?.quantity || 0
            }
            onDecrease={() => onChange(salt.variants.nodes[0].id, -1)}
            onIncrease={() => onChange(salt.variants.nodes[0].id, 1)}
          />
        )}
      </ul>
      <p className={styles.shipping}>
        Free shipping in the US. Taxes are calculated at next step.
      </p>
      <div className={styles.total}>
        <span className={styles.amount}>
          {Intl.NumberFormat("en-US", {
            currency:
              cart?.cost.subtotalAmount.currencyCode === "XXX"
                ? "USD"
                : (cart?.cost.subtotalAmount.currencyCode ?? "USD"),
            style: "currency",
          }).format(cart?.cost.subtotalAmount.amount ?? 0)}
        </span>
        <PrimaryButton
          loading={loading}
          href={cart?.checkoutUrl}
          disabled={!cart || cart.totalQuantity < 1}
          width={200}
        >
          Checkout
        </PrimaryButton>
      </div>
    </div>
  );
}

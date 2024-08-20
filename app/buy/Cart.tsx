"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import Product from "./Product";
import {
  AddToCartMutation,
  AddToCartMutationVariables,
  CartFragment as CartFragmentT,
  CartQuery as CartQueryT,
  CreateCartMutation,
  CreateCartMutationVariables,
  ProductFragment,
  UpdateCartMutation,
  UpdateCartMutationVariables,
} from "@/utils/storefront";
import { useCallback, useState } from "react";
import styles from "./Cart.module.css";
import RoundButton from "@/components/RoundButton/RoundButton";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { useSessionStorage } from "@uidotdev/usehooks";

const CartFragment = gql`
  fragment Cart on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      totalAmount {
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
  const [cartId, setCartId] = useSessionStorage<string | null>("cartId", null);

  const router = useRouter();

  const { data } = useQuery<CartQueryT>(CartQuery, {
    variables: {
      cartId,
    },
    // fetchPolicy: "cache-only",
    skip: !cartId,
  });

  const cart = data?.cart;

  const [createCart] = useMutation<
    CreateCartMutation,
    CreateCartMutationVariables
  >(CreateCart);
  const [updateCart] = useMutation<
    UpdateCartMutation,
    UpdateCartMutationVariables
  >(UpdateCart);
  const [addToCart] = useMutation<
    AddToCartMutation,
    AddToCartMutationVariables
  >(AddToCart);

  const onChange = useCallback(
    (variantId: string, modify: -1 | 1) => {
      if (!cartId) {
        createCart({
          variables: {
            lines: [
              {
                quantity:
                  (cart?.lines?.nodes.find(
                    (n) => n.merchandise.id === variantId
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
                  (n) => n.merchandise.id === variantId
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
    [cart, cartId, setCartId]
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
            subtitle="Stainless Steel Grinding Burr"
            quantity={
              cart?.lines.nodes.find(
                (n) => n.merchandise.id === pepper.variants.nodes[0]?.id
              )?.quantity || 0
            }
            onDecrease={() => onChange(pepper.variants.nodes[0].id, -1)}
            onIncrease={() => onChange(pepper.variants.nodes[0].id, 1)}
          />
        )}

        {salt && (
          <Product
            {...salt}
            subtitle="Ceramic Grinding Burr"
            quantity={
              cart?.lines.nodes.find(
                (n) => n.merchandise.id === salt!.variants.nodes[0]?.id
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
              cart?.cost.totalAmount.currencyCode === "XXX"
                ? "USD"
                : (cart?.cost.totalAmount.currencyCode ?? "USD"),
            style: "currency",
          }).format(cart?.cost.totalAmount.amount ?? 0)}
        </span>
        <PrimaryButton
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

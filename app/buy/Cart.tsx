"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import Product from "./Product";
import {
  AddToCartMutation,
  AddToCartMutationVariables,
  CartFragment as CartFragmentT,
  ProductFragment,
  UpdateCartMutation,
  UpdateCartMutationVariables,
} from "@/utils/storefront";
import { useCallback, useState } from "react";
import styles from "./Cart.module.css";

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
      }
    }
  }
`;

const CartQuery = gql`
  query Cart($cartId: ID!) {
    ...Cart
  }
  ${CartFragment}
`;

const AddToCart = gql`
  mutation AddToCart($lines: [CartLineInput!]) {
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

export default function Cart({
  salt,
  pepper,
}: {
  salt?: ProductFragment | null;
  pepper?: ProductFragment | null;
}) {
  const [cartId, setCartId] = useState<string | null>(null);

  const { data: cart } = useQuery<CartFragmentT>(CartQuery, {
    variables: {
      cartId,
    },
  });

  const [addToCart] = useMutation<
    AddToCartMutation,
    AddToCartMutationVariables
  >(AddToCart);
  const [updateCart] = useMutation<
    UpdateCartMutation,
    UpdateCartMutationVariables
  >(UpdateCart);

  const onChange = useCallback(
    (variantId: string, modify: -1 | 1) => {
      if (!cartId) {
        addToCart({
          variables: {
            lines: [
              {
                quantity:
                  (cart?.lines.nodes.find((n) => n.id === variantId)
                    ?.quantity || 0) + modify,
                merchandiseId: variantId,
              },
            ],
          },
        }).then((res) => {
          setCartId(res.data?.cartCreate?.cart?.id ?? null);
        });
      } else {
        updateCart({
          variables: {
            cartId,
            lines: [
              {
                quantity:
                  (cart?.lines.nodes.find((n) => n.id === variantId)
                    ?.quantity || 0) + modify,
                id: cart?.lines.nodes.find((n) => n.id === variantId)?.id!,
              },
            ],
          },
        });
      }
    },
    [cartId, setCartId]
  );

  return (
    <>
      <ul>
        {pepper && (
          <Product
            {...pepper}
            subtitle="Stainless Steel Grinding Burr"
            quantity={
              cart?.lines.nodes.find(
                (n) => n.id === pepper.variants.nodes[0]?.id
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
                (n) => n.id === salt!.variants.nodes[0]?.id
              )?.quantity || 0
            }
            onDecrease={() => onChange(salt.variants.nodes[0].id, -1)}
            onIncrease={() => onChange(salt.variants.nodes[0].id, 1)}
          />
        )}
      </ul>
      <p>Free shipping in the US. Taxes are calculated at next step.</p>
      <div className={styles.total}>
        <span>
          {Intl.NumberFormat("en-US", {
            currency: cart?.cost.totalAmount.currencyCode ?? "USD",
            style: "currency",
          }).format(cart?.cost.totalAmount.amount ?? 0)}
        </span>
        <button
          className={styles.checkout}
          disabled={!cart || cart.totalQuantity < 1}
        >
          Checkout
        </button>
      </div>
    </>
  );
}

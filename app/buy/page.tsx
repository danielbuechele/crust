import { gql } from "@apollo/client";
import { getClient } from "../ApolloClient";
import { BuyQuery } from "@/utils/storefront";
import Wrapper from "@/components/Wrapper/Wrapper";
import Cart, { CF } from "./Cart";
import { Suspense } from "react";
import { ProductFragment } from "./Product";
import styles from "./page.module.css";
import Logo from "@/components/Logo";
import Link from "next/link";
import CartFragment from "./CartFragment";

const query = gql`
  query Buy {
    pepper: product(id: "gid://shopify/Product/8268393119979") {
      ...Product
    }
    salt: product(id: "gid://shopify/Product/8268393480427") {
      ...Product
    }
  }
  ${ProductFragment}
`;

export default async function Home() {
  const { data } = await getClient().query<BuyQuery>({
    query,
    variables: {
      cartId: `gid://shopify/Cart/1234567890`,
    },
    errorPolicy: "ignore",
  });

  return (
    <div className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <Link href="/">
          <Logo />
        </Link>
        <div className={styles.cart}>
          <Suspense fallback={<div>Loading...</div>}>
            <h1 className={styles.h1}>
              Choose your
              <br />
              Crust Mill
            </h1>
            <Cart salt={data.salt} pepper={data.pepper} />
          </Suspense>
        </div>
      </Wrapper>
    </div>
  );
}

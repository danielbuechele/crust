import { gql } from "@apollo/client";
import { getClient } from "../../ApolloClient";
import { BuyQuery } from "@/utils/storefront";
import Wrapper from "@/components/Wrapper/Wrapper";
import Cart from "./Cart";
import { Suspense } from "react";
import { ProductFragment } from "./Product";
import styles from "./page.module.css";
import Logo from "@/components/Logo";
import Link from "next/link";
import Gallery from "./Gallery";

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

export default async function Buy() {
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
        <Gallery salt={data.salt} pepper={data.pepper} />
        <Suspense>
          <Cart salt={data.salt} pepper={data.pepper} />
        </Suspense>
      </Wrapper>
    </div>
  );
}

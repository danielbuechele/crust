import { gql } from "@apollo/client";
import styles from "./page.module.css";
import { getClient } from "./ApolloClient";
import { ShopQuery } from "@/utils/storefront";

const shopQuery = gql`
  query Shop {
    shop {
      name
      id
    }
  }
`;

export default async function Home() {
  const { data } = await getClient().query<ShopQuery>({ query: shopQuery });

  return (
    <main className={styles.main}>
      <h1>{data.shop.name}</h1>
    </main>
  );
}

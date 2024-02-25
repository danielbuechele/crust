import { gql } from "@apollo/client";
import { getClient } from "../ApolloClient";
import { BuyQuery } from "@/utils/storefront";

const shopQuery = gql`
  query Buy {
    shop {
      name
      id
    }
    products(first: 10) {
      nodes {
        id
        title
      }
    }
  }
`;

export default async function Home() {
  const { data } = await getClient().query<BuyQuery>({ query: shopQuery });

  return (
    <main>
      <h1>{data.shop.name}</h1>
      <ul>
        {data.products.nodes.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
}

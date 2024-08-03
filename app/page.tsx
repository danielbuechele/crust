import { gql } from "@apollo/client";
import { getClient } from "./ApolloClient";
import { ShopQuery } from "@/utils/storefront";
import Footer from "@/components/Footer/Footer";
import Homepage from "@/components/Homepage/Homepage";
import Head from "@/components/Head/Head";

const shopQuery = gql`
  query Shop {
    shop {
      name
      id
    }
  }
`;

export default async function Home({}: {}) {
  const { data } = await getClient().query<ShopQuery>({ query: shopQuery });

  return (
    <>
      <Head />
      <Homepage />
      <Footer />
    </>
  );
}

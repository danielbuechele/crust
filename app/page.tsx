import { gql } from "@apollo/client";
import styles from "./page.module.css";
import { getClient } from "./ApolloClient";
import { ShopQuery } from "@/utils/storefront";
import Logo from "@/components/Logo";
import localFont from "next/font/local";
import clsx from "clsx";
import BuyButton from "@/components/BuyButton";
import Image from "next/image";
import ToggleGroup from "@/components/ToggleGroup";
import Footer from "@/components/Footer";
import Lead from "@/components/Lead";

const ppRegular = localFont({ src: "../public/PPEditorialNew-Regular.woff2" });
const ppItalic = localFont({ src: "../public/PPEditorialNew-Italic.woff2" });

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
    <>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Logo />
          <BuyButton />
        </nav>
        <h1 className={clsx(styles.hero, ppRegular.className)}>
          Precision grinding, now in the{" "}
          <em className={ppItalic.className}>finest</em> materials.
        </h1>
        <div className={styles.img} />
        <div className={styles.toggle}>
          <ToggleGroup />
        </div>
      </main>
      <Lead />
      <Footer />
    </>
  );
}

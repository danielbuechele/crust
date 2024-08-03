"use client";

import styles from "./Head.module.css";
import Logo from "@/components/Logo";
import localFont from "next/font/local";
import clsx from "clsx";
import BuyButton from "@/components/BuyButton/BuyButton";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";

const ppRegular = localFont({
  src: "../../public/PPEditorialNew-Regular.woff2",
});
const ppItalic = localFont({ src: "../../public/PPEditorialNew-Italic.woff2" });

export default async function Home({}: {}) {
  return (
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
        <ToggleGroup values={["Overview", "Specs"]} value="Overview" />
      </div>
    </main>
  );
}

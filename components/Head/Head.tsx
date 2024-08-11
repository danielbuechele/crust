"use client";

import styles from "./Head.module.css";
import Logo from "@/components/Logo";
import localFont from "next/font/local";
import clsx from "clsx";
import BuyButton from "@/components/BuyButton/BuyButton";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import { usePathname, useRouter } from "next/navigation";

import home from "./home.png";
import specs from "./specs.png";
import Image from "next/image";

const ppRegular = localFont({
  src: "../../public/PPEditorialNew-Regular.woff2",
});
const ppItalic = localFont({ src: "../../public/PPEditorialNew-Italic.woff2" });

export default async function Home({}: {}) {
  const pathname = usePathname();
  const router = useRouter();
  const isSpecs = pathname === "/specs";

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Logo />
        <BuyButton />
      </nav>
      <h1 className={clsx(styles.hero, ppRegular.className)}>
        {isSpecs ? (
          <>
            Technical
            <br />
            Specifications
          </>
        ) : (
          <>
            Precision grinding, now in the{" "}
            <em className={ppItalic.className}>finest</em> materials.
          </>
        )}
      </h1>
      <div className={styles.imgContainer}>
        <Image
          alt=""
          fill
          src={isSpecs ? specs : home}
          className={styles.img}
        />
      </div>
      <div className={styles.toggle}>
        <ToggleGroup
          values={["Overview", "Specs"]}
          value={isSpecs ? "Specs" : "Overview"}
          onValueChange={(value) =>
            router.push(value === "Specs" ? "/specs" : "/")
          }
        />
      </div>
    </main>
  );
}

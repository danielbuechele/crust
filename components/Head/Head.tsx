"use client";

import styles from "./Head.module.css";
import localFont from "next/font/local";
import clsx from "clsx";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import { usePathname, useRouter } from "next/navigation";

import home from "./home.png";
import specs from "./specs.png";
import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";

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
          src={specs}
          className={styles.img}
          priority={isSpecs}
          style={{ opacity: isSpecs ? 1 : 0 }}
          sizes="100vh"
        />
        <Image
          alt=""
          fill
          src={home}
          className={styles.img}
          style={{ opacity: isSpecs ? 0 : 1 }}
          priority={!isSpecs}
          sizes="100vh"
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

"use client";

import styles from "./Head.module.css";
import { serif, serifItalic } from "@/utils/medium";
import clsx from "clsx";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import { usePathname, useRouter } from "next/navigation";

import home from "./home.png";
import Image, { getImageProps } from "next/image";
import Sentinel from "../Sentinel/Sentinel";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function Head({}: {}) {
  const pathname = usePathname();
  const router = useRouter();
  const isSpecs = pathname === "/specs";

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    alt: "",
    sizes: "100vw",
    src: "/specs.png",
    objectFit: "contain",
    fill: true,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    alt: "",
    sizes: "100vw",
    fill: true,
    objectFit: "contain",
    src: "/specs-mobile.png",
  });

  return (
    <Sentinel variant="light2">
      <section className={styles.main}>
        <h1 className={clsx(styles.hero, serif.className)}>
          {isSpecs ? (
            <>
              Technical
              <br />
              Specifications
            </>
          ) : (
            <>
              The New Way
              <br />
              to&nbsp;
              <em className={serifItalic.className}>Salt&nbsp;&&nbsp;Pepper</em>
            </>
          )}
        </h1>
        <div
          className={clsx(
            styles.imgContainer,
            isSpecs && styles.imgContainerSpecs,
          )}
        >
          <Image
            alt=""
            fill
            src={home}
            className={styles.img}
            priority={!isSpecs}
            style={{ opacity: isSpecs ? 0 : 1 }}
            sizes="100vh"
          />
          <picture style={{ opacity: isSpecs ? 1 : 0 }}>
            <source media="(max-width: 1023px)" srcSet={mobile} />
            <source media="(min-width: 1024px)" srcSet={desktop} />
            <img {...rest} />
          </picture>
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
        <div className={styles.mobileBuyButton}>
          <PrimaryButton width={200} href="/buy">
            Buy
          </PrimaryButton>
        </div>
      </section>
    </Sentinel>
  );
}

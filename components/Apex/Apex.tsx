"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./Apex.module.css";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import localFont from "next/font/local";
import clsx from "clsx";

import stainless from "./stainless.png";
import ceramic from "./ceramic.png";
import Image from "next/image";
import { useState } from "react";

const ppRegular = localFont({
  src: "../../public/PPEditorialNew-Regular.woff2",
});
const ppItalic = localFont({
  src: "../../public/PPEditorialNew-Italic.woff2",
});

export default function Apex() {
  const [active, setActive] = useState("Stainless Steel");
  return (
    <div className={styles.root}>
      <Wrapper>
        <h2 className={clsx(styles.heading, ppRegular.className)}>
          The <em className={ppItalic.className}>Apex</em> of Grinding
          Technology
        </h2>
        <Image
          src={active === "Ceramic" ? ceramic : stainless}
          alt="Grinder burr"
        />
        <div className={styles.toggle}>
          <ToggleGroup
            variant="dark"
            values={["Stainless Steel", "Ceramic"]}
            value={active}
            onValueChange={(value) => setActive(value)}
          />
        </div>
        <p className={styles.p}>
          <em>Discover seamless grinding</em> with our unique grinder geometry,
          designed for smooth operation from start to finish.
        </p>
        <p className={styles.p}>
          Tailor your spice coarseness with ease, from ultra-fine for delicate
          sauces to robust for hearty rubs. Perfect your grind, every time.
        </p>
      </Wrapper>
    </div>
  );
}

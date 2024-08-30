"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./Apex.module.css";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import { serif, serifItalic } from "@/utils/medium";
import clsx from "clsx";

import stainless from "./stainless.png";
import ceramic from "./ceramic.png";
import Image from "next/image";
import { useState } from "react";

export default function Apex() {
  const [active, setActive] = useState("Stainless Steel");
  return (
    <div className={styles.root}>
      <Wrapper>
        <h2 className={clsx(styles.heading, serif.className)}>
          The <em className={serifItalic.className}>Apex</em> of Grinding
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
        {active === "Stainless Steel" ? (
          <>
            <p className={styles.p}>
              <em>Our stainless steel burr grinder</em> is ideal for pepper due
              to its exceptional hardness and durability, easily cutting through
              tough peppercorns. Its high-precision engineering ensures a
              consistent grind, enhancing flavor release.
            </p>
            <p className={styles.p}>
              Resistant to corrosion, stainless steel burrs maintain performance
              despite the oils and moisture in pepper.
            </p>
          </>
        ) : (
          <>
            <p className={styles.p}>
              <em>Our ceramic burr grinder</em> is perfect for salt because it
              is non-reactive, keeping the flavor pure. Its hardness and wear
              resistance ensure a fine, consistent grind.
            </p>
            <p className={styles.p}>
              Minimal heat generation prevents clumping, maintaining the salt's
              dryness. Additionally, ceramic burrs resist corrosion, ensuring
              long-lasting performance.
            </p>
          </>
        )}
      </Wrapper>
    </div>
  );
}

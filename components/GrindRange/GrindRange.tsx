"use client";

import Image from "next/image";
import TextPairing from "@/components/TextPairing/TextPairing";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./GrindRange.module.css";
import range from "./range.png";

export default function GrindRange() {
  return (
    <section className={styles.root}>
      <Wrapper>
        <TextPairing
          className={styles.text}
          heading="Massive Grind&nbsp;Range"
          align="center"
          variant="dark"
        >
          Crust grinds from 8 to over 60 mesh range - coarse enough for stocks
          and roast beef, and finer than pre-ground pepper.
        </TextPairing>
        <div className={styles.img}>
          <Image
            src={range}
            alt="Grind range"
            objectFit="contain"
            fill
            sizes="900px"
          />
        </div>
      </Wrapper>
    </section>
  );
}

"use client";

import useScroll from "@/utils/useScroll";
import styles from "./Lead.module.css";
import Reveal from "./Reveal";
import Wrapper from "./Wrapper/Wrapper";
import { useRef } from "react";

export default function Lead() {
  const ref = useRef<HTMLDivElement>(null);
  const percent = useScroll(ref, 2);

  return (
    <>
      <div className={styles.spacer} ref={ref} />
      <section
        className={styles.lead}
        style={{ visibility: percent >= 2 ? "hidden" : undefined }}
      >
        <Wrapper>
          <p>
            <Reveal
              className={styles.highlight}
              progress={percent}
              start={0.1}
              end={0.4}
            >
              Introducing the Crust Mill: Precision engineered for perfection in
              seasoning. Choose between the P–1 for an exquisite pepper grind or
              the S–1 for a flawless salt texture. Manufactured from the finest
              stainless steel for durability that lasts.
            </Reveal>
          </p>
          <p>
            <Reveal
              className={styles.highlight}
              progress={percent}
              start={0.4}
              end={0.8}
            >
              Designed in California and Made in Germany, this mill isn't just a
              tool—it's an essential part of the culinary experience, crafted to
              elevate every dish.
            </Reveal>
          </p>
        </Wrapper>
      </section>
    </>
  );
}

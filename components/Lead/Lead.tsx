"use client";

import useScroll from "@/utils/useScroll";
import styles from "./Lead.module.css";
import Reveal from "./Reveal";
import Wrapper from "@/components/Wrapper/Wrapper";
import { useRef } from "react";
import clsx from "clsx";

export default function Lead() {
  const ref = useRef<HTMLDivElement>(null);
  const percent = useScroll(ref, 2);

  return (
    <>
      <div className={styles.spacer} ref={ref} />
      <section
        className={clsx(styles.lead, percent > 1 && styles.shown)}
        style={{
          visibility: percent >= 2 ? "hidden" : undefined,
        }}
      >
        <Wrapper>
          <p>
            <Reveal
              className={styles.highlight}
              progress={percent}
              start={0.1}
              end={0.5}
            >
              Introducing the Crust Mill: Precision engineered for perfect
              seasoning. Choose the P–1 for exquisite pepper grind or the S–1
              for flawless salt texture. Crafted from premium stainless steel
              for lasting durability.
            </Reveal>
          </p>
          <p>
            <Reveal
              className={styles.highlight}
              progress={percent}
              start={0.5}
              end={0.8}
            >
              Designed in California and made in Germany, it’s more than a
              tool—it's a culinary essential to elevate every dish.
            </Reveal>
          </p>
        </Wrapper>
      </section>
    </>
  );
}

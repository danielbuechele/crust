"use client";

import useScroll from "@/utils/useScroll";
import styles from "./Lead.module.css";
import Reveal from "./Reveal";
import Wrapper from "./Wrapper/Wrapper";

export default function Lead() {
  const { percent, ref } = useScroll();

  return (
    <section ref={ref} className={styles.lead}>
      <Wrapper>
        <p>
          <Reveal
            className={styles.highlight}
            progress={percent}
            start={-0.15}
            end={0.25}
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
            start={0.25}
            end={0.4}
          >
            Designed in California and Made in Germany, this mill isn't just a
            tool—it's an essential part of the culinary experience, crafted to
            elevate every dish.
          </Reveal>
        </p>
      </Wrapper>
    </section>
  );
}

"use client";

import useScroll from "@/utils/useScroll";
import styles from "./Lead.module.css";
import Reveal from "./Reveal";

export default function Lead() {
  const { percent, ref } = useScroll();

  return (
    <div ref={ref} className={styles.lead}>
      <p>
        <span className={styles.highlight}>Introducing the Crust Mill: </span>
        <Reveal
          className={styles.highlight}
          progress={percent}
          start={-0.2}
          end={0.2}
        >
          Precision engineered for perfection in seasoning. Choose between the
          P–1 for an exquisite pepper grind or the S–1 for a flawless salt
          texture. Manufactured from the finest stainless steel for durability
          that lasts.
        </Reveal>
      </p>
      <p>
        <Reveal
          className={styles.highlight}
          progress={percent}
          start={0.2}
          end={0.3}
        >
          Designed in California and Made in Germany, this mill isn't just a
          tool—it's an essential part of the culinary experience, crafted to
          elevate every dish.
        </Reveal>
      </p>
    </div>
  );
}

"use client";

import useScroll from "@/utils/useScroll";
import styles from "./Lead.module.css";

export default function Lead() {
  const { percent, ref } = useScroll();

  return (
    <div ref={ref} className={styles.lead}>
      <p>
        <Reveal>
          Introducing the Crust Mill: Precision engineered for perfection in
          seasoning. Choose between the P–1 for an exquisite pepper grind or the
          S–1 for a flawless salt texture. Manufactured from the finest
          stainless steel for durability that lasts.
        </Reveal>
      </p>
      <p>
        <Reveal>
          Designed in California and Made in Germany, this mill isn't just a
          tool—it's an essential part of the culinary experience, crafted to
          elevate every dish.
        </Reveal>
      </p>
    </div>
  );
}

function Reveal(props: { start?: number; children: string }) {
  return props.children.split(" ").map((word, index) => {
    return <span> {word}</span>;
  });
}

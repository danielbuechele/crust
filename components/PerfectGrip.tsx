"use client";

import TextPairing from "./TextPairing";
import styles from "./PerfectGrip.module.css";
import { useEffect, useRef } from "react";
import { useInViewEffect } from "react-hook-inview";

export default function PerfectGrip() {
  const height = 2000;
  const video = useRef<HTMLVideoElement>(null);

  const ref = useInViewEffect(() => {
    document.addEventListener("scroll", () => {
      if (!video.current) {
        return;
      }
      video.current.currentTime =
        video.current.duration * (window.scrollY / height);
    });
  });

  return (
    <section className={styles.root} ref={ref} style={{ height }}>
      <video
        ref={video}
        className={styles.video}
        src="./crust-p1-animated_converted.mov"
      />
      <TextPairing heading="Perfect Grip">
        The precisely contoured shape fits naturally in your hand, ensuring a
        secure and effortless grip. Every use feels smooth and controlled.
      </TextPairing>

      <TextPairing heading="Easy to Fill">
        Refilling your Crust Mill is effortless. Just lift the knob to reveal a
        wide opening, allowing up to 50g of pepper or dry salt without spills.
      </TextPairing>

      <TextPairing heading="Medical-Grade Stainless Steel">
        Stainless steel, not aluminum, is chosen for its unmatched durability
        and resistance to rust and corrosion. This ensures your grinder performs
        flawlessly over time, preserving the pure, unaltered flavors of your
        spices.
      </TextPairing>
    </section>
  );
}

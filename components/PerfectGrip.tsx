"use client";

import TextPairing from "./TextPairing";
import styles from "./PerfectGrip.module.css";
import { useCallback, useRef, useState } from "react";
import { useInViewEffect } from "react-hook-inview";

function throttle(fn: () => void, delay: number) {
  let last = 0;
  return () => {
    const now = Date.now();
    if (now - last < delay) {
      return;
    }
    last = now;
    fn();
  };
}

export default function PerfectGrip() {
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 500;
  const length = windowHeight * 3;
  const video = useRef<HTMLVideoElement>(null);
  const [slide, setSlide] = useState(0);

  const ref = useInViewEffect(([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      const top = entry.target.getBoundingClientRect().top + window.scrollY;
      document.addEventListener(
        "scroll",
        throttle(() => {
          if (!video.current) {
            return;
          }
          setSlide((window.scrollY - top) / windowHeight);
          video.current.currentTime =
            video.current.duration * ((window.scrollY - top) / length);
        }, 25)
      );
    }
  });

  return (
    <section
      className={styles.root}
      ref={ref}
      style={{ height: length + windowHeight }}
    >
      <video
        ref={video}
        className={styles.video}
        src="./crust-p1-animated_converted.mov"
      />
      <div className={styles.content} style={{ top: 80 }}>
        <TextPairing heading="Perfect Grip">
          The precisely contoured shape fits naturally in your hand, ensuring a
          secure and effortless grip. Every use feels smooth and controlled.
        </TextPairing>
      </div>
      <div
        className={styles.content}
        style={{ top: windowHeight, opacity: (slide - 0.7) * 10 }}
      >
        <TextPairing heading="Easy to Fill">
          Refilling your Crust Mill is effortless. Just lift the knob to reveal
          a wide opening, allowing up to 50g of pepper or dry salt without
          spills.
        </TextPairing>
      </div>
      <div className={styles.content} style={{ bottom: 80 }}>
        <TextPairing heading="Medical-Grade Stainless Steel">
          Stainless steel, not aluminum, is chosen for its unmatched durability
          and resistance to rust and corrosion. This ensures your grinder
          performs flawlessly over time, preserving the pure, unaltered flavors
          of your spices.
        </TextPairing>
      </div>
    </section>
  );
}

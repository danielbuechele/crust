"use client";

import TextPairing from "../TextPairing/TextPairing";
import styles from "./PerfectGrip.module.css";
import { useEffect, useRef } from "react";
import useScroll from "@/utils/useScroll";

export default function PerfectGrip() {
  const video = useRef<HTMLVideoElement>(null);
  const { ref, percent } = useScroll();

  useEffect(() => {
    if (video.current && !isNaN(video.current.duration)) {
      video.current.currentTime =
        (percent / 1.5 - 0.18) * video.current.duration;
    }
  }, [percent, video]);

  return (
    <section className={styles.root} ref={ref} style={{ height: "300vh" }}>
      <div className={styles.videoContainer}>
        <video
          ref={video}
          className={styles.video}
          src="/crust-p1-animated_converted.mov"
        />
      </div>
      <div className={styles.content} style={{ top: 80 }}>
        <TextPairing heading="Perfect Grip" align="center">
          The precisely contoured shape fits naturally in your hand, ensuring a
          secure and effortless grip. Every use feels smooth and controlled.
        </TextPairing>
      </div>
      <div
        className={styles.content}
        style={{ top: "100vh", opacity: (percent - 0.75) * 20 }}
      >
        <TextPairing heading="Easy to Fill" align="center">
          Refilling your Crust Mill is effortless. Just lift the knob to reveal
          a wide opening, allowing up to 50g of pepper or dry salt without
          spills.
        </TextPairing>
      </div>
      <div className={styles.content} style={{ bottom: 80 }}>
        <TextPairing heading="Medical-Grade Stainless Steel" align="center">
          Stainless steel, not aluminum, is chosen for its unmatched durability
          and resistance to rust and corrosion. This ensures your grinder
          performs flawlessly over time, preserving the pure, unaltered flavors
          of your spices.
        </TextPairing>
      </div>
    </section>
  );
}

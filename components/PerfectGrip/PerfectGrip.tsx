"use client";

import TextPairing from "../TextPairing/TextPairing";
import styles from "./PerfectGrip.module.css";
import { useEffect, useMemo, useRef } from "react";
import useScroll from "@/utils/useScroll";
import { useWindowSize } from "@uidotdev/usehooks";
import linearInterpolation from "@/utils/linearInterpolation";
import localFont from "next/font/local";
import clsx from "clsx";

const medium = localFont({
  src: "../../public/basiercircle-medium-webfont.woff2",
});

const SEQUENCE_LENGTH = 120;

function getFilename(i: number) {
  // find ./ -iname "*.png" -exec magick '{}' -resize 1500x1500^ -gravity center -crop 1500x1500+0+0 +repage -background '#E8EAE7' -alpha remove -alpha off -quality 50 '{}'.avif \;
  return `/crust-p1-animated-scroll/crust-p1-animated0${String(i).padStart(3, "0")}.avif`;
}

export default function PerfectGrip() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();
  const { ref, percent } = useScroll();

  const value = useMemo(
    () =>
      linearInterpolation(
        [-1, 1],
        [0, 1],
        [0.26, 14],
        [1.6, 91],
        [2, SEQUENCE_LENGTH],
        [3, SEQUENCE_LENGTH]
      ),
    []
  );

  useEffect(() => {
    for (let i = 0; i < SEQUENCE_LENGTH; i++) {
      const img = new Image();
      img.src = getFilename(i);
    }
  }, []);

  useEffect(() => {
    const current = canvas.current;
    if (!current) {
      return;
    }
    const ctx = current.getContext("2d");
    if (!ctx) {
      return;
    }

    const img = new Image();
    img.src = getFilename(Math.floor(value(percent) - 1));
    img.onload = () => {
      requestAnimationFrame(() =>
        ctx.drawImage(img, 0, 0, ((height ?? 0) / 2343) * 1920, height ?? 0)
      );
    };
  }, [canvas, percent, width, height]);

  return (
    <section className={styles.root} ref={ref} style={{ height: "300vh" }}>
      <div className={styles.videoContainer}>
        <canvas
          className={styles.video}
          ref={canvas}
          width={((height ?? 0) / 2343) * 1920}
          height={height ?? 0}
        />
      </div>
      <div className={styles.content} style={{ top: 60 }}>
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
        <TextPairing
          heading="Medical-Grade Stainless&nbsp;Steel"
          align="center"
          left={
            <div className={styles.table}>
              <div className={styles.row}>
                <div className={clsx(styles.label, medium.className)}>Burr</div>
                <div>
                  Stainless Steel (P–1)
                  <br />
                  Ceramic (S–1)
                </div>
              </div>
              <div className={styles.row}>
                <div className={clsx(styles.label, medium.className)}>
                  Color Tags
                </div>
                <div>Vegan Leather</div>
              </div>
              <div className={styles.row}>
                <div className={clsx(styles.label, medium.className)}>
                  Other Parts
                </div>
                <div>Stainless Steel</div>
              </div>
            </div>
          }
        >
          Stainless steel, not aluminum, is chosen for its unmatched durability
          and resistance to rust and corrosion. This ensures your grinder
          performs flawlessly over time, preserving the pure, unaltered flavors
          of your spices.
        </TextPairing>
      </div>
    </section>
  );
}

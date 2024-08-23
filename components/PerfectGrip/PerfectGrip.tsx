"use client";

import TextPairing from "../TextPairing/TextPairing";
import styles from "./PerfectGrip.module.css";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import localFont from "next/font/local";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const medium = localFont({
  src: "../../public/basiercircle-medium-webfont.woff2",
});

const SEQUENCE_LENGTH = 120;

function getFilename(i: number) {
  // find ./ -iname "*.png" -exec magick '{}' -resize 1500x1500^ -gravity center -crop 1500x1500+0+0 +repage -background '#E8EAE7' -alpha remove -alpha off -quality 50 '{}'.avif \;
  return `/crust-p1-animated-scroll/crust-p1-animated0${String(i).padStart(3, "0")}.avif`;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function PerfectGrip() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const { height } = useWindowSize();

  useEffect(() => {
    // Preload images
    for (let i = 0; i < SEQUENCE_LENGTH; i++) {
      const img = new Image();
      img.src = getFilename(i);
    }
  }, []);

  useGSAP(
    () => {
      const playhead = { frame: 0 };
      const onUpdate = () => {
        const current = canvas.current;
        if (!current) {
          return;
        }
        const ctx = current.getContext("2d");
        if (!ctx) {
          return;
        }

        const img = new Image();
        img.src = getFilename(Math.floor(playhead.frame));
        console.log(playhead.frame);
        img.onload = () => {
          ctx.drawImage(img, 0, 0, ((height ?? 0) / 2343) * 1920, height ?? 0);
        };
      };

      onUpdate();

      gsap.set(text2.current, { opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
            pin: [videoContainer.current],
            onUpdate,
          },
        })
        .fromTo(
          playhead,
          { frame: 0 },
          {
            frame: 59,
            duration: 1.5,
          },
          0.25
        )
        .fromTo(
          playhead,
          { frame: 59 },
          {
            frame: SEQUENCE_LENGTH - 1,
            // onUpdate,
            duration: 1,
          },
          2.5
        )
        .to(
          text2.current,
          {
            opacity: 1,
            duration: 0.25,
          },
          1.25
        )
        .to(
          text2.current,
          {
            opacity: 0,
            duration: 0.25,
          },
          2.25
        );
    },
    {
      dependencies: [container.current, canvas.current, height, text2.current],
      scope: container,
      revertOnUpdate: true,
    }
  );

  return (
    <>
      <div className={styles.spacer} />
      <section ref={container} className={styles.root}>
        <div ref={videoContainer} className={styles.videoContainer}>
          <div className={styles.videoContainer2}>
            <canvas
              className={styles.video}
              ref={canvas}
              width={((height ?? 0) / 2343) * 1920}
              height={height ?? 0}
            />
          </div>
        </div>
        <div className={clsx(styles.content, styles.text1)}>
          <TextPairing heading="Perfect Grip" align="center">
            The precisely contoured shape fits naturally in your hand, ensuring
            a secure and effortless grip. Every use feels smooth and controlled.
          </TextPairing>
        </div>
        <div className={clsx(styles.content, styles.text2)} ref={text2}>
          <TextPairing heading="Easy to Fill" align="center">
            Refilling your Crust Mill is effortless. Just lift the knob to
            reveal a wide opening, allowing up to 50g of pepper or dry salt
            without spills.
          </TextPairing>
        </div>
        <div className={clsx(styles.content, styles.text3)}>
          <TextPairing
            heading="Medical-Grade Stainless&nbsp;Steel"
            align="center"
            left={
              <div className={styles.table}>
                <div className={styles.row}>
                  <div className={clsx(styles.label, medium.className)}>
                    Burr
                  </div>
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
            Stainless steel, not aluminum, is chosen for its unmatched
            durability and resistance to rust and corrosion. This ensures your
            grinder performs flawlessly over time, preserving the pure,
            unaltered flavors of your spices.
          </TextPairing>
        </div>
      </section>
      <div className={styles.spacer} />
    </>
  );
}

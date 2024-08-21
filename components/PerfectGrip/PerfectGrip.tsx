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
  const pin = useRef<HTMLDivElement>(null);
  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const text3 = useRef<HTMLDivElement>(null);
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
        console.log("onUpdate", playhead.frame);
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
        img.onload = () => {
          ctx.drawImage(img, 0, 0, ((height ?? 0) / 2343) * 1920, height ?? 0);
        };
      };

      onUpdate();

      gsap.to(playhead, {
        frame: SEQUENCE_LENGTH - 1,
        onUpdate,
        // keyframes: [
        //   { frame: 0, duration: 1 },
        //   { frame: 59, duration: 2 },
        //   { frame: SEQUENCE_LENGTH - 1, duration: 1 },
        // ],
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: true,
          pin: pin.current,
        },
      });

      // gsap.to(text1.current, {
      //   opacity: 0,

      //   scrollTrigger: {
      //     start: "top center",
      //     end: "bottom center",
      //     scrub: true,
      //   },
      // });
    },
    {
      dependencies: [container.current, canvas.current, pin.current, height],
      scope: container,
    }
  );

  return (
    <section ref={container} className={styles.root}>
      <div ref={pin}>
        <div className={styles.videoContainer}>
          <canvas
            className={styles.video}
            ref={canvas}
            width={((height ?? 0) / 2343) * 1920}
            height={height ?? 0}
          />
        </div>
        <div
          className={styles.content}
          ref={text1}
          style={{ top: 160, position: "sticky", opacity: 1 }}
        >
          <TextPairing heading="Perfect Grip" align="center">
            The precisely contoured shape fits naturally in your hand, ensuring
            a secure and effortless grip. Every use feels smooth and controlled.
          </TextPairing>
        </div>
        <div className={styles.content} ref={text2}>
          <TextPairing heading="Easy to Fill" align="center">
            Refilling your Crust Mill is effortless. Just lift the knob to
            reveal a wide opening, allowing up to 50g of pepper or dry salt
            without spills.
          </TextPairing>
        </div>
        <div className={styles.content} ref={text3}>
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
      </div>
    </section>
  );
}

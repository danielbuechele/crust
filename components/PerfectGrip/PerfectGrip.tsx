"use client";

import TextPairing from "../TextPairing/TextPairing";
import styles from "./PerfectGrip.module.css";
import { useCallback, useMemo, useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { medium } from "@/utils/medium";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "../Wrapper/Wrapper";

const SEQUENCE_LENGTH = 120;

function getFilename(i: number) {
  // find ./ -iname "*.png" -exec magick '{}' -resize 1500x1500^ -gravity center -crop 1500x1500+0+0 +repage -background '#E8EAE7' -alpha remove -alpha off -quality 50 '{}'.avif \;
  return `/crust-p1-animated-scroll/crust-p1-animated0${String(i).padStart(3, "0")}.avif`;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function useHeight() {
  const { height, width } = useWindowSize();
  const cachedHeight = useRef(height);
  if (cachedHeight.current == null) {
    cachedHeight.current = height;
  }

  if (cachedHeight.current && screen.width === width) {
    return cachedHeight.current;
  }
  return height ?? 0;
}

export default function PerfectGrip() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const height = useHeight();
  const oldFrame = useRef(-1);

  const renderFrame = useCallback(
    (newFrame: number) => {
      if (newFrame === oldFrame.current) {
        return;
      }
      const current = canvas.current;
      if (!current) {
        console.error("Canvas not found");
        return;
      }
      const ctx = current.getContext("2d");
      if (!ctx) {
        console.error("Canvas context not found");
        return;
      }
      window.requestAnimationFrame(() => {
        ctx.drawImage(images[newFrame], 0, 0, (height / 2343) * 1920, height);
        oldFrame.current = newFrame;
      });
    },
    [oldFrame, canvas, height],
  );

  const images = useMemo(() => {
    if (typeof window === "undefined") {
      return [];
    }
    return new Array(SEQUENCE_LENGTH).fill(null).map((_, i) => {
      const img = new Image();
      img.src = getFilename(i);
      if (i === 0) {
        img.onload = () => renderFrame(0);
      }
      return img;
    });
  }, []);

  useGSAP(
    () => {
      const playhead = { frame: 0 };

      const onUpdate = () => {
        const newFrame = Math.floor(playhead.frame);
        renderFrame(newFrame);
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
          0.25,
        )
        .fromTo(
          playhead,
          { frame: 59 },
          {
            frame: SEQUENCE_LENGTH - 1,
            duration: 1.5,
          },
          1.5,
        )
        .to(
          text2.current,
          {
            opacity: 1,
            duration: 0.25,
          },
          0.75,
        )
        .to(
          text2.current,
          {
            opacity: 0,
            duration: 0.25,
          },
          1.35,
        );
    },
    {
      dependencies: [
        container.current,
        canvas.current,
        text2.current,
        renderFrame,
      ],
      scope: container,
      revertOnUpdate: true,
    },
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
              width={(height / 2343) * 1920}
              height={height}
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
            reveal a wide opening, allowing up to 45 g of pepper or dry salt
            without spills.
          </TextPairing>
        </div>
      </section>
      <div className={styles.spacer}>
        <Wrapper className={clsx(styles.content, styles.text3)}>
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
        </Wrapper>
      </div>
    </>
  );
}

"use client";

import TextPairing from "../TextPairing/TextPairing";
import styles from "./PerfectGrip.module.css";
import { useCallback, useRef } from "react";
import { medium } from "@/utils/medium";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "../Wrapper/Wrapper";

const SEQUENCE_LENGTH = 150;

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function PerfectGrip() {
  const video = useRef<HTMLVideoElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const oldFrame = useRef(-1);

  const setVideoTime = useCallback(
    (newFrame: number) => {
      const current = video.current;
      if (current && current.duration > 0) {
        current.currentTime = newFrame / SEQUENCE_LENGTH * current.duration + 0.001;
      }
    },
    [video],
  );

  const renderFrame = useCallback(
    (newFrame: number) => {
      if (newFrame === oldFrame.current) {
        return;
      }
      oldFrame.current = newFrame;
      setVideoTime(newFrame);
    },
    [oldFrame, video],
  );

  useGSAP(
    () => {
      const playhead = { frame: 0 };

      const onUpdate = () => {
        const newFrame = Math.floor(playhead.frame);
        renderFrame(newFrame);
      };
      onUpdate();

      gsap.set(text2.current, { opacity: 0 });

      // iOS has various bugs around scroll positions in combination with ScrollTrigger.
      // That results in jank when you scroll the page quickly and this fixes it.
      if (isTouchDevice()) {
        ScrollTrigger.normalizeScroll({
          type: "touch",
        });
      }

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
            duration: 1.25,
          },
          0.25,
        )
        .fromTo(
          playhead,
          { frame: 60 },
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
          1.25,
        );
    },
    {
      dependencies: [
        container.current,
        video.current,
        text2.current,
        renderFrame,
      ],
      scope: container,
      revertOnUpdate: true,
    },
  );

  return (
    <div className={styles.overflowHidden}>
      <section ref={container} className={styles.root}>
        <div ref={videoContainer} className={styles.videoContainer}>
          <video
            className={styles.video}
            ref={video}
            playsInline
            muted
            preload="auto"
            onLoadedMetadata={() => setVideoTime(oldFrame.current)}
            onLoadedData={() => setVideoTime(oldFrame.current)}
          >
            <source src="/crust-p1-animated-h264.mp4#t=5" type="video/mp4; codecs=avc1.64002A"/>
            <source src="/crust-p1-animated-h265.mp4#t=5" type="video/mp4; codecs=hvc1.1.6.L120.90"/>
            <source src="/crust-p1-animated-av1.mp4#t=5" type="video/mp4; codecs=av01.0.05M.08"/>
          </video>
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
                    <br/>
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
    </div>
  );
}

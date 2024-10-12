"use client";

import Image from "next/image";
import TextPairing from "@/components/TextPairing/TextPairing";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./GrindRange.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import kick from "./range-kick.png";
import powder from "./range-powder.png";
import steak from "./range-steak.png";
import table from "./range-table.png";
import whole from "./range-whole.png";

import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { useWindowSize } from "@uidotdev/usehooks";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function GrindRange() {
  const imagesInner = useRef<HTMLDivElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLDivElement>(null);
  const { height } = useWindowSize();

  useGSAP(
    () => {
      const width = pin.current?.clientWidth ?? 1500;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: pin.current,
            start: "bottom bottom ",
            end: "bottom top",
            scrub: true,
            // markers: true,
            pin: [pin.current],
          },
        })
        .to(indicator.current, 1, {
          left: width,
          duration: 2.5,
          ease: `steps(${Math.floor(width / 10)})`,
        })
        .to(
          imagesInner.current,
          1,
          {
            left: width + 1 - (height && height < 768 ? 300 : 500) * 5,
            duration: 2.5,
          },
          0,
        );
    },
    {
      dependencies: [
        pin.current,
        indicator.current,
        imagesInner.current,
        height,
      ],
      scope: pin,
      revertOnUpdate: true,
    },
  );

  return (
    <section className={styles.root}>
      <Wrapper>
        <div ref={pin}>
          <TextPairing
            className={styles.text}
            heading="Massive Grind&nbsp;Range"
            align="center"
            variant="dark"
          >
            Crust grinds from 8 to over 60 mesh range - coarse enough for stocks
            and roast beef, and finer than pre-ground pepper.
          </TextPairing>
          <div className={styles.range}>
            <div>Whole Peppercorns</div>
            <div>Coarse</div>
            <div>Medium</div>
            <div>Fine</div>
          </div>
          <div className={styles.scale}>
            <div className={styles.indicator} ref={indicator} />
          </div>
          <div className={styles.images}>
            <div className={styles.imagesInner} ref={imagesInner}>
              <Type img={whole} title="" text="" />
              <Type
                img={steak}
                title="Steak Seasoning"
                text="Three turns (3×) from the zero position."
              />
              <Type
                img={kick}
                title="Pepper Kick"
                text="One and a half turns (1 1/2×) from the zero position."
              />
              <Type
                img={table}
                title="Classic Table Seasoning"
                text="One full turn (1×) from the zero position."
              />
              <Type
                img={powder}
                title="Fine Powder"
                text="Half a turn (1/2×) from the zero position."
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

function Type(props: { img: StaticImageData; text: string; title: string }) {
  return (
    <div className={styles.type}>
      <Image width="500" src={props.img} alt={props.title} />
      <div className={styles.label}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

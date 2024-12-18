"use client";

import { useState, useRef } from "react";
import styles from "./ColorTags.module.css";
import TextPairing from "@/components/TextPairing/TextPairing";
import * as Accordion from "@radix-ui/react-accordion";
import clsx from "clsx";
import { medium } from "@/utils/medium";
import white from "./white.png";
import rose from "./rose.png";
import orange from "./orange.png";
import midnight from "./midnight.png";
import ivory from "./ivory.png";
import charcoal from "./charcoal.png";
import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import { useInView } from "react-hook-inview";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const IMAGES = {
  white,
  rose,
  orange,
  midnight,
  ivory,
  charcoal,
};

type Colors = keyof typeof IMAGES;

const PEPPER = [
  {
    name: "Crust Orange",
    id: "orange" as const,
    description:
      "A lively orange with subtle red hints, mirroring the harmonious blend of fruity and woody notes in Red Kampot pepper.",
    color: "#FC4C02",
  },
  {
    name: "Ivory Pepper Haze",
    id: "ivory" as const,
    description:
      "A light, ethereal ivory with beige nuances, capturing the understated, elegant flavor profile of white peppercorns.",
    color: "#D9C7A5",
  },
  {
    name: "Malabar Midnight Noir",
    id: "midnight" as const,
    description:
      "A mysterious, dark black with hints of forest green, capturing the distinctive and aromatic depth of Malabar Black Pepper.",
    color: "#353730",
  },
];

const SALT = [
  {
    name: "Ocean Mist White",
    id: "white" as const,
    description:
      "A bright, pure white, reflecting the freshness of ocean mist and the crystalline essence of evaporated salt.",
    color: "#D8D9D9",
  },
  {
    name: "Rosé Quartz White",
    id: "rose" as const,
    description:
      "A serene, pale white infused with a blush of pink, capturing the subtle warmth of Himalayan salt crystals.",
    color: "#DCC4C2",
  },
  {
    name: "Lunar Charcoal Grey",
    id: "charcoal" as const,
    description:
      "A deep, intriguing grey with subtle purple undertones, reminiscent of the rich, smoky hues of Kala Namak salt.",
    color: "#746F72",
  },
];

export default function ColorTags() {
  const wrapper = useRef<HTMLDivElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const DEFAULT_COLOR = "orange";
  const [color, setColor] = useState<Colors>(DEFAULT_COLOR);
  const inView = useInView();

  useGSAP(
    () => {
      (window as any).gsap = gsap;
      (window as any).wrapper = wrapper.current;
      (window as any).pin = pin.current;
      console.log(wrapper);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapper.current,
            pin: pin.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
    },
    {
      dependencies: [
        wrapper.current,
        pin.current,
      ],
      scope: wrapper,
      revertOnUpdate: true,
    },
  );

  return (
    <section className={styles.root}>
      <Wrapper ref={wrapper} className={styles.wrapper}>
        <div className={styles.mobileText}>
          <h3>{[...PEPPER, ...SALT].find((i) => i.id === color)?.name}</h3>
          <p>{[...PEPPER, ...SALT].find((i) => i.id === color)?.description}</p>
        </div>
        <ul className={styles.mobileSelector}>
          {[...PEPPER, ...SALT].map((i) => (
            <li key={i.id}>
              <button
                className={clsx(styles.color, color === i.id && styles.active)}
                style={{ backgroundColor: i.color }}
                onClick={() => setColor(i.id)}
              />
            </li>
          ))}
        </ul>
        <div ref={pin} className={styles.preview}>
          {Object.entries(IMAGES).map(([key, src]) =>
            key === color || inView ? (
              <Image
                key={key}
                src={src}
                alt=""
                className={styles.image}
                style={{ opacity: color === key ? 1 : 0 }}
                quality={90}
                fill
                sizes="960px"
                loading={color === key ? "eager" : "lazy"}
              />
            ) : null,
          )}
        </div>
        <div className={styles.text}>
          <TextPairing heading="Color Tags">
            The magnetic Color Tags, essential to the product’s design, offer a
            personalized touch of color and character. Perfect for easy spice
            identification and adding a unique flair to your culinary toolkit.
          </TextPairing>
          <div className={styles.selector}>
            <h2 className={styles.heading}>Pepper Mill</h2>
            <Details onChange={setColor} value={color} items={PEPPER} />

            <h2 className={styles.heading}>Salt Mill</h2>
            <Details onChange={setColor} value={color} items={SALT} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

function Details(props: {
  items: Array<{
    id: Colors;
    name: string;
    description: string;
    color: string;
  }>;
  onChange: (value: Colors) => void;
  value: Colors;
}) {
  return (
    <Accordion.Root
      type="single"
      onValueChange={(e) => props.onChange((e || props.value) as Colors)}
      value={props.value}
      collapsible
      className={styles.accordion}
    >
      {props.items.map((item) => (
        <Accordion.Item key={item.name} value={item.id}>
          <Accordion.Trigger asChild>
            <Accordion.Header className={clsx(medium.className, styles.header)}>
              {item.name}
              <div
                className={clsx(
                  styles.color,
                  props.value === item.id && styles.active,
                )}
                style={{ backgroundColor: item.color }}
              />
            </Accordion.Header>
          </Accordion.Trigger>
          <Accordion.Content className={styles.content}>
            <div className={styles.desc}>{item.description}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

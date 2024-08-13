"use client";

import { useState } from "react";
import styles from "./ColorTags.module.css";
import TextPairing from "@/components/TextPairing/TextPairing";
import * as Accordion from "@radix-ui/react-accordion";
import clsx from "clsx";
import localFont from "next/font/local";
import white from "./white.png";
import rose from "./rose.png";
import orange from "./orange.png";
import midnight from "./midnight.png";
import ivory from "./ivory.png";
import charcoal from "./charcoal.png";
import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import { useInView } from "react-hook-inview";

const IMAGES = {
  white,
  rose,
  orange,
  midnight,
  ivory,
  charcoal,
};

type Colors = keyof typeof IMAGES;

const medium = localFont({
  src: "../../public/basiercircle-medium-webfont.woff2",
});

export default function ColorTags() {
  const DEFAULT_COLOR = "orange";
  const [color, setColor] = useState<Colors>(DEFAULT_COLOR);
  const inView = useInView();

  return (
    <section className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.preview}>
          {Object.entries(IMAGES).map(([key, src]) =>
            key === color || inView ? (
              <Image
                key={key}
                src={src}
                alt=""
                style={{ opacity: color === key ? 1 : 0 }}
                quality={50}
                fill
                sizes="960px"
                loading={color === key ? "eager" : "lazy"}
              />
            ) : null
          )}
        </div>
        <div className={styles.selector}>
          <TextPairing heading="Color Tags">
            The magnetic Color Tags, essential to the product’s design, offer a
            personalized touch of color and character. Perfect for easy spice
            identification and adding a unique flair to your culinary toolkit.
          </TextPairing>
          <h2 className={styles.heading}>Pepper Mill</h2>
          <Details
            onChange={setColor}
            value={color}
            items={[
              {
                name: "Crust Orange",
                id: "orange",
                description: "Classic black for a sleek and modern look.",
                color: "#FC4C02",
              },
              {
                name: "Ivory Pepper Haze",
                id: "ivory",
                description: "A clean and timeless white.",
                color: "#D9C7A5",
              },
              {
                name: "Malabar Midnight Noir",
                id: "midnight",
                description: "A bold red for a pop of color.",
                color: "#353730",
              },
            ]}
          />

          <h2 className={styles.heading}>Salt Mill</h2>
          <Details
            onChange={setColor}
            value={color}
            items={[
              {
                name: "Ocean Mist White",
                id: "white",
                description: "Classic black for a sleek and modern look.",
                color: "#D8D9D9",
              },
              {
                name: "Rosé Quartz White",
                id: "rose",
                description: "A clean and timeless white.",
                color: "#DCC4C2",
              },
              {
                name: "Lunar Charcoal Grey",
                id: "charcoal",
                description: "A bold red for a pop of color.",
                color: "#746F72",
              },
            ]}
          />
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
                  props.value === item.id && styles.active
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

"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import { useState } from "react";
import Image from "next/image";

import pepper from "./pepper.png";
import specs from "./specs.png";
import salt from "./salt.png";
import mill from "./mill.png";
import guide from "./guide.png";

const medium = localFont({
  src: "../../public/basiercircle-medium-webfont.woff2",
});

function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className={clsx(medium, styles.sectionTitle)}>{props.title}</h2>
      <div>{props.children}</div>
    </>
  );
}

function ValuePair(props: { label: string; value: string }) {
  return (
    <div className={styles.pair}>
      <div className={styles.label}>{props.label}</div>
      <div className={styles.value}>{props.value}</div>
    </div>
  );
}

function Row(props: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className={styles.row}>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
}
export default function Page() {
  const [tags, setTags] = useState<"Pepper" | "Salt">("Pepper");
  return (
    <Wrapper>
      <section className={styles.grid}>
        <Section title="Size & Weight">
          <ValuePair label="Diameter" value="1.67” (42,4 mm)" />
          <Row
            left={<Image alt="" width={150} src={specs} />}
            right={<ValuePair label="Height" value="7.56” (192 mm)" />}
          />
          <Row
            left={<ValuePair label="Weight (Pepper)" value="25.2 oz (715 g)" />}
            right={<ValuePair label="Weight (Salt)" value="22.7 oz (645 g)" />}
          />
        </Section>
        <hr />

        <Section title="Volume & Adjusting">
          <ValuePair label="Volume (Pepper)" value="1.5 oz (45 g)" />
          <ValuePair label="Volume (Salt)" value="2.1 oz (60 g)" />
          <ValuePair label="Rotation" value="12 Steps (0,0166 mm / 16,6 μm)" />
        </Section>
        <hr />
        <Section title="Material">
          <ValuePair label="P–1 Pepper 30 mm Burr" value="Stainless Steel" />
          <ValuePair label="S–1 Salt 30 mm Burr" value="Ceramic (Zirconium)" />
          <ValuePair label="Color Tags" value="Vegan Leather" />
          <ValuePair label="All Other Mill Parts" value="Stainless Steel" />
          <ValuePair label="Packaging" value="100% Recycled Paper" />
        </Section>
        <hr />
        <Section title="Compatible Salts & Peppers">
          <ValuePair
            label="Pepper"
            value="Choose whole peppercorns designed for grinding. You can use black, white, red, or dried green pepper varieties. We recommend Kampot, Malabar, and Tellicherry peppercorns."
          />
          <ValuePair
            label="Salt"
            value="Choose large, non-wet salt crystals. You can use table salt, sea salt, and Himalayan salt intended for grinding. To prevent the salt from clumping, store it in a dry place when not in use."
          />
        </Section>
        <hr />
        <Section title="In the Box">
          <div className={styles.bento}>
            <div className={clsx(styles.bentoBox, styles.bentoMill)}>
              <Image src={mill} alt="" fill />
              <div className={styles.bentoContent}>Mill</div>
            </div>
            <div className={styles.bentoBox}>
              <div className={styles.bentoContent}>
                3× Color Tags
                <ToggleGroup
                  values={["Pepper", "Salt"]}
                  value={tags}
                  onValueChange={(e) => setTags(e as any)}
                />
              </div>
              <Image src={tags === "Pepper" ? pepper : salt} alt="" fill />
            </div>
            <div className={clsx(styles.bentoGuide, styles.bentoBox)}>
              <Image src={guide} alt="" fill />
              <div className={styles.bentoContent}>Quick Start</div>
            </div>
          </div>
        </Section>
      </section>
    </Wrapper>
  );
}

"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css";
import clsx from "clsx";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import { useState } from "react";
import Image from "next/image";

import pepper from "./pepper.png";
import specs from "./specs.png";
import salt from "./salt.png";
import guide from "./guide.png";
import mill from "./mill.png";
import Table, { Row } from "@/components/Table/Table";

function ValuePair(props: { label: string; value: string }) {
  return (
    <div className={styles.pair}>
      <div className={styles.label}>{props.label}</div>
      <div className={styles.value}>{props.value}</div>
    </div>
  );
}

function LeftRight(props: { left: React.ReactNode; right: React.ReactNode }) {
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
    <Wrapper paddingTop>
      <Table>
        <Row title="Size & Weight" noBorderTop>
          <ValuePair label="Diameter" value="1.65” (42 mm)" />
          <LeftRight
            left={<Image alt="" width={150} src={specs} />}
            right={<ValuePair label="Height" value="7.48” (190 mm)" />}
          />
          <LeftRight
            left={<ValuePair label="Weight (Pepper)" value="25.2 oz (715 g)" />}
            right={<ValuePair label="Weight (Salt)" value="22.7 oz (645 g)" />}
          />
        </Row>
        <Row title="Volume & Adjusting">
          <ValuePair label="Volume (Pepper)" value="25.75 oz (730 g)" />
          <ValuePair label="Volume (Salt)" value="22.58 oz (640 g)" />
          <ValuePair label="Rotation" value="20 Steps (0,05 mm / 50 μm)" />
        </Row>
        <Row title="Material">
          <ValuePair label="P–1 Pepper 30 mm Burr" value="Stainless Steel" />
          <ValuePair label="S–1 Salt 30 mm Burr" value="Ceramic (Zirconium)" />
          <ValuePair label="Color Tags" value="Vegan Leather" />
          <ValuePair label="All Other Mill Parts" value="Stainless Steel" />
          <ValuePair label="Packaging" value="100% Recycled Paper" />
        </Row>
        <Row title="Compatible Salts & Peppers">
          <ValuePair
            label="Pepper"
            value="Choose whole peppercorns designed for grinding. You can use black, white, red, or dried green pepper varieties. We recommend Kampot, Malabar, and Tellicherry peppercorns."
          />
          <ValuePair
            label="Salt"
            value="Choose large, non-wet salt crystals. You can use table salt, sea salt, and Himalayan salt intended for grinding. To prevent the salt from clumping, store it in a dry place when not in use."
          />
        </Row>
        <Row title="In the Box">
          <div className={styles.bento}>
            <div className={clsx(styles.bentoBox, styles.bentoMill)}>
              <Image
                src={mill}
                alt="Mill"
                fill
                sizes="(max-width: 767px) 100vw, 30vw"
              />
              <div className={styles.bentoContent}>Mill</div>
            </div>
            <div className={styles.bentoBox}>
              <div className={styles.bentoContent}>
                3× Color Tags
                <ToggleGroup
                  values={["Pepper", "Salt"]}
                  value={tags}
                  variant="medium"
                  onValueChange={(e) => setTags(e as any)}
                />
              </div>
              <Image
                className={styles.tags}
                style={{ opacity: tags === "Pepper" ? 1 : 0 }}
                sizes="(max-width: 767px) 100vw, 30vw"
                src={pepper}
                alt="Pepper tags"
                fill
              />
              <Image
                className={styles.tags}
                style={{ opacity: tags === "Salt" ? 1 : 0 }}
                sizes="(max-width: 767px) 100vw, 30vw"
                src={salt}
                alt="Salt tags"
                fill
              />
            </div>
            <div className={clsx(styles.bentoGuide, styles.bentoBox)}>
              <Image
                src={guide}
                alt="Quick Start guide"
                fill
                sizes="(max-width: 767px) 100vw, 30vw"
              />
              <div className={styles.bentoContent}>Quick Start</div>
            </div>
          </div>
        </Row>
      </Table>
    </Wrapper>
  );
}

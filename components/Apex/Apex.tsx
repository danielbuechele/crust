"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./Apex.module.css";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import { serif, serifItalic } from "@/utils/medium";
import clsx from "clsx";

import { useState } from "react";

export default function Apex() {
  const [active, setActive] = useState("Stainless Steel");
  return (
    <div className={styles.root}>
      <Wrapper>
        <h2 className={clsx(styles.heading, serif.className)}>
          The <em className={serifItalic.className}>Apex</em> of Grinding
          Technology
        </h2>
        {/* ffmpeg -framerate 30 -start_number 0 -i  burr-ceramic%04d.png -vf "crop=1250:1250:(in_w-1250)/2:(in_h-1250)/2,scale=720:720" -c:v libaom-av1 -b:v 0 -crf 45 -strict experimental -an output.webm */}
        <video className={styles.image} autoPlay muted loop playsInline>
          <source
            src="/burr-ceramic.webm"
            type="video/webm; codecs=av01.0.04M.08.0.110.01.01.01.0"
          />
          <source src="/burr-ceramic.mp4" type="video/mp4; codecs=hvc1" />
        </video>
        <div className={styles.toggle}>
          <ToggleGroup
            variant="dark"
            values={["Stainless Steel", "Ceramic"]}
            value={active}
            onValueChange={(value) => setActive(value)}
          />
        </div>
        {active === "Stainless Steel" ? (
          <>
            <p className={styles.p}>
              <em>Our stainless steel burr grinder</em> is ideal for pepper due
              to its exceptional hardness and durability, easily cutting through
              tough peppercorns. Its high-precision engineering ensures a
              consistent grind, enhancing flavor release.
            </p>
            <p className={styles.p}>
              Resistant to corrosion, stainless steel burrs maintain performance
              despite the oils and moisture in pepper.
            </p>
          </>
        ) : (
          <>
            <p className={styles.p}>
              <em>Our ceramic burr grinder</em> is perfect for salt because it
              is non-reactive, keeping the flavor pure. Its hardness and wear
              resistance ensure a fine, consistent grind.
            </p>
            <p className={styles.p}>
              Minimal heat generation prevents clumping, maintaining the salt's
              dryness. Additionally, ceramic burrs resist corrosion, ensuring
              long-lasting performance.
            </p>
          </>
        )}
      </Wrapper>
    </div>
  );
}

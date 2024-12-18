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
        {/* ffmpeg -framerate 30 -start_number 0 -i burr-ceramic%04d.png -vf "crop=1250:1250:(in_w-1250)/2:(in_h-1250)/2,scale=720:720" -c:v libaom-av1 -b:v 0 -crf 45 -profile:v 0 -pix_fmt yuv420p -an burr-ceramic.webm */}
        <video
          key={active}
          className={styles.image}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={
              active === "Ceramic" ? "/burr-ceramic.webm" : "/burr-steel.webm"
            }
            type="video/webm; codecs=av01.0.04M.08.0.110.01.01.01.0"
          />
          {/* ffmpeg -framerate 30 -start_number 0 -i burr-steel%04d.png -vf "crop=1250:1250:(in_w-1250)/2:(in_h-1250)/2,scale=720:720" -c:v libx265 -crf 25 -b:v 0 -tag:v hvc1 -pix_fmt yuv420p -an burr-steel.mp4 */}
          <source
            src={active === "Ceramic" ? "/burr-ceramic.mp4" : "/burr-steel.mp4"}
            type="video/mp4; codecs=hvc1"
          />
        </video>
        <link rel="preload" href="/burr-ceramic.webm" as="video" />
        <link rel="preload" href="/burr-ceramic.mp4" as="video" />
        <div className={styles.toggle}>
          <ToggleGroup
            variant="dark"
            values={["Stainless Steel", "Ceramic"]}
            value={active}
            onValueChange={(value) => setActive(value)}
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            <em>Our stainless steel burr grinder</em> is ideal for pepper due to
            its exceptional hardness and durability, easily cutting through
            tough peppercorns. Its high-precision engineering ensures a
            consistent grind, enhancing flavor release.
          </p>
          <p>
            Resistant to corrosion, stainless steel burrs maintain performance
            despite the oils and moisture in pepper.
          </p>
          <div
            className={styles.ceramic}
            style={{ opacity: active === "Ceramic" ? 1 : 0 }}
          >
            <p>
              <em>Our ceramic burr grinder</em> is perfect for salt because it
              is non-reactive, keeping the flavor pure. Its hardness and wear
              resistance ensure a fine, consistent grind.
            </p>
            <p>
              Minimal heat generation prevents clumping, maintaining the salt's
              dryness. Additionally, ceramic burrs resist corrosion, ensuring
              long-lasting performance.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

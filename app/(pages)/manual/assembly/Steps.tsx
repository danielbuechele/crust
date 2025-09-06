"use client";

import Slideshow from "@/components/Slideshow/Slideshow";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import styles from "./Steps.module.css";
import { Suspense, useState } from "react";

import assembly1 from "./assembly1.png";
import assembly2 from "./assembly2.png";
import assembly3 from "./assembly3.png";
import assembly4 from "./assembly4.png";
import assembly5 from "./assembly5.png";
import assembly6 from "./assembly6.png";
import assembly7 from "./assembly7.png";

import disassembly1 from "./disassembly1.png";
import disassembly2 from "./disassembly2.png";
import disassembly3 from "./disassembly3.png";
import disassembly4 from "./disassembly4.png";
import disassembly5 from "./disassembly5.png";
import disassembly6 from "./disassembly6.png";

const ASSEMBLY = [
  {
    url: assembly1,
    caption: "1. Connect the Rotary Shaft to the Knob.",
  },
  {
    url: assembly2,
    caption: "2. Carefully slide the Mill Housing onto the Rotary Shaft.",
  },
  {
    url: assembly3,
    caption:
      "3. Slide the Washer with flat side pointing up onto the Rotary Shaft. (Skip step if Washer is already in place) ",
  },
  {
    url: assembly4,
    caption: "4. Slide the Spring onto the Rotary Shaft.",
  },
  {
    url: assembly5,
    caption: "5. Slide the Burr Grinder onto the Rotary Shaft.",
  },
  {
    url: assembly6,
    caption:
      "6. Gently push and hold the Burr against the Spring in the Mill Housing until the Rotary Shaft is visible. Hold the Knob and Mill Housing firmly while screwing the Rotary clockwise onto the Rotary Shaft.",
  },
  {
    url: assembly7,
    caption:
      "7. Turn the mill right side up (1) and put the Color Tag back in place (2). Your assembly is finished.",
  },
];

const DISASSEMBLY = [
  {
    url: disassembly1,
    caption: "1. Remove Color Tag by pulling it up.",
  },
  {
    url: disassembly2,
    caption:
      "2. Turn the mill upside down (1). Hold the Knob and Mill Housing firmly while unscrewing the Rotary counterclockwise (2).",
  },
  {
    url: disassembly3,
    caption: "3. Remove Burr by pulling it out.",
  },
  {
    url: disassembly4,
    caption: "4. Remove Spring by pulling it out.",
  },
  {
    url: disassembly5,
    caption:
      "5. Separate Knob and Mill Housing by pulling the Mill Housing upwards.",
  },
  {
    url: disassembly6,
    caption:
      "6. Pull Rotary Shaft out of Knob by pulling it out. Your disassembly is finishes.",
  },
];

export default function Steps() {
  const [value, setValue] = useState("Disassembly");

  return (
    <>
      <div className={styles.container}>
        <ToggleGroup
          variant="medium"
          values={["Disassembly", "Assembly"]}
          value={value}
          onValueChange={setValue}
        />
      </div>

      <Suspense>
        <Slideshow
          className={styles.slideshow}
          height={672}
          mobileHeight={240}
          key={value}
          images={value === "Assembly" ? ASSEMBLY : DISASSEMBLY}
        />
      </Suspense>
    </>
  );
}

"use client";

import Slideshow from "@/components/Slideshow/Slideshow";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import styles from "./Steps.module.css";
import { useState } from "react";

export default function Steps() {
  const [value, setValue] = useState("Disassembly");

  return (
    <div className={styles.container}>
      <ToggleGroup variant="medium" values={["Disassembly", "Assembly"]} value={value} onValueChange={setValue} />
      <Slideshow
        images={[
          { url: "/manual/filling/1.png", caption: "caption 1" },
          { url: "/manual/filling/2.png", caption: "caption 2" },
          { url: "/manual/filling/3.png", caption: "caption 3" },
        ]}
      />
    </div>
  );
}

"use client";

import { Root, Item } from "@radix-ui/react-toggle-group";
import { useLayoutEffect, useRef, useState } from "react";

import styles from "./ToggleGroup.module.css";

export default function ToggleGroup() {
  const [value, setValue] = useState("A");
  const ref = useRef<HTMLDivElement>(null);

  const [highlight, setHighlight] = useState<{ left: number; width: number }>({
    left: 4,
    width: 135,
  });

  useLayoutEffect(() => {
    const { current } = ref;
    if (!current) {
      return;
    }
    setHighlight({
      left: current.querySelector('[data-state="on"]')?.offsetLeft ?? 0,
      width: current.querySelector('[data-state="on"]')?.offsetWidth ?? 0,
    });
  }, [value]);

  return (
    <Root
      type="single"
      value={value}
      className={styles.group}
      onValueChange={(value) => {
        if (value) {
          setValue(value);
        }
      }}
      ref={ref}
    >
      <Item className={styles.item} value="A">
        Overview
      </Item>
      <Item className={styles.item} value="B">
        Specs
      </Item>
      <div className={styles.active} style={highlight} />
    </Root>
  );
}

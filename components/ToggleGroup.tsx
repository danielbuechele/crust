"use client";

import { Root, Item } from "@radix-ui/react-toggle-group";
import { useLayoutEffect, useRef, useState } from "react";

import styles from "./ToggleGroup.module.css";

export default function ToggleGroup() {
  const [value, setValue] = useState("A");
  const ref = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<DOMRect | null>(null);

  useLayoutEffect(() => {
    const { current } = ref;
    if (!current) {
      return;
    }
    setActive(
      current.querySelector('[data-state="on"]')?.getBoundingClientRect()
    );
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
      <div
        className={styles.active}
        style={{ width: active?.width, left: active?.left }}
      />
    </Root>
  );
}

"use client";

import { Root, Item } from "@radix-ui/react-toggle-group";
import { useLayoutEffect, useRef, useState } from "react";

import styles from "./ToggleGroup.module.css";
import clsx from "clsx";

export default function ToggleGroup({
  value,
  values,
  onValueChange,
  variant,
}: {
  variant?: "light" | "dark";
  value: string;
  onValueChange: (value: string) => void;
  values: string[];
}) {
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
      left:
        current.querySelector<HTMLElement>('[data-state="on"]')?.offsetLeft ??
        0,
      width:
        current.querySelector<HTMLElement>('[data-state="on"]')?.offsetWidth ??
        0,
    });
  }, [value]);

  return (
    <Root
      type="single"
      value={value}
      className={clsx(styles.group, variant === "dark" && styles.dark)}
      onValueChange={(value) => {
        if (value) {
          onValueChange(value);
        }
      }}
      ref={ref}
    >
      {values.map((value) => (
        <Item key={value} className={styles.item} value={value}>
          {value}
        </Item>
      ))}
      <div className={styles.active} style={highlight} />
    </Root>
  );
}

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
  variant?: "light" | "dark" | "medium";
  value: string;
  onValueChange?: (value: string) => void;
  values: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [highlight, setHighlight] = useState<{
    left: number;
    width: number;
  } | null>(null);

  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current?.querySelector<HTMLElement>('[data-state="on"]');
    if (!el) {
      return;
    }
    setHighlight({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  }, [value, mounted]);

  return (
    <Root
      type="single"
      value={value}
      className={clsx(
        styles.group,
        variant === "dark" && styles.dark,
        variant === "medium" && styles.medium
      )}
      onValueChange={(value) => {
        if (value && onValueChange) {
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
      <div
        className={styles.active}
        style={highlight ? { opacity: 1, ...highlight } : { opacity: 0 }}
      />
    </Root>
  );
}

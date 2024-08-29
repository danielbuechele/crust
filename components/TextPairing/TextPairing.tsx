import { serif } from "@/utils/medium";
import styles from "./TextPairing.module.css";
import clsx from "clsx";

export default function TextPairing({
  children,
  heading,
  variant,
  align = "left",
  className,
  left,
}: {
  children: React.ReactNode;
  left?: React.ReactNode;
  heading: string;
  variant?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        styles.root,
        className,
        variant === "dark" ? styles.dark : undefined,
        left && styles.wide,
      )}
    >
      <h3
        className={clsx(
          styles.heading,
          serif.className,
          align === "center" && styles.center,
        )}
      >
        {heading}
      </h3>
      <div className={styles.content}>
        {left}
        {children}
      </div>
    </div>
  );
}

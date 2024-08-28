import clsx from "clsx";
import styles from "./Slide.module.css";
import { useRef } from "react";

export default function Slide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className={clsx(styles.slide, className)}>
      {children}
    </section>
  );
}

import clsx from "clsx";
import styles from "./Slide.module.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Slide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const st = ScrollTrigger.create({
        trigger: ref.current,
        start: () =>
          ref.current!.offsetHeight < window.innerHeight
            ? "top top"
            : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
        pin: true,
        pinSpacing: false,
      });
    },
    {
      revertOnUpdate: true,
      scope: ref,
      dependencies: [ref.current],
    }
  );
  return (
    <section ref={ref} className={clsx(styles.slide, className)}>
      {children}
    </section>
  );
}

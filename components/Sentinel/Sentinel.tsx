"use client";

import { useContext } from "react";
import { useIntersectionObserver, useWindowSize } from "usehooks-ts";
import { Variant } from "@/components/Menu/Menu";
import MenuContext from "@/components/Menu/MenuContext";

export default function Sentinel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: Variant;
}) {
  const { variant: v, setVariant } = useContext(MenuContext);
  const { height } = useWindowSize();
  const { ref } = useIntersectionObserver({
    root: null,
    rootMargin: `0px 0px -${height - 64}px 0px`,
    onChange: (isIntersecting) => {
      if (isIntersecting) {
        setVariant(variant);
        document
          .querySelector("meta[name=theme-color]")
          ?.setAttribute("content", "#ff0000");
      } else if (v === "light2") {
        setVariant("white");
      }
    },
  });
  return <div ref={ref}>{children}</div>;
}

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
  const { setVariant } = useContext(MenuContext);
  const { height } = useWindowSize();
  const { ref } = useIntersectionObserver({
    root: null,
    rootMargin: `0px 0px -${height - 64}px 0px`,
    onChange: (isIntersecting) => {
      console.log("d");
      if (isIntersecting) {
        setVariant(variant);
      }
    },
  });
  return <div ref={ref}>{children}</div>;
}

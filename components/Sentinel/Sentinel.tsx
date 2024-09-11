"use client";

import { useContext } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { Variant } from "@/components/Menu/Menu";
import MenuContext from "@/components/Menu/MenuContext";

export default function Sentinel({
  children,
  variant: v,
}: {
  children: React.ReactNode;
  variant: Variant;
}) {
  const { setVariant, variant } = useContext(MenuContext);
  const { ref } = useIntersectionObserver({
    root: null,
    rootMargin: "-72px 0px -100% 0px",
    onChange: (isIntersecting) => {
      if (typeof window !== "undefined") {
        setVariant(isIntersecting ? v : "white");
      }
    },
  });
  return <div ref={ref}>{children}</div>;
}

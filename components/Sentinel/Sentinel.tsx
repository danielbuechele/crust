"use client";

import { useContext } from "react";
import { useIntersectionObserver } from "usehooks-ts";
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
  const { ref } = useIntersectionObserver({
    root: null,
    rootMargin: "-64px 0px -80% 0px",
    // TODO fix
    onChange: (isIntersecting) => {
      console.log("d");
      if (isIntersecting) {
        setVariant(variant);
      }
    },
  });
  return <div ref={ref}>{children}</div>;
}

"use client";

import { useContext, useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    let value = "";
    switch (v) {
      case "white":
        value = "white";
        break;
      case "light1":
        value = "#F1F1F1";
        break;
      case "light2":
        value = "#E3E3E3";
        break;
      case "dark":
        value = "#0E0F12";
        break;
    }
    document
      .querySelector("meta[name=theme-color]")
      ?.setAttribute("content", value);
  }, [v]);
  const { ref } = useIntersectionObserver({
    root: null,
    rootMargin: `0px 0px -${height - 64}px 0px`,
    onChange: (isIntersecting) => {
      if (isIntersecting) {
        setVariant(variant);
      } else if (v === "light2") {
        setVariant("white");
      }
    },
  });
  return <div ref={ref}>{children}</div>;
}

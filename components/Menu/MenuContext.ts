"use client";

import { createContext } from "react";
import { Variant } from "./Menu";

export default createContext<{
  variant: Variant;
  setVariant: (variant: Variant) => void;
}>({
  variant: "light1",
  setVariant: () => {},
});

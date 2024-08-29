import { RefObject, useEffect, useState } from "react";

export type Position = "above" | "entering" | "inside" | "leaving" | "below";

export default function useElementVisibility(
  ref: RefObject<HTMLElement>,
): Position {
  const [visibility, setVisibility] = useState<Position>("below");

  useEffect(() => {
    const checkVisibility = () => {
      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();

      if (
        rect.top < window.innerHeight &&
        rect.bottom > window.innerHeight &&
        rect.top > 0
      ) {
        setVisibility("entering");
      } else if (rect.bottom > window.innerHeight && rect.top < 0) {
        setVisibility("inside");
      } else if (rect.top < 0 && rect.bottom > 0) {
        setVisibility("leaving");
      } else if (rect.top > window.innerHeight) {
        setVisibility("below");
      } else if (rect.bottom < 0) {
        setVisibility("above");
      }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [ref]);

  return visibility;
}

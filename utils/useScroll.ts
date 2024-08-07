import { useRef, useState } from "react";
import throttle from "lodash.throttle";

import { useInViewEffect } from "react-hook-inview";

export default function useScroll() {
  const [percent, setPercent] = useState(0);

  const cb = useRef<((...args: any) => any) | null>(null);

  const ref = useInViewEffect(([entry]) => {
    const top = entry.target.getBoundingClientRect().top + window.scrollY;

    if (entry.isIntersecting) {
      const fn = throttle(() => {
        setPercent((window.scrollY - top) / window.innerHeight);
      }, 16);
      cb.current = fn;
      document.addEventListener("scroll", fn);
    } else {
      if (cb.current) {
        document.removeEventListener("scroll", cb.current);
      }
    }
  });

  return { percent, ref };
}

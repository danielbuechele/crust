import { useRef, useState } from "react";
import pThrottle, { AnyFunction } from "p-throttle";

import { useInViewEffect } from "react-hook-inview";

const throttle = pThrottle({
  limit: 1,
  interval: 16,
});

export default function useScroll() {
  const [percent, setPercent] = useState(0);

  const cb = useRef<AnyFunction | null>(null);

  const ref = useInViewEffect(([entry]) => {
    const top = entry.target.getBoundingClientRect().top + window.scrollY;

    if (entry.isIntersecting) {
      const fn = throttle(() => {
        setPercent((window.scrollY - top) / window.innerHeight);
      });
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

import { useRef, useState, useEffect } from "react";
import throttle from "lodash.throttle";

export default function useScroll(
  ref: React.RefObject<HTMLElement>,
  defaultValue = 0
) {
  const [percent, setPercent] = useState(defaultValue);

  const cb = useRef<((...args: any) => any) | null>(null);

  useEffect(() => {
    const fn = throttle(() => {
      if (!ref.current) {
        return;
      }
      const top = ref.current.getBoundingClientRect().top + window.scrollY;
      setPercent((window.scrollY - top) / window.innerHeight);
    }, 16);
    cb.current = fn;
    document.addEventListener("scroll", fn);

    return () => {
      if (cb.current) {
        document.removeEventListener("scroll", cb.current);
      }
    };
  }, [ref]);

  return percent;
}

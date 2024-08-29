"use client";

import Lead from "@/components/Lead/Lead";
import PerfectGrip from "@/components/PerfectGrip/PerfectGrip";
import ColorTags from "@/components/ColorTags/ColorTags";
import Apex from "@/components/Apex/Apex";
import GrindRange from "@/components/GrindRange/GrindRange";
import MoreOutput from "@/components/MoreOutput/MoreOutput";
import PreciseAdjustment from "@/components/PreciseAdjustment/PreciseAdjustment";
import Features from "@/components/Features/Features";
import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Position = "below" | "inbetween" | "above";

const useElementPosition = (
  elementRef: RefObject<HTMLElement>,
  track: "bottom" | "top",
) => {
  const [isAboveViewport, setIsAboveViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const { top, bottom } = elementRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const position = track === "top" ? top : bottom;

        if (position < viewportHeight) {
          setIsAboveViewport(true);
        } else {
          setIsAboveViewport(false);
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, track]);

  return isAboveViewport;
};

function Slide(props: {
  children: React.ReactNode;
  index: number;
  onPositionChange: (index: number, value: Position) => void;
}) {
  const ref = useRef(null);
  const hasHitBottom = useElementPosition(ref, "bottom");
  const hasHitTop = useElementPosition(ref, "top");

  useEffect(() => {
    if (hasHitBottom) {
      props.onPositionChange(props.index, "above");
    } else if (!hasHitBottom && hasHitTop) {
      props.onPositionChange(props.index, "inbetween");
    } else {
      props.onPositionChange(props.index, "below");
    }
  }, [hasHitTop, hasHitBottom, props.onPositionChange, props.isFixed]);

  return (
    <div
      ref={ref}
      className="slide"
      style={{
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100 - props.index,
      }}
    >
      {props.children}
    </div>
  );
}

function Slides(props: { children: React.ReactNode }) {
  const [positions, setPositions] = useState<Array<Position>>([]);

  const onPositionChange = useCallback(
    (index: number, position: Position) => {
      setPositions((positions) => {
        const newPositions = [...positions];
        newPositions[index] = position;
        return newPositions;
      });
    },
    [setPositions],
  );

  console.log(positions);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {React.Children.map(props.children, (child, index) => (
        <>
          {index > 0 && positions[index - 1] === "inbetween" && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50 - index,
              }}
            >
              {child}
            </div>
          )}
          <Slide index={index} key={index} onPositionChange={onPositionChange}>
            {child}
          </Slide>
        </>
      ))}
    </div>
  );
}

export default function Homepage() {
  return (
    <>
      <Lead />
      <PerfectGrip />
      <ColorTags />
      <Slides>
        <Apex />
        <GrindRange />
        <MoreOutput />
        <PreciseAdjustment />
      </Slides>
      <Features />
    </>
  );
}

"use client";

import Lead from "@/components/Lead/Lead";
import PerfectGrip from "@/components/PerfectGrip/PerfectGrip";
import ColorTags from "@/components/ColorTags/ColorTags";
import Apex from "@/components/Apex/Apex";
import GrindRange from "@/components/GrindRange/GrindRange";
import MoreOutput from "@/components/MoreOutput/MoreOutput";
import PreciseAdjustment from "@/components/PreciseAdjustment/PreciseAdjustment";
import Features from "@/components/Features/Features";
import React, { useCallback, useEffect, useRef, useState } from "react";

type Position = "below" | "inbetween" | "above";

type TrackPosition = "top" | "bottom" | "left" | "right";
type ViewportEdge = "top" | "bottom" | "left" | "right";
const useElementPosition = (
  elementRef: RefObject<HTMLElement>,
  track: TrackPosition = "bottom",
  viewportEdge: ViewportEdge = "bottom",
): boolean => {
  const [isElementAboveEdge, setIsElementAboveEdge] = useState<boolean>(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { top, bottom, left, right } = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        let position: number;
        let edge: number;

        switch (track) {
          case "top":
            position = top;
            break;
          case "bottom":
            position = bottom;
            break;
          case "left":
            position = left;
            break;
          case "right":
            position = right;
            break;
          default:
            position = bottom;
        }

        switch (viewportEdge) {
          case "top":
            edge = 0;
            break;
          case "bottom":
            edge = viewportHeight;
            break;
          case "left":
            edge = 0;
            break;
          case "right":
            edge = viewportWidth;
            break;
          default:
            edge = viewportHeight;
        }

        if (track === "top" || track === "left") {
          setIsElementAboveEdge(position < edge);
        } else if (track === "bottom" || track === "right") {
          setIsElementAboveEdge(position > edge);
        }
      },
      {
        root: null, // observe relative to the viewport
        threshold: [0], // trigger when any part is in view
      },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, track, viewportEdge]);

  return isElementAboveEdge;
};

function Slide(props: {
  children: React.ReactNode;
  index: number;
  onPositionChange: (index: number, value: Position) => void;
  isFixed: boolean;
}) {
  const ref = useRef(null);
  const hasHitBottom = useElementPosition(ref, "bottom", "bottom");
  const hasHitTop = useElementPosition(ref, "top", "bottom");

  console.log({ index: props.index, hasHitTop, hasHitBottom });

  useEffect(() => {
    if (props.isFixed) {
      return;
    }
    if (hasHitBottom) {
      props.onPositionChange(props.index, "above");
    } else {
      props.onPositionChange(props.index, "below");
    }
    // if (!hasHitBottom && !hasHitTop) {
    //   props.onPositionChange(props.index, "below");
    // } else if (hasHitBottom) {
    //   props.onPositionChange(props.index, "above");
    // } else if (hasHitTop) {
    //   props.onPositionChange(props.index, "inbetween");
    // }
  }, [hasHitTop, hasHitBottom, props.onPositionChange, props.isFixed]);

  return (
    <div
      ref={ref}
      className="slide"
      style={{
        position: props.isFixed ? "fixed" : "relative",
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

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {React.Children.map(props.children, (child, index) => (
        <>
          <Slide
            // isFixed={index > 0 && positions[index - 1] === "inbetween"}
            isFixed={false}
            index={index}
            key={index}
            onPositionChange={onPositionChange}
          >
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

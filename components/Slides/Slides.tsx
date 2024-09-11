"use client";

import useElementVisibility, { Position } from "@/utils/useElementVisibility";
import React, { useRef, useEffect, useState, useCallback } from "react";

function Slide(props: {
  children: React.ReactNode;
  index: number;
  onPositionChange: (index: number, value: Position) => void;
}) {
  const ref = useRef(null);
  const visibiility = useElementVisibility(ref);

  useEffect(() => {
    props.onPositionChange(props.index, visibiility);
  }, [visibiility, props.onPositionChange]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99 - props.index,
      }}
    >
      {props.children}
    </div>
  );
}

export default function Slides(props: { children: React.ReactNode }) {
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
          <Slide index={index} key={index} onPositionChange={onPositionChange}>
            {child}
          </Slide>
          {index > 0 && positions[index - 1] === "leaving" && (
            <div
              style={{
                position: "fixed",
                overflow: "hidden",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 99 - index,
              }}
            >
              {child}
            </div>
          )}
        </>
      ))}
    </div>
  );
}

import React from "react";

export default function Reveal(props: {
  start: number;
  end: number;
  progress: number;
  children: React.ReactNode;
  className?: string;
}) {
  const normalizedProgress =
    (props.progress - props.start) / (props.end - props.start);
  const words = React.Children.toArray(props.children).flatMap((c) =>
    typeof c === "string" ? c.split(" ") : [c],
  );

  return words.map((child, index) => (
    <span
      key={index}
      className={
        (index + 1) / words.length < normalizedProgress
          ? props.className
          : undefined
      }
    >
      {child}
      {index < words.length && !startsWithPunctuation(words[index + 1]) && (
        <> </>
      )}
    </span>
  ));
}

function startsWithPunctuation(word: any) {
  return typeof word === "string" && (word[0] === "." || word[0] === ",");
}

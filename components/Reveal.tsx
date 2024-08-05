export default function Reveal(props: {
  start: number;
  end: number;
  progress: number;
  children: string;
  className?: string;
}) {
  const words = props.children.split(" ");
  const total = words.length;

  const normalizedProgress =
    (props.progress - props.start) / (props.end - props.start);

  return words.map((word, index) => (
    <span
      className={
        (index + 1) / total < normalizedProgress ? props.className : undefined
      }
    >
      {index > 0 && <> </>}
      {word}
    </span>
  ));
}

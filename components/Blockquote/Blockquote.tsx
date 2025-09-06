import { medium } from "@/utils/medium";
import styles from "./Blockquote.module.css";
import classNames from "classnames";

export default function Blockquote(props: {
  title?: string;
  children: React.ReactNode;
  type?: "info";
  className?: string;
}) {
  return (
    <blockquote
      className={classNames(
        styles.blockquote,
        props.type && styles[props.type],
        props.className,
      )}
    >
      {props.title && <h3 className={medium.className}>{props.title}</h3>}
      {props.children}
    </blockquote>
  );
}

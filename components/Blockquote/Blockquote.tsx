import { medium } from "@/utils/medium";
import styles from "./Blockquote.module.css";

export default function Blockquote(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className={styles.blockquote}>
      <h3 className={medium.className}>{props.title}</h3>
      {props.children}
    </blockquote>
  );
}

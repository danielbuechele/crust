import localFont from "next/font/local";
import styles from "./Blockquote.module.css";

const medium = localFont({
  src: "../../public/basiercircle-medium-webfont.woff2",
});

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

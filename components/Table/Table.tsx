import clsx from "clsx";
import styles from "./Table.module.css";
import localFont from "next/font/local";

const medium = localFont({
  src: "../../public/basiercircle-medium-webfont.woff2",
});

export function Row(props: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.row}>
      <h2 className={clsx(medium, styles.sectionTitle)}>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default function Table({ children }: { children: React.ReactNode }) {
  return <section className={styles.grid}>{children}</section>;
}

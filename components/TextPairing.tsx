import styles from "./TextPairing.module.css";
import localFont from "next/font/local";
import clsx from "clsx";

const ppRegular = localFont({ src: "../public/PPEditorialNew-Regular.woff2" });

export default function TextPairing({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) {
  return (
    <div className={styles.root}>
      <h3 className={clsx(styles.heading, ppRegular.className)}>{heading}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

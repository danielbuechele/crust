import styles from "./TextPairing.module.css";
import localFont from "next/font/local";
import clsx from "clsx";

const ppRegular = localFont({
  src: "../../public/PPEditorialNew-Regular.woff2",
});

export default function TextPairing({
  children,
  heading,
  align = "left",
}: {
  children: React.ReactNode;
  heading: string;
  align?: "left" | "center";
}) {
  return (
    <div className={styles.root}>
      <h3
        className={clsx(
          styles.heading,
          ppRegular.className,
          align === "center" && styles.center
        )}
      >
        {heading}
      </h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

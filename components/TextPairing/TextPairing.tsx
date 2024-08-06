import styles from "./TextPairing.module.css";
import localFont from "next/font/local";
import clsx from "clsx";

const ppRegular = localFont({
  src: "../../public/PPEditorialNew-Regular.woff2",
});

export default function TextPairing({
  children,
  heading,
  variant,
  align = "left",
  className,
}: {
  children: React.ReactNode;
  heading: string;
  variant?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        styles.root,
        className,
        variant === "dark" ? styles.dark : undefined
      )}
    >
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

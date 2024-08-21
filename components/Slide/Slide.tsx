import clsx from "clsx";
import styles from "./Slide.module.css";

export default function Slide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx(styles.slide, className)}>{children}</section>
  );
}

import clsx from "clsx";
import styles from "./Wrapper.module.css";

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx(styles.wrapper, className)}>{children}</section>
  );
}

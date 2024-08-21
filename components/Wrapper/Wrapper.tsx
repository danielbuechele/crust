import clsx from "clsx";
import styles from "./Wrapper.module.css";

export default function Wrapper({
  children,
  className,
  paddingTop,
}: {
  children: React.ReactNode;
  className?: string;
  paddingTop?: boolean;
}) {
  return (
    <section
      className={clsx(
        styles.wrapper,
        className,
        paddingTop && styles.paddingTop
      )}
    >
      {children}
    </section>
  );
}

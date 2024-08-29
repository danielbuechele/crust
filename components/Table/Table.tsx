import clsx from "clsx";
import styles from "./Table.module.css";
import { medium } from "@/utils/medium";

export function Row(props: {
  title: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  smallTitle?: boolean;
  noBorderTop?: boolean;
}) {
  return (
    <div
      className={clsx(
        props.className,
        styles.row,
        props.noBorderTop && styles.noBorderTop,
        props.smallTitle && styles.smallTitleRow,
      )}
    >
      <div
        className={clsx(
          !props.smallTitle && medium.className,
          styles.sectionTitle,
          props.smallTitle && styles.smallTitle,
        )}
      >
        {props.title}
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default function Table({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={clsx(styles.grid, className)}>{children}</section>;
}

import clsx from "clsx";
import styles from "./PrimaryButton.module.css";
import Link from "next/link";

export default function PrimaryButton(props: {
  href: string;
  disabled?: boolean;
  className?: string;
  variant?: "light" | "dark";
  width?: number;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={props.disabled ? "" : (props.href ?? "")}
      style={{ width: props.width ?? 128 }}
      className={clsx(
        props.className,
        styles.button,
        props.variant === "dark" ? styles.dark : undefined,
        props.disabled ? styles.disabled : undefined
      )}
    >
      {props.children}
      <div className={styles.icon}>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.39205 10.6023L5.36932 9.59091L8.92045 6.03977H0V4.5625H8.92045L5.36932 1.01705L6.39205 0L11.6932 5.30114L6.39205 10.6023Z"
            fill="white"
          />
        </svg>
      </div>
    </Link>
  );
}

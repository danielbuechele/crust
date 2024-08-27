import clsx from "clsx";
import styles from "./RoundButton.module.css";

export default function RoundButton(props: {
  onClick?: React.MouseEventHandler<any>;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      className={clsx(
        styles.button,
        props.className,
        props.disabled && styles.buttonDisabled,
      )}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

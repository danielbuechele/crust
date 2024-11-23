"use client";

import clsx from "clsx";
import styles from "./RoundButton.module.css";
import { useState } from "react";

export default function RoundButton(props: {
  onClick?: React.MouseEventHandler<any>;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  return (
    <button
      className={clsx(
        styles.button,
        props.className,
        props.disabled && styles.buttonDisabled,
        loading && styles.loading,
      )}
      onClick={async (e) => {
        setLoading(true);
        if (props.onClick) {
          await props.onClick(e);
        }
        setLoading(false);
      }}
      disabled={props.disabled || loading}
    >
      {props.children}
    </button>
  );
}

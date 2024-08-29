import React from "react";
import styles from "./Legalese.module.css";
import { medium } from "@/utils/medium";
import clsx from "clsx";

export default function Legalese(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx(styles.root, medium.variable, props.className)}>
      {props.children}
    </div>
  );
}

import clsx from "clsx";
import { forwardRef, ForwardedRef } from "react";
import styles from "./Wrapper.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  paddingTop?: boolean;
};

export default forwardRef(function Wrapper(props: Props, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.wrapper,
        props.className,
        props.paddingTop && styles.paddingTop,
      )}
    >
      {props.children}
    </div>
  );
});

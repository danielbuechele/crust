import * as Accordion from "@radix-ui/react-accordion";
import { useId } from "react";
import localFont from "next/font/local";
import styles from "./Questions.module.css";
import { clsx } from "clsx";

const medium = localFont({
  src: "../../public/basiercircle-medium-webfont.woff2",
});

export function Question(props: {
  children: React.ReactNode;
  question: string;
}) {
  const id = useId();
  return (
    <Accordion.Item className={styles.question} value={id}>
      <Accordion.Trigger asChild>
        <Accordion.Header className={styles.questionText}>
          <span className={medium.className}>{props.question}</span>
          <span className={styles.plus} />
        </Accordion.Header>
      </Accordion.Trigger>
      <Accordion.Content className={styles.questionContent}>
        <div className={styles.answer}>{props.children}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function Questions({
  borders,
  children,
}: {
  children: React.ReactNode;
  borders?: boolean;
}) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={clsx(borders && styles.borders)}
    >
      {children}
    </Accordion.Root>
  );
}

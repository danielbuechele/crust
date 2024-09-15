import styles from "./page.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";

export default function Contact(props: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader
        title="Contact"
        lead="Whether you have questions, feedback, or simply want to say hello, this is the place to reach us."
        byline={
          <>
            Please also check our 
            <Link href="faq">frequently asked questions</Link>.
          </>
        }
      />
      <div className={styles.container}>
        <div className={styles.left}>
          Please allow at least 48hrs for a reply to your email or longer if on
          the weekend.
          <div className={styles.small}>
            All form fields are required to send a message.
          </div>
        </div>
        <div className={styles.right}>{props.children}</div>
      </div>
    </>
  );
}

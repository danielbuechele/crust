import styles from "./PageHeader.module.css";

export default function PageHeader({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.lead}>{children}</p>
    </div>
  );
}

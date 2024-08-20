import styles from "./PageHeader.module.css";

export default function PageHeader({
  title,
  lead,
  byline,
}: {
  title: string;
  lead?: React.ReactNode;
  byline?: React.ReactNode;
}) {
  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
      {byline && <p className={styles.byline}>{byline}</p>}
    </div>
  );
}

import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function About() {
  return (
    <Wrapper>
      <PageHeader title="About">
        We are a team of designers and engineers, coming together with a shared
        vision: to revolutionize the way people experience spices in their
        kitchens.
      </PageHeader>
      <div className={styles.bento}>
        <div className={styles.bento1}>1</div>
        <div className={styles.bento2}>2</div>
        <div className={styles.bento3}>3</div>
        <div className={styles.bento4}>4</div>
      </div>
    </Wrapper>
  );
}

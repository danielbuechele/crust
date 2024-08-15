import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import Table, { Row } from "@/components/Table/Table";

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
      <Table className={styles.table}>
        <Row title={<h3>Our Story and Values</h3>}>
          <p className={styles.lead}>
            Our journey began in a small kitchen, where friends shared a passion
            for cooking. We noticed that while we had access to a myriad of
            spices and herbs, the tools we used to grind them were often
            overlooked. We felt that something as fundamental as a pepper and
            salt grinder deserved the same level of attention and craftsmanship
            as any other kitchen tool.
          </p>
          <p className={styles.lead}>
            Driven by this idea, we embarked on a mission to create the perfect
            grinder—one that combines functionality, durability, and elegance.
          </p>
          <p className={styles.lead}>
            We believe in creating products that stand the test of time,
            meticulously crafting each grinder with high-quality materials and
            precision engineering for exceptional performance and durability.
            Committed to minimizing environmental impact, our refillable,
            long-lasting grinders reduce waste and use sustainably sourced
            materials and eco-friendly manufacturing processes. Designed to be
            both functional and aesthetically pleasing, our grinders are easy to
            use and maintain, adding a touch of elegance to any kitchen.
          </p>
          <p className={styles.lead}>
            Our love for cooking drives us to create the best possible tools for
            the kitchen. We believe that great food starts with the right
            ingredients and the right tools, and we are dedicated to helping our
            customers elevate their culinary creations.
          </p>
        </Row>

        <Row title="Designed in">California</Row>
        <Row title="Manufactured in">Germany</Row>
        <Row title="Ecological">
          <p>
            Outstanding green credentials with durable, sustainable stainless
            steel.
          </p>
        </Row>
        <Row title="Economical">
          <p>
            High-quality and durable, made in Germany, and fully repairable.
          </p>
        </Row>
        <Row title="Functional">
          <p>
            Easy to use with a unique grip, offering precise and excellent
            grinding results.
          </p>
        </Row>
        <Row title="Aesthetical">
          <p>
            Timeless, clean design with no fussy details, instantly
            re-cognizable for its high quality.
          </p>
        </Row>
      </Table>
    </Wrapper>
  );
}

import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import Table, { Row } from "@/components/Table/Table";
import localFont from "next/font/local";

const medium = localFont({
  src: "../../../public/basiercircle-medium-webfont.woff2",
});

export default function About() {
  return (
    <Wrapper>
      <PageHeader title="About">
        We are a team of designers and engineers, coming together with a shared
        vision: to revolutionize the way people experience spices in their
        kitchens.
      </PageHeader>
      <Table className={styles.table}>
        <Row title="Our Story and Values">
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
          </p>
          <p className={styles.lead}>
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

        <Row title="Designed in" smallTitle>
          <p className={styles.content}>California</p>
        </Row>
        <Row title="Manufactured in" smallTitle>
          <p className={styles.content}>Germany</p>
        </Row>
        <Row title="Ecological" smallTitle>
          <p className={styles.content}>
            Outstanding green credentials with durable, sustainable stainless
            steel.
          </p>
        </Row>
        <Row title="Economical" smallTitle>
          <p className={styles.content}>
            High-quality and durable, made in Germany, and fully repairable.
          </p>
        </Row>
        <Row title="Functional" smallTitle>
          <p className={styles.content}>
            Easy to use with a unique grip, offering precise and excellent
            grinding results.
          </p>
        </Row>
        <Row title="Aesthetical" smallTitle>
          <p className={styles.content}>
            Timeless, clean design with no fussy details, instantly
            re-cognizable for its high quality.
          </p>
        </Row>
      </Table>
    </Wrapper>
  );
}

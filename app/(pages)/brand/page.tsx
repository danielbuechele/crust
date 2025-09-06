import Blockquote from "@/components/Blockquote/Blockquote";
import styles from "./page.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import Table, { Row } from "@/components/Table/Table";
import classNames from "classnames";
import Logo from "@/components/Logo";

export default function Brand() {
  return (
    <>
      <PageHeader
        title="Brand"
        lead="Guidelines for consistently and professionally presenting the Crust brand."
      />
      <Table>
        <Row title="Name">
          <p className={styles.lead}>
            The brand name "Crust" derives from the surface of a spice corn,
            representing the highest quality. It signifies the outermost layer
            where the most intense and concentrated flavors reside, embodying
            the pinnacle of spice craftsmanship. "Crust" stands for premium
            quality, emphasizing authenticity, boldness, and the natural
            excellence found in the purest, most flavorful part of the spice.
          </p>
        </Row>
        <Row title="Usage">
          <p className={styles.lead}>
            Ensure ample space around Crust assets. Whether you size them up or
            down, allow room for them to breathe. They should never appear
            cramped or cluttered.
          </p>
          <Blockquote type="info" className={styles.blockquote}>
            Please remember that the provided graphics are proprietary and
            protected under intellectual property laws. Do not modify these
            files, or use them in any way that suggests a relationship,
            affiliation, or endorsement by Crust of your product, service, or
            business. These graphics should not be incorporated into your
            product, business, or service name, nor combined with any other
            graphics without written permission from Crust. If you have any
            questions, feel free to reach out.
          </Blockquote>
        </Row>
        <Row title="Crust Wordmark">
          <p className={styles.lead}>
            Whenever space allows, the Crust wordmark should be used in all
            references to Crust. Monochrome versions are preferred, using the
            brand colors listed below.
          </p>
          <div className={styles.row}>
            <div
              className={classNames(styles.box, styles.center, styles.orange)}
            >
              <Logo />
            </div>
            <div
              className={classNames(styles.box, styles.center, styles.light)}
            >
              <Logo />
            </div>
            <div className={classNames(styles.box, styles.center, styles.dark)}>
              <Logo />
            </div>
          </div>
        </Row>
        <Row title="Colors">
          <p className={styles.lead}>
            Crust’s primary brand color is orange, which works well against both
            light and dark backgrounds. For monochrome wordmark usage, the
            following light and dark accents are preferred, with the brand color
            typically reserved for highlights.
          </p>
          <div className={styles.row}>
            <div className={classNames(styles.box, styles.orange)}>
              <strong>Crust Orange</strong>
              <span className={styles.text}>RGB 252, 76, 2</span>
              <span className={styles.text}>#FC4C02</span>
            </div>
            <div className={classNames(styles.box, styles.light)}>
              Crust Light
              <span className={styles.text}>RGB 255, 255, 255</span>
              <span className={styles.text}>#FFFFFF</span>
            </div>
            <div className={classNames(styles.box, styles.dark)}>
              <strong>Crust Dark</strong>
              <span className={styles.text}>RBG 14, 15, 18</span>
              <span className={styles.text}>#0E0F12</span>
            </div>
          </div>
        </Row>
      </Table>
    </>
  );
}

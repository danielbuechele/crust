import Image from "next/image";
import TextPairing from "../TextPairing/TextPairing";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./PreciseAdjustment.module.css";
import adjustment from "./adjustment.png";

export default function PreciseAdjustment() {
  return (
    <section className={styles.root}>
      <Wrapper>
        <TextPairing
          className={styles.text}
          heading="Precise Adjustment"
          variant="dark"
        >
          Designed for precision and cleanliness, this unique feature ensures
          spices only land where they should — in your dishes, not on the table.
          Effortlessly adjust from fine to coarse, and enjoy consistent, perfect
          grinds every time.
        </TextPairing>
        <div className={styles.img}>
          <Image
            src={adjustment}
            alt="Precise Adjustment"
            objectFit="contain"
            objectPosition="center right"
            sizes="40vw"
            fill
          />
        </div>
      </Wrapper>
    </section>
  );
}

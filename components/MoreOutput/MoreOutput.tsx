import Image from "next/image";
import TextPairing from "../TextPairing/TextPairing";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./MoreOutput.module.css";
import output from "./output.png";

export default function MoreOutput() {
  return (
    <section className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <TextPairing heading="Fewer Cranks, more&nbsp;Output" variant="dark">
          Engineered for speed, this mill delivers pepper faster than top-rated
          competitors – get your desired amount in just 5 easy cranks instead of
          50.
        </TextPairing>
        <div className={styles.img}>
          <Image
            src={output}
            alt="More output"
            objectFit="cover"
            objectPosition="bottom left"
            fill
          />
        </div>
      </Wrapper>
    </section>
  );
}

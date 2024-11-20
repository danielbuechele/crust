"use client";

import Image from "next/image";
import TextPairing from "../TextPairing/TextPairing";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./MoreOutput.module.css";
import output from "./output.png";

export default function MoreOutput() {
  return (
    <section className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <TextPairing
          heading="Less Effort, Greater&nbsp;Output"
          variant="dark"
          className={styles.text}
        >
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
            sizes="60vw"
            quality={90}
          />
        </div>
      </Wrapper>
    </section>
  );
}

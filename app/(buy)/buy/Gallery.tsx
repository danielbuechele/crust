import Image from "next/image";
import styles from "./Gallery.module.css";

import pepper from "./pepper.png";

export default function Gallery() {
  return (
    <div className={styles.root}>
      <Image
        src={pepper}
        alt="Pepper mill"
        fill
        sizes="60vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

"use client";

import Image from "next/image";
import TextPairing from "../TextPairing/TextPairing";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./MoreOutput.module.css";
import output from "./output.png";
import thumbnail from "./thumbnail.jpg";
import { useRef, useState } from "react";
import clsx from "clsx";

export default function MoreOutput() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <section className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <TextPairing
          heading="Less Effort, Greater&nbsp;Output"
          variant="dark"
          className={styles.text}
        >
          <div>
            Engineered for speed, this mill delivers pepper faster than
            top-rated competitors – get your desired amount in just 5 easy
            cranks instead of 50.
            <div className={styles.placeholder}>
              <div className={clsx(styles.video, playing && styles.playing)}>
                <video
                  ref={ref}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  src="/video.mov"
                  poster={thumbnail.src}
                  playsInline
                  controls={playing}
                  onClick={() => {
                    if (!playing) {
                      ref.current?.play();
                    }
                  }}
                />
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_408_304)">
                    <path
                      d="M15.9976 31.9952C24.8343 31.9952 32 24.8293 32 15.9976C32 7.16083 24.8343 0 15.9976 0C7.16575 0 0 7.16083 0 15.9976C0 24.8293 7.16575 31.9952 15.9976 31.9952ZM15.9976 29.9262C8.29808 29.9262 2.06878 23.697 2.06878 15.9976C2.06878 8.29313 8.29808 2.06384 15.9976 2.06384C23.7019 2.06384 29.9313 8.29313 29.9313 15.9976C29.9313 23.697 23.7019 29.9262 15.9976 29.9262Z"
                      fill="white"
                      fill-opacity="0.85"
                    />
                    <path
                      d="M12.9654 22.2391L22.0709 16.7995C22.6913 16.4365 22.6853 15.6004 22.0709 15.2263L12.9654 9.76694C12.3388 9.39786 11.5335 9.69101 11.5335 10.3836V21.6175C11.5335 22.304 12.2998 22.6363 12.9654 22.2391Z"
                      fill="white"
                      fill-opacity="0.85"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_408_304">
                      <rect width="32" height="32.011" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
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

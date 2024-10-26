"use client";

import Image from "next/image";
import styles from "./Gallery.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pepperImg from "./pepper.png";
import saltImg from "./salt.png";
import packagingImg from "./packaging.png";
import bothImg from "./both.png";
import useSessionStorageState from "use-session-storage-state";
import { gql, useQuery } from "@apollo/client";
import {
  ProductFragment,
  GalleryQueryQuery as GalleryQueryT,
} from "@/utils/storefront";
import Slider from "react-slick";

const GalleryQuery = gql`
  query GalleryQuery($cartId: ID!) {
    cart(id: $cartId) {
      lines(first: 2) {
        nodes {
          id
          merchandise {
            ... on ProductVariant {
              id
            }
          }
        }
      }
    }
  }
`;

export default function Gallery({
  salt,
  pepper,
}: {
  salt?: ProductFragment | null;
  pepper?: ProductFragment | null;
}) {
  const [cartId] = useSessionStorageState<string | null>("cartId", {
    defaultValue: null,
  });

  const { data } = useQuery<GalleryQueryT>(GalleryQuery, {
    variables: { cartId },
    skip: !cartId,
  });

  const hasSalt = data?.cart?.lines.nodes.some(
    (line) => line.merchandise.id === salt?.variants?.nodes?.at(0)?.id,
  );
  const hasPepper = data?.cart?.lines.nodes.some(
    (line) => line.merchandise.id === pepper?.variants?.nodes?.at(0)?.id,
  );

  let img = pepperImg;
  let alt = "Pepper mill";
  if (hasSalt && hasPepper) {
    img = bothImg;
    alt = "Salt and pepper mills";
  } else if (hasSalt) {
    img = saltImg;
    alt = "Salt mill";
  }

  return (
    <div className={styles.root}>
      <Slider
        arrows={false}
        dots={true}
        dotsClass={styles.dots}
        className={styles.slider}
        pauseOnDotsHover={false}
        pauseOnFocus={false}
        pauseOnHover={false}
        autoplay
        autoplaySpeed={5000}
      >
        <div className={styles.slide}>
          <div className={styles.slideInner}>
            <Image
              src={img}
              alt={alt}
              fill
              sizes="(max-width: 1023px) 100vw, 60vw"
              style={{ objectFit: "cover" }}
              quality={90}
            />
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.slideInner}>
            <Image
              src={packagingImg}
              alt="Packaging"
              fill
              sizes="(max-width: 1023px) 100vw, 60vw"
              style={{ objectFit: "cover" }}
              quality={90}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

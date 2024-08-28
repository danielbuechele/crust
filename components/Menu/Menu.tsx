"use client";

import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import Logo from "../Logo";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import { clsx } from "clsx";

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 0);
    }, 16);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrolled]);

  return (
    <div className={clsx(styles.root, scrolled && styles.scrolled)}>
      <Wrapper className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>
        <PrimaryButton href="/buy">Buy</PrimaryButton>
      </Wrapper>
    </div>
  );
}

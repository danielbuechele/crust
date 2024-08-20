import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import Logo from "../Logo";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.root}>
      <Wrapper className={styles.nav}>
        <Link href="/">
          <Logo />
        </Link>
        <PrimaryButton href="/buy">Buy</PrimaryButton>
      </Wrapper>
    </div>
  );
}

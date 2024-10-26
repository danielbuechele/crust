import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import styles from "./page.module.css";

export default function Guide(props: { children: React.ReactNode }) {
  return (
    <div>
      <PageHeader
        title="Pepper and Salt
        Buying Guide"
        lead="Our guide to pepper and salt types and flavors to elevate your cooking experience."
      />

      <div>
        <Link href="/guide/pepper">Pepper Buying Guide</Link>
        <Link href="/guide/salt">Salt Buying Guide</Link>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

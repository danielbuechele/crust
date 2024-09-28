"use client";

import styles from "./layout.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink(props: {
  href: string;
  children: React.ReactNode;
  alternativeHrefs?: string[];
}) {
  const pathname = usePathname();
  const isActive =
    pathname === props.href || props.alternativeHrefs?.includes(pathname);
  return (
    <Link href={props.href} className={isActive ? styles.active : undefined}>
      {props.children}
    </Link>
  );
}

export default function Manual(props: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader
        title="User Manual"
        byline={
          <>
            Please also check our 
            <Link href="/faq">frequently asked questions</Link>.
          </>
        }
        lead="Everything you need to know about our Mills."
      />

      <div className={styles.layout}>
        <ul className={styles.sidebar}>
          <li>
            <NavLink href="/manual" alternativeHrefs={["/manual/filling"]}>
              Filling Mill
            </NavLink>
          </li>
          <li>
            <NavLink href="/manual/settings">Grind Settings</NavLink>
          </li>
          <li>
            <NavLink href="/manual/grinding">Grinding</NavLink>
          </li>
          <li>
            <NavLink href="/manual/cleaning">Cleaning</NavLink>
          </li>
          <li>
            <NavLink href="/manual/assembly">Disassembly & Assembly</NavLink>
          </li>
          <li>
            <NavLink href="/manual/description">Description</NavLink>
          </li>
        </ul>
        <section className={styles.content}>{props.children}</section>
      </div>
    </>
  );
}

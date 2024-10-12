"use client";

import styles from "./layout.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { medium } from "@/utils/medium";
import clsx from "clsx";
import { useState } from "react";

function NavLink(props: {
  href: string;
  children: React.ReactNode;
  alternativeHrefs?: string[];
}) {
  const pathname = usePathname();
  const isActive =
    pathname === props.href || props.alternativeHrefs?.includes(pathname);
  return (
    <Link
      href={props.href}
      className={clsx(isActive && [styles.active, medium.className])}
    >
      {props.children}
      {isActive && (
        <svg
          className={styles.activeIcon}
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.4304 13.1675V2.65896L10.4702 6.71151L11.4673 5.72714L5.72727 -0.000133514L0 5.72714L0.971591 6.71151L5.02415 2.65896V13.1675H6.4304Z"
            fill="#8E8E8E"
          />
        </svg>
      )}
    </Link>
  );
}

const ROUTES = {
  "/manual": "Filling Mill",
  "/manual/settings": "Grind Settings",
  "/manual/grinding": "Grinding",
  "/manual/cleaning": "Cleaning",
  "/manual/assembly": "Disassembly & Assembly",
  "/manual/description": "Description",
};

export default function Manual(props: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

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
        <ul
          className={clsx(styles.sidebar, visible && styles.visibleMobile)}
          onClick={() => setVisible(false)}
        >
          {Object.entries(ROUTES).map(([href, title], i) => (
            <li key={href}>
              <NavLink
                href={href}
                alternativeHrefs={i === 0 ? ["/manual"] : undefined}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className={clsx(styles.mobileNav, medium.className)}
          role="button"
          onClick={() => setVisible(true)}
        >
          {Object.entries(ROUTES).find(([k]) => k === pathname)?.[1] ??
            Object.values(ROUTES)[0]}
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4304 0V10.5085L10.4702 6.45597L11.4673 7.44034L5.72727 13.1676L0 7.44034L0.971591 6.45597L5.02415 10.5085V0H6.4304Z"
              fill="#8E8E8E"
            />
          </svg>
        </div>
        <section className={styles.content}>{props.children}</section>
      </div>
    </>
  );
}

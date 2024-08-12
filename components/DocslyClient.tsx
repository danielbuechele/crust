"use client";
import Docsly from "@docsly/react";
import "@docsly/react/styles.css";
import { usePathname } from "next/navigation";

export default function DocslyClient() {
  const pathname = usePathname();
  return (
    <Docsly
      publicId="pk_Sb0jVy7Q84OI8YR0XBKHKlE5pOk7ePrwdCA3tBbOXtb7gTML"
      pathname={pathname}
    />
  );
}

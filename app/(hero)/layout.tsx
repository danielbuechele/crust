"use client";

import Footer from "@/components/Footer/Footer";
import Menu, { Variant } from "@/components/Menu/Menu";
import Head from "@/components/Head/Head";
import { useState } from "react";
import MenuContext from "@/components/Menu/MenuContext";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#E3E3E3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [variant, setVariant] = useState<Variant>("light2");

  return (
    <MenuContext.Provider value={{ setVariant, variant }}>
      <Menu />
      <Head />
      {children}
      <Footer />
    </MenuContext.Provider>
  );
}

"use client";

import Footer from "@/components/Footer/Footer";
import Menu, { Variant } from "@/components/Menu/Menu";
import Head from "@/components/Head/Head";
import { useState } from "react";
import MenuContext from "@/components/Menu/MenuContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [variant, setVariant] = useState<Variant>("transparent");

  return (
    <MenuContext.Provider value={{ setVariant, variant }}>
      <Menu />
      <Head />
      {children}
      <Footer />
    </MenuContext.Provider>
  );
}

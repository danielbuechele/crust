import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ApolloWrapper } from "../components/ApolloWrapper";
import { regular } from "@/utils/medium";

export const metadata: Metadata = {
  title: "Crust",
};

export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={regular.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}

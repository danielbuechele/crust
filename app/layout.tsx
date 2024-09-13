import type { Metadata } from "next";
import "./globals.css";
import { ApolloWrapper } from "../components/ApolloWrapper";
import { regular } from "@/utils/medium";

export const metadata: Metadata = {
  title: "Crust",
  themeColor: "#ff0000",
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

import Footer from "@/components/Footer/Footer";
import Head from "@/components/Head/Head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head />
      {children}
    </>
  );
}

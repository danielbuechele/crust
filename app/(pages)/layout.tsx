import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}

import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import Wrapper from "@/components/Wrapper/Wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}

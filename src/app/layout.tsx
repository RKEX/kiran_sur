import { ReactNode } from "react";
import "./globals.css";
import DesktopNavs from "@/components/Navs/DesktopNavs";
import MobileNavs from "@/components/Navs/MobileNavs";
import FooterComp from "@/components/FooterComp/FooterComp";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

type RootLayoutPropsType = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {/* Navigation */}
        <header>
          <section className="hidden md:block">
            <DesktopNavs />
          </section>
          <section className="md:hidden">
            <MobileNavs />
          </section>
        </header>

        {/* Main Content (grows to fill space) */}
        <main>{children}</main>
        {/* Sticky Footer at bottom */}
        <footer className="">
          <FooterComp />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;

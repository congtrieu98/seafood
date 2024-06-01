import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/frontend/header/header";
import Footer from "@/components/frontend/footer/footer";
import { CartGlobalProvider } from "@/lib/hooks/cartGlobalProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartGlobalProvider>
          <TooltipProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <Header />
              {
                children
              }
              <Footer />
            </ThemeProvider>
          </TooltipProvider>
        </CartGlobalProvider>
      </body>
    </html>
  );
}

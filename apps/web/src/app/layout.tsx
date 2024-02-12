import type {Metadata} from "next";
import {Bebas_Neue} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const font = Bebas_Neue({subsets: ["latin"], weight: ["400"]});

export const metadata: Metadata = {
  title: "FUBI",
  description: "More with less",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

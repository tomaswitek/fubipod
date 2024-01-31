import type {Metadata} from "next";
import {Bebas_Neue} from "next/font/google";
import "./globals.css";

const font = Bebas_Neue({subsets: ["latin"], weight: ["400"]});

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
      <body className={font.className}>{children}</body>
    </html>
  );
}

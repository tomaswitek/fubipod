import type {Metadata} from "next";
import {Bebas_Neue} from "next/font/google";
import "./globals.css";

const font = Bebas_Neue({subsets: ["latin"], weight: ["400"]});

export const metadata: Metadata = {
  title: "FUBI",
  description: "More with less",
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  const {children} = props;
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {BackspaceIcon} from "@heroicons/react/24/outline";

const inter = Inter({subsets: ["latin"]});

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
        <div
          style={{
            background:
              'url("https://fubipod.com/img/modely/12_09_2023_7247.jpg") no-repeat',
          }}
        >
          <Header />
          {children}
          <div
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));",
            }}
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}

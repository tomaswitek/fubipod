import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";
import {CookieConsent} from "@/components/CookieConsent";
import ReactGA from "react-ga4";

// TODO: replace with your GA measurement id
// ReactGA.initialize("your GA measurement id");

const font = localFont({
  src: [
    {
      path: "../fonts/BebasNeue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BebasNeue-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

// const font = Bebas_Neue({subsets: ["latin"], weight: ["400"]});

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
      <CookieConsent />
    </html>
  );
}

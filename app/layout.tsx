import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HireGo",
  description: "HireGO is your all-in-one Global People Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm_plex_sans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

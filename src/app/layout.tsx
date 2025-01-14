import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Condensed, Roboto } from "next/font/google";
import { Main } from "@/components/core/Main/Main";
import { Footer } from "@/components/shared/Footer";
import { Toaster } from "@/components/shared/Toaster";

const robotCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-roboto-condensed",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Syncity",
  description:
    "A team of independent consultants primarily focused on long-term projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotCondensed.variable} ${roboto.variable}`}>
      <body>
        <Main>
          {children}
          <Footer />
        </Main>
        <Toaster />
      </body>
    </html>
  );
}

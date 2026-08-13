import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "株式会社 金井工芸鋳造所｜仏具・美術工芸品の鋳造",
  description:
    "株式会社金井工芸鋳造所は、仏具をはじめ、美術工芸品の鋳物など、さまざまな鋳造品を製造しています。培ってきた鋳造技術と経験を活かし、確かなものづくりを続けています。",
  verification: {
    google: "aKbTLrGwRuohca_OYTDeF2s7er0F-IC-txjHMLnGliI",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

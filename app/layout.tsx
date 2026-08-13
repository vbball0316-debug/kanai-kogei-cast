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

export const metadata: Metadata = {
  title: "株式会社 金井工芸鋳造所｜仏具・建築関連の鋳物・鋳造",
  description:
    "株式会社金井工芸鋳造所は、仏具をはじめ、建築関連の鋳物など、さまざまな鋳造品を製造しています。培ってきた鋳造技術と経験を活かし、確かなものづくりを続けています。",
  applicationName: "株式会社 金井工芸鋳造所",
  verification: {
    google: "aKbTLrGwRuohca_OYTDeF2s7er0F-IC-txjHMLnGliI",
  },
  openGraph: {
    title: "株式会社 金井工芸鋳造所｜仏具・建築関連の鋳物・鋳造",
    description:
      "仏具をはじめ、建築関連の鋳物など、さまざまな鋳造品を製造しています。",
    url: "https://kanai-kogei-cast.vercel.app",
    siteName: "株式会社 金井工芸鋳造所",
    images: [
      {
        url: "https://kanai-kogei-cast.vercel.app/hero.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社 金井工芸鋳造所",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

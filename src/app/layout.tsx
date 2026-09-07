import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const barlow = localFont({
  variable: "--font-barlow",
  display: "swap",
  src: [
    { path: "../../public/fonts/barlow-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/barlow-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/barlow-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/barlow-700.woff2", weight: "700", style: "normal" },
  ],
});

const barlowCondensed = localFont({
  variable: "--font-barlow-condensed",
  display: "swap",
  src: [
    { path: "../../public/fonts/barlow-condensed-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/barlow-condensed-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/barlow-condensed-700.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Enterprise Knowledge Management for USSOCOM | Competitive Range Solutions",
  description:
    "Mission-ready enterprise knowledge management for U.S. Special Operations Command.",
  icons: {
    icon: "/icon-32.png",
    apple: "/icon-180.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}

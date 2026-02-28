import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GridBackground from "@/components/GridBackground";
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
  title: "WAR FUND — 100% of Creator Fees Fund Humanitarian Relief",
  description:
    "War Fund is a Solana token where 100% of dev wallet creator fees are donated to humanitarian organizations helping civilians affected by conflict.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GridBackground />
        <div className="scanlines" />
        {children}
      </body>
    </html>
  );
}

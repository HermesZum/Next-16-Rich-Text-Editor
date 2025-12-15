import React from "react";
import type { Metadata } from "next";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans: NextFontWithVariable = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono: NextFontWithVariable = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next 16 Rich Text Editor",
  description: "Next.js 16 modern WYSIWYG rich text editor based on TipTap and Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

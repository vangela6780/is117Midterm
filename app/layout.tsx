import type { Metadata } from "next";
import { Archivo, Jost } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display"
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${jost.variable}`}>{children}</body>
    </html>
  );
}
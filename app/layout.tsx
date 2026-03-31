import type { Metadata } from "next";
import { Archivo, Jost } from "next/font/google";
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
  title: "Thread & Trace: The Upcycling Revolution",
  description:
    "A Bauhaus-inspired digital museum about fast fashion waste, community impact, and the creative power of upcycling."
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
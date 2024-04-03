import type { Metadata } from "next";
import "./globals.css";
import { inter, playfair } from "@/utils/fonts";
import Link from "@/components/link";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Internet Wizard",
  description: "Powered by NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Header />
        {children}
        <Link />
      </body>
    </html>
  );
}

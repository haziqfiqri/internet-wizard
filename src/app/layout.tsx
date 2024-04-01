import type { Metadata } from "next";
import "./globals.css";
import { inter, playfair } from "@/utils/fonts";

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
      <body>{children}</body>
    </html>
  );
}

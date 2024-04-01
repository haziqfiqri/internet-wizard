import {
  Inter as FontInter,
  Playfair_Display as FontPlayfair,
} from "next/font/google";

export const playfair = FontPlayfair({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const inter = FontInter({
  subsets: ["latin"],
  variable: "--font-inter",
});

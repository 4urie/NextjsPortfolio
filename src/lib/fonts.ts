import { GeistMono } from "geist/font/mono";
import { Geist, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = Geist({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = GeistMono;

export const fontSerif = Source_Serif_4({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
});

// Display font (bryl-minimal design system): Geist Pixel Square, self-hosted.
// Pixel-role elements fall back to Geist Mono in uppercase.
export const fontPixel = localFont({
  src: "../assets/fonts/geist-pixel.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-pixel",
});

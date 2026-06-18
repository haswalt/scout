import type { Metadata } from "next";
import { Manrope, Lora } from "next/font/google";
import "./global.css";
import { ViewTransition } from "react";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scout | Discover your next neighbourhood",
  description:
    "Enter any UK postcode and get an instant, friendly profile of the area — schools, transport, prices and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${lora.variable}`}>
      <body>
        <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}

import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

// const geistMono = Montserrat_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Ori Ratelade | Portfolio",
  description: "Portfolio 2025 Ori Ratelade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}

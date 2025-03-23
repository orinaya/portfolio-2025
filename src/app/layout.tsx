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
  description:
    "Bienvenue sur le portfolio d'une développeuse à la recherche d'une alternance. Découvrez mes compétences et mes projets et peut-être me proposerez-vous une opportunité d'alternance en Développement Full-Stack !",
  keywords: "Portfolio, Alternance, Développement Web, Front-end, Back-end",
};

<title>Oriane Frouin | Portfolio</title>;

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

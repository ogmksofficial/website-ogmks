import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const franklinGothic = localFont({
  src: [
    {
      path: "./fonts/FranklinGothicHeavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-franklin-src",
});

const metropolis = localFont({
  src: [
    {
      path: "./fonts/Metropolis-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Metropolis-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Metropolis-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-metropolis-src",
});

export const metadata: Metadata = {
  title: "OG.MK$ | Trap, Drill & Lifestyle",
  description: "A vivência periférica em forma de som. Do Jardim Brasil pro mundo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${franklinGothic.variable} ${metropolis.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-black text-white antialiased font-metropolis selection:bg-brand-red selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
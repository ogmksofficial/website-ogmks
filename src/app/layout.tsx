import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import SchemaMarkup from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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

const SITE_URL = "https://www.ogmks.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "OG.MK$ | Trap, Drill & Lifestyle",
  description: "A vivência periférica em forma de som. Do Jardim Brasil pro mundo!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "ZmkMHoNO7yoWNE8MLsJ7e967EvyChOvagOi_jZ8MLY8",
  },
  openGraph: {
    title: "OG.MK$ | Trap, Drill & Lifestyle",
    description: "A vivência periférica em forma de som. Do Jardim Brasil pro mundo!",
    url: SITE_URL,
    siteName: "OG.MK$",
    images: [
      {
        url: `${SITE_URL}/assets/icons/hero-whatsapp-image-og-mks.png`,
        width: 1200,
        height: 630,
        alt: "OG.MK$ | Trap, Drill & Lifestyle",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG.MK$ | Trap, Drill & Lifestyle",
    description: "A vivência periférica em forma de som. Do Jardim Brasil pro mundo!",
    images: [`${SITE_URL}/assets/icons/hero-whatsapp-image-og-mks.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: Readonly<React.ReactNode>;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${franklinGothic.variable} ${metropolis.variable}`}
      suppressHydrationWarning
    >
      <head>
        <SchemaMarkup />
      </head>
      <body
        className="bg-black text-white antialiased font-metropolis selection:bg-brand-red selection:text-white"
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
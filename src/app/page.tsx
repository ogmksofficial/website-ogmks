"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ReleaseSection from "@/components/ReleaseSection";
import VideoSection from "@/components/VideoSection";
import AgendaSection from "@/components/AgendaSection";
import MerchSection from "@/components/MerchSection";
import PresskitSection from "@/components/PresskitSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Language } from "@/data/translations";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>("PT");

  return (
    <main className="relative min-h-screen w-full bg-black text-white selection:bg-red-800 selection:text-white overflow-x-clip">
      {/* BACKGROUND GLOBAL FIXO DO SITE */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none w-full h-full overflow-hidden">
        <Image
          src="/assets/images/bg-og-mks-home.webp"
          alt="OG.MK$ Background Texture"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-40"
        />
        {/* Vinheta cinematográfica */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />
      </div>

      {/* CONTEÚDO E SEÇÕES SOBREPOSTAS (FLUXO VERTICAL RÍGIDO) */}
      <div className="relative z-10 flex flex-col w-full min-h-screen">
        <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />
        <HeroSection currentLang={currentLang} />
        <AboutSection currentLang={currentLang} />
        <ReleaseSection currentLang={currentLang} />
        <VideoSection currentLang={currentLang} />
        <AgendaSection currentLang={currentLang} />
        <MerchSection currentLang={currentLang} />
        <PresskitSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
        <Footer currentLang={currentLang} />
      </div>
    </main>
  );
}
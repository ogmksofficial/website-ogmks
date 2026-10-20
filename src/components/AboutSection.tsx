"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { translations, Language } from "@/data/translations";

interface AboutSectionProps {
  currentLang?: Language;
}

export default function AboutSection({ currentLang = "PT" }: AboutSectionProps) {
  // Puxa as traduções dinâmicas de acordo com o idioma ativo
  const t = translations[currentLang]?.about || translations.PT.about;

  const WHATSAPP_MANAGER_URL =
    "https://wa.me/5511975117122?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7ar%20um%20show%20do%20OG.MKS.";

  return (
    <section
      id="sobre"
      className="relative w-full min-h-fit lg:min-h-screen pt-10 pb-16 lg:pt-24 lg:pb-0 px-6 sm:px-12 flex items-center lg:items-end justify-center overflow-hidden bg-transparent text-white"
    >
      <div className="max-w-[1550px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* COLUNA ESQUERDA: FOTO IMPONENTE DO ARTISTA */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-1 lg:col-span-6 xl:col-span-6 flex justify-center items-end relative h-[320px] sm:h-[450px] lg:h-[780px] xl:h-[860px] w-full overflow-visible"
        >
          <div className="relative w-full h-full max-w-[450px] lg:max-w-none flex items-end justify-center lg:justify-start lg:-translate-x-8 xl:-translate-x-12 transition-transform">
            <Image
              src="/assets/images/og-mks-photo-about.webp"
              alt="OG.MK$ no microfone"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-bottom lg:object-left-bottom scale-105 sm:scale-110 lg:scale-120 xl:scale-125 origin-bottom lg:origin-bottom-left drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] filter brightness-105"
            />
          </div>
        </motion.div>

        {/* COLUNA DIREITA: CONTEÚDO DINÂMICO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="order-2 lg:order-2 lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end text-center lg:text-right z-10"
        >
          {/* TÍTULO PRINCIPAL */}
          <h2 className="text-white text-4xl sm:text-6xl xl:text-7xl font-black font-franklin uppercase tracking-tight [text-shadow:_0px_4px_9px_rgb(0_0_0_/_0.55)] leading-none">
            {t.title}
          </h2>

          {/* SUBTÍTULO */}
          <h3 className="mt-3 sm:mt-4 text-white text-base sm:text-2xl font-medium font-metropolis uppercase tracking-wide text-zinc-200">
            {t.subtitle}
          </h3>

          {/* PARÁGRAFOS APROVADOS */}
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-zinc-300 text-sm sm:text-xl lg:text-2xl font-normal font-metropolis leading-relaxed max-w-[640px]">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>

          {/* BOTÃO CTA CONTRATE O SHOW */}
          <div className="mt-8 sm:mt-10 flex justify-center lg:justify-end w-full">
            <a
              href={WHATSAPP_MANAGER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#B30000] hover:bg-red-600 text-white font-metropolis font-bold uppercase tracking-wider px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-[0_4px_20px_rgba(179,0,0,0.4)] hover:shadow-[0_4px_25px_rgba(239,68,68,0.6)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span>{t.ctaShow}</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
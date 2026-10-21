"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { translations, Language } from "@/data/translations";

interface AboutSectionProps {
  currentLang?: Language;
}

export default function AboutSection({ currentLang = "PT" }: AboutSectionProps) {
  const t = translations[currentLang]?.about || translations.PT.about;
  const WHATSAPP_NUMBER = "5511992436369";

  return (
    <section
      id="sobre"
      className="relative w-full pt-4 sm:pt-8 lg:pt-12 pb-0 px-4 sm:px-8 lg:px-12 flex items-end justify-center overflow-hidden bg-transparent text-white"
    >
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-10 items-end">

        {/* COLUNA ESQUERDA: FOTO DO ARTISTA (Altura responsiva sem lacuna no mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-1 lg:col-span-6 flex justify-center items-end relative h-[280px] xs:h-[320px] sm:h-[450px] lg:h-[600px] xl:h-[680px] w-full overflow-hidden"
        >
          <div className="relative w-full h-full max-w-[360px] sm:max-w-[480px] lg:max-w-none flex items-end justify-center lg:justify-start">
            <Image
              src="/assets/images/og-mks-photo-about.webp"
              alt="OG.MK$ no microfone"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-bottom lg:object-left-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] filter brightness-105"
            />
          </div>
        </motion.div>

        {/* COLUNA DIREITA: TEXTO E BOTAO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="order-2 lg:order-2 lg:col-span-6 flex flex-col items-center lg:items-end text-center lg:text-right z-10 pb-6 sm:pb-8 lg:pb-12"
        >
          {/* TÍTULO PRINCIPAL */}
          <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-franklin uppercase tracking-tight drop-shadow-md leading-none">
            {t.title}
          </h2>

          {/* SUBTÍTULO VERMELHO */}
          <h3 className="mt-2 sm:mt-3 text-red-600 text-xs sm:text-base lg:text-xl font-black font-metropolis uppercase tracking-wider">
            {t.subtitle}
          </h3>

          {/* PARÁGRAFOS */}
          <div className="mt-3 sm:mt-6 space-y-2.5 sm:space-y-4 text-zinc-300 text-xs sm:text-base lg:text-lg font-normal font-metropolis leading-relaxed max-w-[580px]">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>

          {/* BOTÃO CTA */}
          <div className="mt-5 sm:mt-8 flex justify-center lg:justify-end w-full">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de orçar um show do OG.MKS.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-800 text-white font-metropolis font-black uppercase tracking-wider px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{t.ctaShow}</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
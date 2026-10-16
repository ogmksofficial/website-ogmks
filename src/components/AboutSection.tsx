"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { translations, Language } from "@/data/translations";

interface AboutSectionProps {
  currentLang?: Language;
}

export default function AboutSection({ currentLang = "PT" }: AboutSectionProps) {
  // Puxa as traduções dinâmicas de acordo com o idioma ativo
  const t = translations[currentLang]?.about || translations.PT.about;

  return (
    <section
      id="sobre"
      className="relative w-full min-h-screen pt-16 pb-16 lg:pt-24 lg:pb-0 px-6 sm:px-12 flex items-center lg:items-end justify-center overflow-hidden bg-transparent text-white"
    >
      <div className="max-w-[1550px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

        {/* COLUNA ESQUERDA: FOTO IMPONENTE DO ARTISTA (Escala ampliada alinhada ao Figma) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-start items-end relative h-[560px] sm:h-[680px] lg:h-[780px] xl:h-[860px] w-full overflow-visible"
        >
          <div className="relative w-full h-full max-w-[650px] lg:max-w-none flex items-end">
            <Image
              src="/assets/images/og-mks-photo-about.webp"
              alt="OG.MK$ no microfone"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-bottom lg:object-left-bottom scale-120 sm:scale-125 lg:scale-[1.35] xl:scale-[1.45] origin-bottom lg:origin-bottom-left drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] filter brightness-105"
            />
          </div>
        </motion.div>

        {/* COLUNA DIREITA: CONTEÚDO DINÂMICO (Alinhado à direita no desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end text-center lg:text-right z-10"
        >
          {/* TÍTULO PRINCIPAL */}
          <h2 className="text-white text-4xl sm:text-6xl xl:text-7xl font-black font-franklin uppercase tracking-tight [text-shadow:_0px_4px_9px_rgb(0_0_0_/_0.55)] leading-none">
            {t.title}
          </h2>

          {/* SUBTÍTULO */}
          <h3 className="mt-4 text-white text-lg sm:text-2xl font-medium font-metropolis uppercase tracking-wide text-zinc-200">
            {t.subtitle}
          </h3>

          {/* PARÁGRAFOS APROVADOS */}
          <div className="mt-8 space-y-6 text-zinc-300 text-base sm:text-xl lg:text-2xl font-normal font-metropolis leading-relaxed max-w-[640px]">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>

          {/* BOTÃO CTA CONTRATE O SHOW */}
          <div className="mt-10 flex justify-center lg:justify-end w-full">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20contratar%20o%20show%20do%20OG.MK$"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#B30000] hover:bg-red-600 text-white font-metropolis font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(179,0,0,0.4)] hover:shadow-[0_4px_25px_rgba(239,68,68,0.6)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                className="w-6 h-6 fill-current shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>{t.ctaShow}</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
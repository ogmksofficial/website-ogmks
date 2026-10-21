"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { translations, Language } from "@/data/translations";
import { PlayCircle } from "lucide-react";

interface HeroSectionProps {
  currentLang?: Language;
}

const SPARKS = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: (i * 37 + 11) % 55,
  size: 2 + (i % 3),
  duration: 5 + (i % 6),
  delay: (i * 0.7) % 6,
  drift: ((i % 5) - 2) * 18,
  rise: 45 + (i % 5) * 10,
}));

export default function HeroSection({ currentLang = "PT" }: HeroSectionProps) {
  const t = translations[currentLang]?.hero || translations.PT.hero;
  const reduceMotion = useReducedMotion();

  const WHATSAPP_NUMBER = "5511992436369";

  const handleWhatsappShow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const text = encodeURIComponent("Olá! Vim pelo site do OG.MK$ e gostaria de informações sobre contratação de shows e eventos.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden bg-black">
      
      {/* CAMADA DE FUNDO */}
      <div aria-hidden="true" className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        
        {/* FOTO DO ARTISTA (DESLOCADA ~20PX MAIS PARA A DIREITA NO DESKTOP) */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 1.02 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 left-0 right-0 lg:-right-[26%] lg:translate-x-5"
        >
          <motion.div
            animate={reduceMotion ? undefined : { scale: [1, 1.05] }}
            transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute inset-0 origin-[60%_30%] will-change-transform"
          >
            <Image
              src="/assets/images/og-mks-photo-hero.webp"
              alt="OG.MK$ Hero Background"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-[57%_top] lg:object-[75%_20%] opacity-90 filter brightness-105 contrast-105"
            />
          </motion.div>
        </motion.div>

        {/* GRADIENTES */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
        <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-black/40 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

        {/* BRILHO VERMELHO */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 50, 0], y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[10%] top-[40%] h-[35vw] w-[35vw] rounded-full bg-red-700/10 opacity-60 blur-[140px]"
        />

        {/* FAÍSCAS */}
        <div className="absolute inset-0 motion-reduce:hidden">
          {SPARKS.map((s) => (
            <motion.span
              key={s.id}
              initial={{ opacity: 0, y: "0vh" }}
              animate={{
                y: ["0vh", `-${s.rise}vh`],
                x: [0, s.drift, 0],
                opacity: [0, 1, 0.8, 0],
                scale: [1, 1.1, 0.8, 0.3],
              }}
              transition={{
                duration: s.duration,
                delay: s.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{ left: `${s.left}%`, bottom: "-6px", width: s.size, height: s.size }}
              className="absolute rounded-full bg-orange-400 shadow-[0_0_8px_2px_rgba(239,68,68,0.7)]"
            />
          ))}
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col justify-end lg:justify-center min-h-[75vh]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-start text-left w-full sm:w-fit"
        >
          {/* TÍTULO PRINCIPAL */}
          <h1 className="font-franklin font-black text-[length:min(calc((100vw_-_2rem)/3.6),8rem)] sm:text-9xl md:text-[185px] uppercase tracking-tight text-white leading-none drop-shadow-2xl">
            OG.MK$
          </h1>

          {/* SUBTÍTULO ALINHADO */}
          <p className="mt-3 w-full font-metropolis text-[length:min(calc((100vw_-_2rem)/20.8),1.55rem)] sm:text-[1.65rem] md:text-[1.75rem] font-black uppercase whitespace-nowrap tracking-[0.09em] sm:tracking-[0.205em] -ml-[2px] sm:-ml-[3px] text-white/95">
            {t.tagline}
          </p>

          {/* BOTÕES COM LARGURA EXATA DO BLOCO DE TEXTO */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-4 w-full">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              onClick={handleWhatsappShow}
              className="flex-1 flex items-center justify-center gap-3 whitespace-nowrap px-6 py-5 bg-red-700 hover:bg-red-800 text-white font-metropolis text-sm font-black uppercase tracking-wide rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-red-950/50"
            >
              <svg className="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>{t.ctaShow}</span>
            </a>

            <a
              href="#releases"
              className="flex-1 flex items-center justify-center gap-3 whitespace-nowrap px-6 py-5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/60 text-white font-metropolis text-sm font-black uppercase tracking-wide rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl"
            >
              <PlayCircle size={24} className="shrink-0 text-white/80" aria-hidden="true" />
              <span>{t.ctaRelease}</span>
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
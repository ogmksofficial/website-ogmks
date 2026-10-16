"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  MotionConfig,
  type Variants,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { FaDownload, FaVideo } from "react-icons/fa";
import { translations, Language } from "@/data/translations";

interface PresskitSectionProps {
  currentLang?: Language;
}

const EASE = "easeInOut" as const;

// SUB-COMPONENTE DE CONTADOR ANIMADO (0 -> VALOR FINAL)
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extrai dígitos numéricos (ex: "50K+" vira 50, "30+" vira 30)
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;

  // Extrai sufixos (ex: "K+", "+")
  const suffix = value.replace(/\d+/, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && targetNumber > 0) {
      const controls = animate(count, targetNumber, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, count, targetNumber]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const photoIn: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const statsStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const buttonStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

export default function PresskitSection({ currentLang = "PT" }: PresskitSectionProps) {
  const t = translations[currentLang]?.presskit || {
    tag: "MATERIAL OFICIAL",
    title: "PRESS KIT",
    description:
      "Fotos, release, logo e informações oficiais do OG.MKS para divulgação e contratação.",
    genres: "Trap, Drill e Detroit Trap.",
    definition: "A sonoridade que define o underground paulistano.",
    stat1Num: "50K+",
    stat1Label: "REPRODUÇÕES TOTAIS",
    stat2Num: "30+",
    stat2Label: "MÚSICAS LANÇADAS",
    stat3Num: "6+",
    stat3Label: "PALCOS CULTURAIS",
    btnPresskit: "BAIXAR PRESS KIT",
    btnPhotos: "BAIXAR FOTOS",
    btnLogo: "BAIXAR LOGO",
    btnVideos: "VIDEOS / REELS",
  };

  const DOWNLOAD_LINKS = [
    {
      label: t.btnPresskit,
      href: "/assets/ogmks-clipping-atualizadocompressed.pdf",
      icon: FaDownload,
      isExternal: true,
    },
    {
      label: t.btnPhotos,
      href: "/assets/images/presskit-photo-mks.webp",
      icon: FaDownload,
      isExternal: true,
    },
    {
      label: t.btnLogo,
      href: "/assets/icons/og-mks-logo.webp",
      icon: FaDownload,
      isExternal: true,
    },
    {
      label: t.btnVideos,
      href: "/assets/videos-reels-ogmks.zip",
      icon: FaDownload,
      isExternal: true,
    },
  ];

  const STATS = [
    { num: t.stat1Num, label: t.stat1Label },
    { num: t.stat2Num, label: t.stat2Label },
    { num: t.stat3Num, label: t.stat3Label },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="presskit"
        className="relative w-full scroll-mt-24 bg-zinc-950/4 backdrop-blur-sm py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 sm:px-8 xl:px-0">
          
          {/* BLOCO PRINCIPAL: FOTO + INFORMAÇÕES */}
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-14">
            
            {/* COLUNA ESQUERDA: FOTO DE ALTA DENSIDADE */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={photoIn}
              className="relative mx-auto aspect-[542/671] w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/80"
            >
              <Image
                src="/assets/images/presskit-photo-mks.webp"
                alt="OG.MKS Presskit Photo"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent lg:hidden" />
            </motion.div>

            {/* COLUNA DIREITA: TEXTOS E ESTATÍSTICAS */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col gap-2"
              >
                <span className="font-metropolis text-xl font-black uppercase tracking-wider text-red-800 sm:text-2xl lg:text-3xl">
                  {t.tag}
                </span>
                <h2
                  translate="no"
                  className="font-franklin text-6xl uppercase leading-none tracking-tight sm:text-8xl lg:text-9xl"
                >
                  {t.title}
                </h2>
                <p className="mt-2 font-metropolis text-lg font-medium text-white/90 sm:text-xl lg:text-2xl max-w-xl">
                  {t.description}
                </p>
              </motion.div>

              {/* Destaque do Gênero Musical */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col gap-1"
              >
                <h3 className="font-metropolis text-3xl font-bold text-red-700 sm:text-4xl lg:text-5xl">
                  {t.genres}
                </h3>
              </motion.div>

              {/* CARDS DE ESTATÍSTICAS COM ANIMAÇÃO DE NÚMEROS */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={statsStagger}
                className="grid grid-cols-3 gap-3 sm:gap-4 my-2"
              >
                {STATS.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="flex flex-col items-center justify-center rounded-xl border-4 border-red-700 bg-zinc-950/90 p-3 sm:p-5 shadow-[0_0_15px_rgba(185,28,28,0.25)] transition-transform duration-300 hover:scale-105"
                  >
                    <span className="font-franklin text-3xl uppercase text-red-600 sm:text-5xl lg:text-6xl">
                      <Counter value={stat.num} />
                    </span>
                    <span className="mt-1 text-center font-metropolis text-[10px] font-medium uppercase text-white sm:text-xs lg:text-sm">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="font-metropolis text-base font-medium text-white/80 sm:text-lg lg:text-xl"
              >
                {t.definition}
              </motion.p>
            </div>
          </div>

          {/* LINHA INFERIOR: BOTÕES DE DOWNLOAD */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={buttonStagger}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {DOWNLOAD_LINKS.map((btn, idx) => {
              const Icon = btn.icon;
              return (
                <motion.a
                  key={idx}
                  variants={fadeUp}
                  href={btn.href}
                  target={btn.isExternal ? "_blank" : "_self"}
                  rel={btn.isExternal ? "noreferrer" : undefined}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="flex h-16 items-center justify-center gap-3 rounded-xl border border-red-700/50 bg-red-800/90 px-4 font-metropolis text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-900/40 backdrop-blur-md transition-colors hover:border-red-600 hover:bg-red-700 sm:text-base lg:text-lg"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>{btn.label}</span>
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
}
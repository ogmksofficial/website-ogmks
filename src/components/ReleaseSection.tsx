"use client";

import Image from "next/image";
import { motion, MotionConfig, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import { FaAmazon } from "react-icons/fa";
import {
  SiSpotify,
  SiApplemusic,
  SiYoutube,
  SiDeezer,
  SiTidal,
} from "react-icons/si";
import { translations, Language } from "@/data/translations";

interface ReleaseSectionProps {
  currentLang?: Language;
}

const SPOTIFY_EMBED_SRC =
  "https://open.spotify.com/embed/album/3UfJhAGIMf8XwfFhJw4WeT?utm_source=generator";

/* ============ LINKS DO SINGLE "RESUMO" ============
   Conferir cada um no navegador antes de publicar.
   SoundCloud não existe na página da ONErpm; Tidal entrou no lugar. */
const PLATFORMS: { name: string; href: string; Icon: IconType; hover: string }[] = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/album/3UfJhAGIMf8XwfFhJw4WeT",
    Icon: SiSpotify,
    hover: "hover:text-[#1DB954] hover:border-[#1DB954]/60",
  },
  {
    name: "Apple Music",
    href: "https://geo.music.apple.com/us/album/resumo-single/6800339048?app=music&ls=1",
    Icon: SiApplemusic,
    hover: "hover:text-[#FA243C] hover:border-[#FA243C]/60",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/watch?v=T3iYtdLZzjg",
    Icon: SiYoutube,
    hover: "hover:text-[#FF0000] hover:border-[#FF0000]/60",
  },
  {
    name: "Deezer",
    href: "https://www.deezer.com/album/1051550132",
    Icon: SiDeezer,
    hover: "hover:text-[#A238FF] hover:border-[#A238FF]/60",
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.com/albums/B0HDV2QBWQ",
    Icon: FaAmazon,
    hover: "hover:text-[#25D1DA] hover:border-[#25D1DA]/60",
  },
  {
    name: "Tidal",
    href: "https://www.tidal.com/album/551413614",
    Icon: SiTidal,
    hover: "hover:text-white hover:border-white/60",
  },
];

/* ============ ANIMAÇÕES (ease in / ease out) ============
   Pra um movimento mais seco e dramático, troque EASE por
   [0.76, 0, 0.24, 1] (expo in-out). */
const EASE = "easeInOut" as const;

const sectionStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.05 } },
};

const columnStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
};

const coverIn: Variants = {
  hidden: { opacity: 0, x: -70, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.95, ease: EASE },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

/* O título anima por conta própria (delayChildren no lugar do atraso do pai) */
const titleStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.35 } },
};

const letterIn: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

const listStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemIn: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* Divide o texto em palavras (quebram linha) e letras (animam) */
function AnimatedLetters({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span aria-hidden="true">
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`}>
          <span className="inline-block whitespace-nowrap">
            {[...word].map((char, ci) => (
              <motion.span key={ci} variants={letterIn} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
          {wi < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

export default function ReleaseSection({ currentLang = "PT" }: ReleaseSectionProps) {
  const t = translations[currentLang].release;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="lancamentos"
        className="relative -mt-px w-full scroll-mt-24 bg-zinc-950/90"
      >
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto grid w-full max-w-[1454px] items-center gap-8 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,430px)_minmax(0,1fr)] lg:gap-14 lg:py-20 xl:px-12"
        >
          {/* COLUNA ESQUERDA: capa */}
          <motion.div
            variants={coverIn}
            className="relative mx-auto aspect-square w-full max-w-[430px] overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
          >
            <Image
              src="/assets/images/resumo-cover.webp"
              alt={t.coverAlt}
              fill
              sizes="(min-width: 1024px) 430px, 90vw"
              className="object-cover"
            />
          </motion.div>

          {/* COLUNA DIREITA */}
          <motion.div
            variants={columnStagger}
            className="flex min-w-0 flex-col gap-6 lg:gap-8"
          >
            <div className="flex flex-col gap-2 text-center lg:text-left">
              <motion.h2
                key={currentLang}
                aria-label={t.title}
                translate="no"
                variants={titleStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="font-franklin text-4xl uppercase leading-none text-white sm:text-5xl xl:text-7xl"
              >
                <AnimatedLetters text={t.title} />
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-metropolis text-lg font-bold text-red-800 sm:text-2xl xl:text-4xl"
              >
                {t.subtitle}
              </motion.p>
            </div>

            {/* PLATAFORMAS */}
            <motion.ul
              variants={listStagger}
              className="grid grid-cols-2 gap-2 sm:grid-cols-3"
            >
              {PLATFORMS.map(({ name, href, Icon, hover }) => (
                <motion.li key={name} variants={itemIn}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    translate="no"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className={`flex h-12 items-center justify-center gap-2.5 border border-white/10 bg-white/5 px-3 font-metropolis text-[11px] font-bold uppercase tracking-widest text-white/85 transition-colors duration-300 hover:bg-white/10 ${hover}`}
                  >
                    <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>{name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>

            {/* PLAYER SPOTIFY */}
            <motion.div variants={fadeUp}>
              <iframe
                title="Spotify - Resumo | OG.MKS"
                src={SPOTIFY_EMBED_SRC}
                width="100%"
                height="152"
                loading="lazy"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="block rounded-xl border-0"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
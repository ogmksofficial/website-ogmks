"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { translations, Language } from "@/data/translations";

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  duration: string;
}

/* ============ LISTA DOS VÍDEOS MAIS POPULARES E RECENTES ============ */
const VIDEOS_DATA: VideoItem[] = [
  {
    id: "fashion-nigga",
    youtubeId: "YjBZDqeQXEQ",
    title: "Fashion Nigga",
    duration: "3:06",
  },
  {
    id: "os-menor-do-momento",
    youtubeId: "-RK6cgJLmGs",
    title: "Os Menor do Momento",
    duration: "3:22",
  },
  {
    id: "nike-and-born",
    youtubeId: "E9K6PLG1xcg",
    title: "Nike & Born",
    duration: "4:44",
  },
  {
    id: "resumo",
    youtubeId: "T3iYtdLZzjg",
    title: "Resumo",
    duration: "2:30",
  },
  {
    id: "sentido-reboucas",
    youtubeId: "cIaf3RQo0h4",
    title: "Sentido Rebouças",
    duration: "2:09",
  },
  {
    id: "final-de-semana",
    youtubeId: "cUDdAjB0N3Q",
    title: "Final de Semana",
    duration: "2:33",
  },
  {
    id: "sinal-da-firma",
    youtubeId: "5Jupyk5GXT0",
    title: "Sem Risadinha",
    duration: "3:30",
  },
];

interface VideoSectionProps {
  currentLang?: Language;
}

const EASE = "easeInOut" as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function VideoSection({ currentLang = "PT" }: VideoSectionProps) {
  const t = translations[currentLang]?.videos || {
    title: "ASSISTA AGORA",
    subtitle: "Os clipes oficiais do OG.MKS",
    playPrompt: "Clique para assistir",
    scrollLeft: "Rolar para a esquerda",
    scrollRight: "Rolar para a direita",
  };

  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(VIDEOS_DATA[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSelectVideo = (video: VideoItem) => {
    if (selectedVideo.id !== video.id) {
      setSelectedVideo(video);
      setIsPlaying(false);
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="videos"
        className="relative w-full scroll-mt-24 bg-transparent py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 sm:px-8 xl:px-0">
          
          {/* CABEÇALHO */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            <h2
              translate="no"
              className="font-franklin text-5xl uppercase leading-none tracking-tight sm:text-7xl lg:text-8xl"
            >
              {t.title}
            </h2>
            <p className="mt-3 font-metropolis text-xl font-bold text-red-800 sm:text-3xl lg:text-4xl">
              {t.subtitle}
            </p>
          </motion.div>

          {/* PLAYER PRINCIPAL (HERO) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="w-full flex-col items-center"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/80">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : (
                <div
                  onClick={() => setIsPlaying(true)}
                  className="group relative h-full w-full cursor-pointer"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${selectedVideo.youtubeId}/hqdefault.jpg`}
                    alt={selectedVideo.title}
                    fill
                    priority
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity group-hover:opacity-80" />

                  {/* Botão Play Centralizado */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-md transition-colors group-hover:border-red-600 group-hover:bg-red-600 sm:h-24 sm:w-24"
                    >
                      <FaPlay className="ml-1.5 h-8 w-8 text-white sm:h-10 sm:w-10" />
                    </motion.div>
                  </div>

                  {/* Info sobre o vídeo */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <h3 className="font-metropolis text-2xl font-bold uppercase text-white sm:text-4xl">
                        {selectedVideo.title}
                      </h3>
                      <p className="mt-1 font-metropolis text-sm font-semibold tracking-wider text-zinc-400">
                        {t.playPrompt}
                      </p>
                    </div>
                    <span className="rounded-md border border-white/10 bg-black/70 px-3 py-1 font-metropolis text-xs font-bold tracking-widest text-white backdrop-blur-sm">
                      {selectedVideo.duration}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* CARROSSEL SELECTOR */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative w-full"
          >
            {/* Controles do Carrossel (Desktop) */}
            <button
              onClick={() => scrollCarousel("left")}
              aria-label={t.scrollLeft}
              className="absolute -left-5 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900/90 p-3.5 text-white backdrop-blur-md transition-colors hover:border-red-600 hover:bg-red-600 lg:flex"
            >
              <FaChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => scrollCarousel("right")}
              aria-label={t.scrollRight}
              className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900/90 p-3.5 text-white backdrop-blur-md transition-colors hover:border-red-600 hover:bg-red-600 lg:flex"
            >
              <FaChevronRight className="h-5 w-5" />
            </button>

            {/* Container do Scroll Horizontal */}
            <div
              ref={carouselRef}
              className="no-scrollbar flex w-full gap-4 overflow-x-auto scroll-smooth pb-2 pt-2"
            >
              {VIDEOS_DATA.map((video) => {
                const isActive = selectedVideo.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => handleSelectVideo(video)}
                    className={`group relative aspect-video w-64 shrink-0 cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 sm:w-80 ${
                      isActive
                        ? "border-red-600 ring-2 ring-red-600/50"
                        : "border-white/10 opacity-60 hover:border-white/40 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Badge Duração */}
                    <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 font-metropolis text-[10px] font-bold text-white">
                      {video.duration}
                    </span>

                    {/* Título do Card */}
                    <div className="absolute bottom-2 left-3 right-12 truncate font-metropolis text-sm font-bold text-white">
                      {video.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
}
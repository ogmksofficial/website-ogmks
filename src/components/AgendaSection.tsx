"use client";

import { useState } from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { translations, Language } from "@/data/translations";

export interface EventItem {
  id: string;
  dayMonth: string;
  time: string;
  title: string;
  subtitle?: string;
  address: string;
  type: "FREE" | "AT_DOOR" | "SOLD_OUT" | "FINISHED";
  link?: string;
}

const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "black-friends",
    dayMonth: "20 DEZ",
    time: "18:00h",
    title: "BLACK FRIENDS",
    subtitle: "PRAINHA DA VILA BAR",
    address: "Rua Diamantina, 331 – Vila Maria, São Paulo - SP",
    type: "AT_DOOR",
  },
];

const PAST_EVENTS: EventItem[] = [
  {
    id: "festa-das-criancas",
    dayMonth: "18 OUT",
    time: "18:00h",
    title: "FESTA DAS CRIANÇAS!",
    address: "Praça Pastor Alonso Belarmino de Lima",
    type: "FINISHED",
  },
  {
    id: "brisas-fc",
    dayMonth: "12 OUT",
    time: "18:00h",
    title: "ANIVERSÁRIO DE 28 ANOS DO BRISAS F.C.",
    subtitle: "+ FESTA DAS CRIANÇAS!",
    address: "Rua dos Arcos, nº 100 – Jardim Julieta",
    type: "FINISHED",
  },
];

interface AgendaSectionProps {
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

const listStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function AgendaSection({ currentLang = "PT" }: AgendaSectionProps) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const tAgenda = translations[currentLang]?.agenda;
  const t = {
    title: tAgenda?.title || "AGENDA DE SHOWS",
    subtitle: tAgenda?.subtitle || "Próximos Eventos",
    upcoming: (tAgenda as unknown as { upcoming?: string })?.upcoming || (currentLang === "EN" ? "Upcoming Shows" : "Próximos Shows"),
    past: (tAgenda as unknown as { past?: string })?.past || (currentLang === "EN" ? "Past Shows" : "Shows Anteriores"),
    freeTicket: tAgenda?.freeTicket || "ENTRADA GRATUITA",
    atDoor: tAgenda?.atDoor || "INGRESSOS NA PORTA",
    soldOut: tAgenda?.soldOut || "ESGOTADO",
    finished: currentLang === "EN" ? "FINISHED" : currentLang === "ES" ? "REALIZADO" : "REALIZADO",
  };

  const activeEvents = tab === "upcoming" ? UPCOMING_EVENTS : PAST_EVENTS;

  const getBadgeText = (type: EventItem["type"]) => {
    switch (type) {
      case "FREE":
        return t.freeTicket;
      case "AT_DOOR":
        return t.atDoor;
      case "SOLD_OUT":
        return t.soldOut;
      case "FINISHED":
        return t.finished;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="agenda"
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

            {/* ABAS / SELEÇÃO DE FILTRO TRADUZIDO */}
            <div className="mt-6 flex items-center gap-3 rounded-full border border-white/20 bg-zinc-900/80 p-1.5 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setTab("upcoming")}
                className={`rounded-full px-5 py-2.5 font-metropolis text-xs font-black uppercase tracking-wider transition-all duration-300 sm:px-7 sm:py-3 sm:text-sm ${
                  tab === "upcoming"
                    ? "bg-red-700 text-white shadow-lg shadow-red-950/50"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {t.upcoming}
              </button>
              <button
                type="button"
                onClick={() => setTab("past")}
                className={`rounded-full px-5 py-2.5 font-metropolis text-xs font-black uppercase tracking-wider transition-all duration-300 sm:px-7 sm:py-3 sm:text-sm ${
                  tab === "past"
                    ? "bg-red-700 text-white shadow-lg shadow-red-950/50"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {t.past}
              </button>
            </div>
          </motion.div>

          {/* LISTA DE EVENTOS */}
          <motion.div
            key={tab}
            initial="hidden"
            animate="show"
            variants={listStagger}
            className="flex w-full flex-col gap-6"
          >
            {activeEvents.length === 0 ? (
              <p className="py-12 text-center font-metropolis text-lg font-bold uppercase text-zinc-500">
                {currentLang === "EN" ? "No events found in this category." : "Nenhum show cadastrado nesta categoria."}
              </p>
            ) : (
              activeEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={fadeUp}
                  className="group relative flex w-full flex-col items-center justify-between gap-6 rounded-3xl border-2 border-white/80 bg-zinc-950/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-red-600 hover:bg-zinc-950/90 md:flex-row md:gap-8 lg:p-8"
                >
                  {/* BLOCO DATA + HORA */}
                  <div className="flex shrink-0 flex-col items-center text-center md:items-start md:text-left">
                    <span className="font-franklin text-4xl uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
                      {event.dayMonth}
                    </span>
                    <span className="mt-1 font-metropolis text-2xl font-normal uppercase text-white/90 sm:text-3xl">
                      {event.time}
                    </span>
                  </div>

                  {/* DIVISOR VERTICAL (DESKTOP) */}
                  <div className="hidden h-24 w-1 bg-white/80 md:block" />

                  {/* BLOCO INFORMAÇÕES DO EVENTO */}
                  <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
                    <h3 className="font-metropolis text-2xl font-black uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
                      {event.title}
                    </h3>
                    {event.subtitle && (
                      <span className="mt-1 font-metropolis text-2xl font-black uppercase text-white sm:text-3xl lg:text-4xl">
                        {event.subtitle}
                      </span>
                    )}
                    <p className="mt-3 flex items-center gap-2 font-metropolis text-base font-medium text-white/80 sm:text-xl lg:text-2xl">
                      <span>📍</span> {event.address}
                    </p>
                  </div>

                  {/* BADGE / STATUS DO INGRESSO */}
                  <div className="flex shrink-0 items-center justify-center">
                    <div
                      className={`flex h-16 min-w-[200px] items-center justify-center rounded-full px-6 py-3 text-center font-metropolis text-base font-bold uppercase text-white shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:min-w-[240px] sm:text-xl ${
                        event.type === "FINISHED"
                          ? "bg-zinc-800 text-zinc-400"
                          : "bg-red-800 shadow-red-900/30"
                      }`}
                    >
                      {getBadgeText(event.type)}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
}
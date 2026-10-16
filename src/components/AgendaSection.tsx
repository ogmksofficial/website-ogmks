"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import { translations, Language } from "@/data/translations";

export interface EventItem {
  id: string;
  dayMonth: string;
  time: string;
  title: string;
  subtitle?: string;
  address: string;
  type: "FREE" | "AT_DOOR" | "SOLD_OUT";
  link?: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: "brisas-fc",
    dayMonth: "12 OUT",
    time: "18:00h",
    title: "ANIVERSÁRIO DE 28 ANOS DO BRISAS F.C.",
    subtitle: "+ FESTA DAS CRIANÇAS!",
    address: "Rua dos Arcos, nº 100 – Jardim Julieta",
    type: "FREE",
  },
  {
    id: "festa-das-criancas",
    dayMonth: "18 OUT",
    time: "18:00h",
    title: "FESTA DAS CRIANÇAS!",
    address: "Praça Pastor Alonso Belarmino de Lima",
    type: "FREE",
  },
  {
    id: "black-friends",
    dayMonth: "19 DEZ",
    time: "18:00h",
    title: "BLACK FRIENDS",
    address: "Rua Tenente Agenor Soares, nº 80 – Jardim Julieta",
    type: "AT_DOOR",
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
  const t = translations[currentLang]?.agenda || {
    title: "AGENDA DE SHOWS",
    subtitle: "Próximos Eventos",
    freeTicket: "ENTRADA GRATUITA",
    atDoor: "INGRESSOS NA PORTA",
    soldOut: "ESGOTADO",
  };

  const getBadgeText = (type: EventItem["type"]) => {
    switch (type) {
      case "FREE":
        return t.freeTicket;
      case "AT_DOOR":
        return t.atDoor;
      case "SOLD_OUT":
        return t.soldOut;
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
            <p className="mt-3 font-metropolis text-xl font-bold text-red-800 sm:text-3xl lg:text-4xl">
              {t.subtitle}
            </p>
          </motion.div>

          {/* LISTA DE EVENTOS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={listStagger}
            className="flex w-full flex-col gap-6"
          >
            {EVENTS_DATA.map((event) => (
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
                  <div className="flex h-16 min-w-[200px] items-center justify-center rounded-full bg-red-800 px-6 py-3 text-center font-metropolis text-base font-bold uppercase text-white shadow-lg shadow-red-900/30 transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:min-w-[240px] sm:text-xl">
                    {getBadgeText(event.type)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
}
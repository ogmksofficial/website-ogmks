"use client";

import Image from "next/image";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { translations, Language } from "@/data/translations";

export interface MerchItem {
  id: string;
  name: string;
  image: string;
}

const MERCH_PRODUCTS: MerchItem[] = [
  {
    id: "camiseta-long-size",
    name: "Camiseta Long Size OG.MK$",
    image: "/assets/images/merch-camiseta.webp",
  },
  {
    id: "moletom-legacy",
    name: "Moletom Legacy Heavyweight",
    image: "/assets/images/merch-moletom.webp",
  },
  {
    id: "bone-snapback",
    name: "Boné Snapback OG.MK$",
    image: "/assets/images/merch-bone.webp",
  },
  {
    id: "corrente-prata",
    name: "Corrente de Prata OG.MK$",
    image: "/assets/images/merch-corrente.webp",
  },
];

interface MerchSectionProps {
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
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export default function MerchSection({ currentLang = "PT" }: MerchSectionProps) {
  const t = translations[currentLang]?.merch || {
    tag: "PRODUTOS",
    title: "OFICIAIS",
    subtitle: "Vista o som. Leve o OG. MK$",
    cta: "SAIBA MAIS",
    disclaimer: "*COLEÇÃO EM BREVE — ENTRE NA LISTA DE ESPERA PARA GARANTIR O SEU MERCH!",
    whatsappMessage: "Olá! Quero entrar na lista de espera para o produto: ",
  };

  // Número de WhatsApp configurado (substitua pelo oficial do artista/comercial)
  const WHATSAPP_NUMBER = "5511999999999";

  const getWhatsappUrl = (productName: string) => {
    const text = encodeURIComponent(`${t.whatsappMessage}${productName}`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="merch"
        className="relative w-full scroll-mt-24 bg-zinc-950/90 py-16 text-white sm:py-20 lg:py-24"
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
            <span className="font-metropolis text-xl font-black uppercase text-red-800 sm:text-2xl lg:text-3xl">
              {t.tag}
            </span>
            <h2
              translate="no"
              className="mt-1 font-franklin text-6xl uppercase leading-none tracking-tight sm:text-8xl lg:text-9xl"
            >
              {t.title}
            </h2>
            <p className="mt-3 font-metropolis text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              {t.subtitle}
            </p>
          </motion.div>

          {/* GRADE DE PRODUTOS (4 CARDS) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={listStagger}
            className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {MERCH_PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeUp}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-red-600/60 hover:bg-slate-800/90 shadow-xl"
              >
                {/* CONTAINER DA IMAGEM DO PRODUTO */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-900/40 p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* TÍTULO E BOTÃO DE CTA */}
                <div className="mt-4 flex flex-1 flex-col justify-between gap-4">
                  <h3 className="min-h-[3rem] text-center font-metropolis text-lg font-bold text-white sm:text-xl flex items-center justify-center">
                    {product.name}
                  </h3>

                  <a
                    href={getWhatsappUrl(product.name)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t.cta} - ${product.name}`}
                    className="flex h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-red-800 px-4 font-metropolis text-base font-black uppercase text-white shadow-lg shadow-red-900/30 transition-all duration-300 hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FaWhatsapp className="h-6 w-6 shrink-0" />
                    <span>{t.cta}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* AVISO DO RODAPÉ (DISCLAIMER) */}
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-4 text-center font-metropolis text-xs font-semibold uppercase tracking-wider text-zinc-300 sm:text-sm lg:text-base"
          >
            {t.disclaimer}
          </motion.p>

        </div>
      </section>
    </MotionConfig>
  );
}
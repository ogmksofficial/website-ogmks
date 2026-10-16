"use client";

import Image from "next/image";
import { motion, MotionConfig, type Variants } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaApple,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiDeezer, SiSoundcloud } from "react-icons/si";
import { translations, Language } from "@/data/translations";

interface FooterProps {
  currentLang?: Language;
}

const EASE = "easeInOut" as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Footer({ currentLang = "PT" }: FooterProps) {
  const t = translations[currentLang]?.footer || {
    tagline: "Trap, Drill & Detroit Trap.\nDo Jardim Brasil pro Mundo!",
    contactTitle: "CONTATO",
    prodTitle: "PONTO PRODUÇÕES",
    prodDesc: "Produtora musical · Desde 2022\nGerenciamento e produção do OG.MK$",
    address: "R. Basílio Alves Morango, 933 — Jardim Brasil\nSão Paulo · SP — 02222-001",
    seeMaps: "VER NO GOOGLE MAPS",
    ctaShow: "CONTRATE O SHOW",
    copyright:
      "© 2026 OG.MK$ | Todos os direitos reservados | Developed by Abner Simão Design | Política de privacidade | Termos de uso.",
  };

  const nav = translations[currentLang]?.nav || {
    home: "HOME",
    about: "SOBRE",
    releases: "LANÇAMENTOS",
    clips: "CLIPES",
    agenda: "AGENDA",
    merch: "MERCH",
    presskit: "PRESSKIT",
    contact: "CONTATO",
  };

  const SOCIAL_LINKS = [
    { icon: FaInstagram, href: "https://instagram.com/og.mks", label: "Instagram" },
    { icon: FaFacebookF, href: "https://facebook.com/ogmks", label: "Facebook" },
    { icon: FaYoutube, href: "https://youtube.com/@ogmks", label: "YouTube" },
    { icon: FaTiktok, href: "https://tiktok.com/@ogmks", label: "TikTok" },
    { icon: FaSpotify, href: "https://open.spotify.com/artist/ogmks", label: "Spotify" },
    { icon: FaApple, href: "https://music.apple.com/artist/ogmks", label: "Apple Music" },
    { icon: SiDeezer, href: "https://deezer.com/artist/ogmks", label: "Deezer" },
    { icon: SiSoundcloud, href: "https://soundcloud.com/ogmks", label: "SoundCloud" },
  ];

  const NAV_LINKS = [
    { label: nav.home, href: "#hero" },
    { label: nav.about, href: "#about" },
    { label: nav.releases, href: "#release" },
    { label: nav.clips, href: "#videos" },
    { label: nav.presskit, href: "#presskit" },
    { label: nav.merch, href: "#merch" },
    { label: nav.contact, href: "#contact" },
  ];

  const GOOGLE_MAPS_URL =
    "https://maps.google.com/?q=R.+Bas%C3%ADlio+Alves+Morango,+933+-+Jardim+Brasil,+S%C3%A3o+Paulo+-+SP,+02222-001";

  const WHATSAPP_MANAGER_URL =
    "https://wa.me/5511975117122?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7ar%20um%20show%20do%20OG.MKS.";

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <footer className="relative w-full bg-zinc-950/90 text-white">
        
        {/* BLOCO PRINCIPAL DO FOOTER */}
        <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-12 px-4 py-16 sm:px-8 sm:py-20 lg:py-20 xl:px-8">
          
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[442px_1fr_400px] lg:gap-16">
            
            {/* COLUNA 1: SLOGAN, LOGO OG.MKS & SOCIAL */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-between gap-6"
            >
              <p className="whitespace-pre-line font-metropolis text-2xl font-bold leading-snug text-white lg:text-[32px] lg:leading-[40px] lg:w-[480px]">
                {t.tagline}
              </p>

              {/* LOGO OG.MKS */}
              <div className="relative h-44 w-52 sm:h-56 sm:w-64 lg:h-[320px] lg:w-[360px] my-2">
                <Image
                  src="/assets/icons/og-mks-logo.webp"
                  alt="OG.MK$ Logo"
                  fill
                  sizes="(max-width: 1024px) 256px, 360px"
                  className="object-contain object-center lg:object-left"
                  priority
                />
              </div>

              {/* REDES SOCIAIS */}
              <div className="grid grid-cols-4 gap-3 max-w-[280px] sm:max-w-none sm:flex sm:flex-wrap sm:justify-center lg:flex-nowrap lg:justify-start lg:gap-3.5 pt-2">
                {SOCIAL_LINKS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition-all duration-300 hover:border-red-600 hover:bg-red-700 hover:scale-110 lg:h-11 lg:w-11"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* COLUNA 2: MENU DE NAVEGAÇÃO CENTRAL (ALINHAMENTO VERTICAL COMPLETO VIA 'justify-between') */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="hidden lg:flex flex-col items-start justify-between text-left pl-6 h-full py-1"
            >
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="font-metropolis text-2xl font-bold uppercase tracking-wider text-white transition-colors hover:text-red-600 lg:text-[32px] leading-none"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>

            {/* COLUNA 3: CONTATO, PONTO PRODUÇÕES & MAPA */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex flex-col justify-between gap-8 text-center sm:text-left h-full"
            >
              {/* BLOCO DE CONTATO DIRETO */}
              <div className="flex flex-col gap-3 items-center sm:items-start">
                <h3 className="font-metropolis text-2xl font-black uppercase tracking-wider text-white lg:text-2xl">
                  {t.contactTitle}
                </h3>
                
                <a
                  href="mailto:ogmksofficial@gmail.com"
                  className="flex items-center gap-3 font-metropolis text-base font-semibold text-white/90 uppercase transition-colors hover:text-red-500 lg:text-base"
                >
                  <FaEnvelope className="h-5 w-5 shrink-0 text-red-600" />
                  <span>ogmksofficial@gmail.com</span>
                </a>

                <a
                  href="mailto:contatoproducaoponto@gmail.com"
                  className="flex items-center gap-3 font-metropolis text-base font-semibold text-white/90 uppercase transition-colors hover:text-red-500 lg:text-base"
                >
                  <FaEnvelope className="h-5 w-5 shrink-0 text-red-600" />
                  <span>contatoproducaoponto@gmail.com</span>
                </a>

                <a
                  href={WHATSAPP_MANAGER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 font-metropolis text-base font-semibold text-white/90 transition-colors hover:text-red-500 lg:text-lg"
                >
                  <FaWhatsapp className="h-6 w-6 shrink-0 text-green-500" />
                  <span>Marcos Alexandre — 11 97511-7122</span>
                </a>
              </div>

              {/* BLOCO PONTO PRODUÇÕES & MAPA */}
              <div className="flex flex-col gap-3 border-t border-white/15 pt-6 items-center sm:items-start">
                <h3 className="font-metropolis text-2xl font-black uppercase tracking-wider text-white lg:text-2xl">
                  {t.prodTitle}
                </h3>
                <p className="whitespace-pre-line font-metropolis text-base font-medium text-white/80 lg:text-base">
                  {t.prodDesc}
                </p>

                {/* MINIATURA DO MAPA */}
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.seeMaps}
                  className="group relative h-28 w-full overflow-hidden rounded-2xl border-2 border-white/20 bg-[#e5e3df] shadow-md transition-transform duration-300 hover:scale-[1.02] lg:h-32"
                >
                  <div className="absolute inset-0 bg-[#e5e3df] opacity-100">
                    <svg className="h-full w-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                      <pattern id="grid-footer-light" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#a2b9e7" strokeWidth="2" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid-footer-light)" />
                      <path d="M -10 50 Q 150 20 350 80" fill="none" stroke="#ffffff" strokeWidth="12" />
                      <path d="M -10 50 Q 150 20 350 80" fill="none" stroke="#fcd8a5" strokeWidth="8" />
                      <path d="M 120 -10 L 140 120" fill="none" stroke="#ffffff" strokeWidth="10" />
                    </svg>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex flex-col items-center">
                      <FaMapMarkerAlt className="h-8 w-8 text-red-600 drop-shadow-md transition-transform group-hover:scale-125" />
                      <span className="mt-1 rounded bg-black/90 px-2 py-0.5 font-metropolis text-[10px] font-bold text-white shadow-lg border border-red-600/40">
                        Ponto Prod
                      </span>
                    </div>
                  </div>
                </a>

                <p className="whitespace-pre-line font-metropolis text-sm font-semibold text-white/80 lg:text-sm">
                  {t.address}
                </p>

                <div className="flex w-full items-center justify-between pt-1">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-metropolis text-xs font-bold text-red-600 underline hover:text-red-500 lg:text-sm"
                  >
                    <span>{t.seeMaps}</span>
                    <FaArrowRight className="h-3 w-3" />
                  </a>

                  <a
                    href="https://instagram.com/pontoprod"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-metropolis text-xs font-bold text-white hover:text-red-600 transition-colors lg:text-sm"
                  >
                    <FaInstagram className="h-4 w-4 text-red-600" />
                    <span>@PONTOPROD</span>
                  </a>
                </div>

                {/* BOTÃO CONTRATE O SHOW */}
                <a
                  href={WHATSAPP_MANAGER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-red-700 font-metropolis text-xl font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-red-800 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaWhatsapp className="h-7 w-7 text-white" />
                  <span>{t.ctaShow}</span>
                </a>
              </div>

            </motion.div>

          </div>

        </div>

        {/* BARRA INFERIOR DE COPYRIGHT */}
        <div className="w-full bg-stone-300 py-6 text-black">
          <div className="mx-auto max-w-[1450px] px-4 text-center font-metropolis text-xs font-medium leading-relaxed sm:text-sm xl:px-8">
            {t.copyright}
          </div>
        </div>

      </footer>
    </MotionConfig>
  );
}
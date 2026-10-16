"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { translations, Language } from "@/data/translations";

interface NavbarProps {
  currentLang?: Language;
  onLanguageChange?: (lang: Language) => void;
}

export default function Navbar({ currentLang = "PT", onLanguageChange }: NavbarProps) {
  const [lang, setLang] = useState<Language>(currentLang);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    if (onLanguageChange) {
      onLanguageChange(newLang);
    }
  };

  const navLinks = [
    { href: "#home", label: t.home },
    { href: "#sobre", label: t.about },
    { href: "#lancamentos", label: t.releases },
    { href: "#clipes", label: t.clips },
    { href: "#agenda", label: t.agenda },
    { href: "#merch", label: t.merch },
    { href: "#presskit", label: t.presskit },
    { href: "#contato", label: t.contact },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", color: "hover:text-[#E4405F]", icon: <svg className="w-4 h-4 xl:w-5 xl:h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { name: "Facebook", href: "https://facebook.com", color: "hover:text-[#1877F2]", icon: <svg className="w-4 h-4 xl:w-5 xl:h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg> },
    { name: "YouTube", href: "https://youtube.com", color: "hover:text-[#FF0000]", icon: <svg className="w-4 h-4 xl:w-5 xl:h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg> },
    { name: "TikTok", href: "https://tiktok.com", color: "hover:text-[#00F2FE]", icon: <svg className="w-4 h-4 xl:w-5 xl:h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.54-1.28 2.54.02 1.08.61 2.07 1.56 2.57 1.15.61 2.61.46 3.59-.38.7-.58 1.12-1.45 1.12-2.37.01-4.88.01-9.76.01-14.64z"/></svg> },
    { name: "Spotify", href: "https://spotify.com", color: "hover:text-[#1DB954]", icon: <svg className="w-4 h-4 xl:w-5 xl:h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.48-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.72-.66 13.44 1.621.42.24.54.84.301 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg> },
    { name: "Apple Music", href: "https://apple.com", color: "hover:text-[#FA243C]", icon: <svg className="w-4 h-4 xl:w-5 xl:h-5 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.97.99-3.12-.99.04-2.18.67-2.88 1.49-.62.72-1.16 1.89-1.01 3.01 1.11.09 2.23-.56 2.9-1.38z"/></svg> },
    { name: "Deezer", href: "https://deezer.com", color: "hover:text-[#A238FF]", icon: <svg className="w-4 h-4 xl:w-5 xl:h-5 fill-current" viewBox="0 0 24 24"><path d="M18.24 3.6h5.76v2.88h-5.76zm0 4.8h5.76v2.88h-5.76zm0 4.8h5.76v2.88h-5.76zm0 4.8h5.76v2.88h-5.76zM9.12 13.2h5.76v2.88H9.12zm0 4.8h5.76v2.88H9.12zM0 18h5.76v2.88H0z"/></svg> },
    { name: "Bandcamp", href: "https://bandcamp.com", color: "hover:text-[#1DA0C3]", icon: <svg className="w-4 h-4 xl:w-5 xl:h-5 fill-current" viewBox="0 0 24 24"><path d="M0 18.75l7.437-13.5h16.563l-7.438 13.5h-16.562z"/></svg> },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 xl:px-10 py-3"
      >
        <div className="max-w-[1700px] w-full mx-auto flex items-center justify-between gap-3 xl:gap-6">

          {/* 1. LOGO OG.MK$ */}
          <a
            href="#home"
            className="relative w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center transition-transform hover:scale-105 shrink-0"
          >
            <Image
              src="/assets/icons/og-mks-logo.webp"
              alt="OG.MK$ Logo"
              width={48}
              height={48}
              priority
              className="object-contain filter brightness-110"
            />
          </a>

          {/* 2. NAV LINKS DESKTOP (≥ 1380px) */}
          <nav className="hidden min-[1380px]:flex items-center font-metropolis font-bold tracking-widest uppercase text-[11px] xl:text-xs shrink-0">
            {navLinks.map((link, idx) => (
              <span key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className="text-white/85 hover:text-red-600 transition-colors duration-300 px-2 xl:px-3"
                >
                  {link.label}
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="text-white/20 font-light select-none">|</span>
                )}
              </span>
            ))}
          </nav>

          {/* 3. SELETOR DE IDIOMAS */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-[1380px]:static min-[1380px]:translate-x-0 min-[1380px]:translate-y-0 flex items-center bg-[#141416] p-1 rounded-xl border border-white/10 shadow-inner shrink-0 z-10">
            {[
              { code: "PT", flag: "🇧🇷" },
              { code: "EN", flag: "🇬🇧" },
              { code: "ES", flag: "🇪🇸" },
            ].map((item) => {
              const isActive = lang === item.code;
              return (
                <button
                  key={item.code}
                  onClick={() => handleLangChange(item.code as Language)}
                  className={`relative flex items-center gap-1 px-2 py-1 xl:px-3 rounded-lg text-xs font-bold font-metropolis transition-all duration-300 ${
                    isActive
                      ? "bg-zinc-800 text-white shadow-md border border-white/10"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                        : "bg-zinc-600 opacity-30"
                    }`}
                  />
                  <span>{item.flag}</span>
                  <span>{item.code}</span>
                </button>
              );
            })}
          </div>

          {/* BLOCO DIREITO: Redes no Desktop | Hambúrguer no Mobile/Notebooks < 1380px */}
          <div className="flex items-center gap-3 xl:gap-4 shrink-0">
            {/* 4. ÍCONES SOCIAIS DESKTOP (≥ 1380px) */}
            <div className="hidden min-[1380px]:flex items-center gap-2.5 xl:gap-3.5 text-white/90">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${social.color} transition-colors duration-200 flex items-center justify-center p-1`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* BOTÃO MENU HAMBÚRGUER (< 1380px) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-red-600 transition-colors p-2 min-[1380px]:hidden flex items-center justify-center"
              aria-label="Abrir menu"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </motion.header>

      {/* DRAWER MENU LATERAL COM SWIPE-TO-CLOSE */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] min-[1380px]:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0, right: 0.5 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100 || (info.offset.x > 50 && info.velocity.x > 200)) {
                  setIsMenuOpen(false);
                }
              }}
              className="fixed top-0 right-0 w-80 max-w-[85vw] h-dvh bg-[#0a0a0a] border-l border-white/10 z-[70] shadow-2xl min-[1380px]:hidden flex flex-col justify-between overflow-y-auto touch-pan-y"
            >
              <div>
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="text-xs font-bold tracking-widest text-white/50 uppercase font-metropolis">Menu</span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/70 hover:text-red-600 transition-colors p-1"
                    aria-label="Fechar menu"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col px-6 pt-6 pb-2 font-metropolis font-bold tracking-widest uppercase">
                  <div className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white/85 hover:text-red-600 transition-colors duration-300 text-sm flex items-center justify-between group"
                      >
                        <span>{link.label}</span>
                        <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <div className="py-6 px-6">
                <div className="flex items-center gap-1.5 text-white/30 text-[10px] tracking-widest font-normal">
                  <span>Arraste para fechar</span>
                  <span className="text-red-600 font-bold">→</span>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-black/30 mt-auto shrink-0">
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-3 font-metropolis">
                  Redes & Plataformas
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 ${social.color} hover:bg-white/10 transition-all duration-200`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
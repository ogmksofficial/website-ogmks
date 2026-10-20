"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { translations, Language } from "@/data/translations";

interface ContactSectionProps {
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

export default function ContactSection({ currentLang = "PT" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = translations[currentLang]?.contact || {
    ctaTitle: "LEVE O SHOW DO OG.MK$ PARA SEU EVENTO!",
    ctaSubtitle: "Disponível para Shows, Festivais, Feat e Presença VIP em todo o Brasil.",
    btnManager: "FALE COM O MANAGER",
    formTitle: "ENTRE EM CONTATO",
    formDescription:
      "Preencha o formulário para orçamentos de shows, eventos, parcerias ou para entrar na lista de espera exclusiva do Merch.",
    placeholderName: "SEU NOME COMPLETO",
    placeholderEmail: "E-MAIL DE CONTATO",
    placeholderMessage: "DIGITE AQUI SUA MENSAGEM",
    btnSend: "ENVIAR MENSAGEM",
  };

  const WHATSAPP_MANAGER_NUMBER = "5511975117122";

  const handleManagerClick = () => {
    const text = encodeURIComponent("Olá! Gostaria de orçar um show/evento do OG.MKS.");
    window.open(`https://wa.me/${WHATSAPP_MANAGER_NUMBER}?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch {
      alert("Erro de conexão. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <section id="contato" className="relative w-full scroll-mt-24 text-white">
        
        {/* BLOCO SUPERIOR: BANNER VERMELHO DE SHOWS / BOOKING */}
        <div className="relative w-full bg-red-950/80 py-16 backdrop-blur-md sm:py-20 lg:py-24">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 lg:flex-row lg:justify-between sm:px-8 xl:px-0">
            
            {/* TEXTOS + BOTÃO MANAGER */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex max-w-[620px] flex-col gap-6 text-center lg:text-left"
            >
              <h2 className="font-franklin text-4xl uppercase leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                {t.ctaTitle}
              </h2>
              <p className="font-metropolis text-lg font-semibold text-white/90 sm:text-2xl">
                {t.ctaSubtitle}
              </p>
              
              <div className="pt-2 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={handleManagerClick}
                  className="flex h-16 items-center justify-center gap-3 rounded-3xl border-4 border-black bg-zinc-200 px-8 font-metropolis text-lg font-black uppercase text-black shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95 sm:h-20 sm:text-2xl"
                >
                  <FaWhatsapp className="h-8 w-8 text-black" />
                  <span>{t.btnManager}</span>
                </button>
              </div>
            </motion.div>

            {/* FOTO DO ARTISTA NO BANNER */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative aspect-[676/561] w-full max-w-[560px] overflow-hidden rounded-[40px] border-4 border-white shadow-2xl"
            >
              <Image
                src="/assets/images/contatosection-photo-mks.webp"
                alt="OG.MKS Contact Photo"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover object-top"
              />
            </motion.div>

          </div>
        </div>

        {/* BLOCO INFERIOR: FORMULÁRIO CINZA CLARO */}
        <div className="relative w-full bg-zinc-300/95 py-16 text-black backdrop-blur-md sm:py-20 lg:py-24">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 lg:flex-row lg:items-start lg:gap-16 sm:px-8 xl:px-0">
            
            {/* COLUNA ESQUERDA: TEXTO DO FORMULÁRIO */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex max-w-[480px] flex-col gap-4 text-center lg:text-left"
            >
              <h3 className="font-franklin text-4xl uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
                {t.formTitle}
              </h3>
              <p className="font-metropolis text-lg font-medium leading-relaxed text-black/80 sm:text-2xl">
                {t.formDescription}
              </p>
            </motion.div>

            {/* COLUNA DIREITA: CAMPOS DO FORMULÁRIO */}
            <motion.form
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col gap-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder={t.placeholderName}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-16 w-full rounded-md bg-white px-5 font-metropolis text-sm font-bold text-black placeholder:text-black/40 outline-none focus:ring-2 focus:ring-red-700 sm:text-base"
                />
                <input
                  type="email"
                  required
                  placeholder={t.placeholderEmail}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-16 w-full rounded-md bg-white px-5 font-metropolis text-sm font-bold text-black placeholder:text-black/40 outline-none focus:ring-2 focus:ring-red-700 sm:text-base"
                />
              </div>

              {/* TEXTAREA DIMENSIONÁVEL NA VERTICAL (resize-y) */}
              <textarea
                required
                rows={5}
                placeholder={t.placeholderMessage}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-[160px] rounded-md bg-white p-5 font-metropolis text-sm font-bold text-black placeholder:text-black/40 outline-none focus:ring-2 focus:ring-red-700 sm:text-base resize-y"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-16 w-full rounded-md bg-red-700 font-metropolis text-lg font-black uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-red-800 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed sm:text-2xl"
              >
                {isSubmitting ? "ENVIANDO..." : t.btnSend}
              </button>
            </motion.form>

          </div>
        </div>

      </section>
    </MotionConfig>
  );
}
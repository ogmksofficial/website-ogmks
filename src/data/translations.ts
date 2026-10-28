export type Language = "PT" | "EN" | "ES";

export interface HeroTranslations {
  aka: string;
  tagline: string;
  ctaShow: string;
  ctaRelease: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    releases: string;
    clips: string;
    agenda: string;
    merch: string;
    presskit: string;
    contact: string;
  };
  hero: HeroTranslations;
  release: {
    title: string;
    subtitle: string;
    coverAlt: string;
    listen: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    ctaShow: string;
  };
  videos: {
    title: string;
    subtitle: string;
    playPrompt: string;
    scrollLeft: string;
    scrollRight: string;
  };
  agenda: {
    title: string;
    subtitle: string;
    upcoming: string;
    past: string;
    freeTicket: string;
    atDoor: string;
    soldOut: string;
  };
  merch: {
    tag: string;
    title: string;
    subtitle: string;
    cta: string;
    disclaimer: string;
    whatsappMessage: string;
  };
  presskit: {
    tag: string;
    title: string;
    description: string;
    genres: string;
    definition: string;
    stat1Num: string;
    stat1Label: string;
    stat2Num: string;
    stat2Label: string;
    stat3Num: string;
    stat3Label: string;
    btnPresskit: string;
    btnPhotos: string;
    btnLogo: string;
    btnVideos: string;
  };
  contact: {
    ctaTitle: string;
    ctaSubtitle: string;
    btnManager: string;
    formTitle: string;
    formDescription: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
    btnSend: string;
  };
  footer: {
    tagline: string;
    contactTitle: string;
    prodTitle: string;
    prodDesc: string;
    address: string;
    seeMaps: string;
    ctaShow: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  PT: {
    nav: {
      home: "HOME",
      about: "SOBRE",
      releases: "LANÇAMENTOS",
      clips: "CLIPES",
      agenda: "AGENDA",
      merch: "MERCH",
      presskit: "PRESSKIT",
      contact: "CONTATO",
    },
    hero: {
      aka: "VULGO (DOIS BIGODE)",
      tagline: "TRAP · RAP · DETROIT · LIFESTYLE",
      ctaShow: "CONTRATE O SHOW",
      ctaRelease: "ÚLTIMO LANÇAMENTO",
    },
    release: {
      title: "ÚLTIMO LANÇAMENTO",
      subtitle: "Disponível em todas as plataformas.",
      coverAlt: "Capa do single Resumo, OG.MK$, prod. D' Mazo",
      listen: "Ouvir Resumo no Spotify",
    },
    about: {
      title: "QUEM É OG.MK$?",
      subtitle: "DA ZONA NORTE PARA A CENA DO TRAP NACIONAL!",
      p1: "OG.MK$ CONHECIDO COMO 'DOIS BIGODE' é um rapper e compositor independente de São Paulo que transforma vivências, ambição e lifestyle em música, construindo sua identidade na cena do trap nacional.",
      p2: "Com lançamentos como “Resumo”, “Refs” e “Faturando”, o artista apresenta uma sonoridade versátil, combinando referências da cultura urbana, autenticidade e atitude.",
      p3: "Sua trajetória inclui participação na Virada Cultural de São Paulo, em 2025, além de colaborações com artistas da cena independente, fortalecendo sua presença no rap.",
      ctaShow: "CONTRATE O SHOW",
    },
    videos: {
      title: "ASSISTA AGORA",
      subtitle: "Os clipes oficiais do OG.MK$",
      playPrompt: "Clique para assistir",
      scrollLeft: "Rolar para a esquerda",
      scrollRight: "Rolar para a direita",
    },
    agenda: {
      title: "AGENDA DE SHOWS",
      subtitle: "Próximos Eventos",
      upcoming: "Próximos Shows",
      past: "Shows Anteriores",
      freeTicket: "ENTRADA GRATUITA",
      atDoor: "INGRESSOS NA PORTA",
      soldOut: "ESGOTADO",
    },
    merch: {
      tag: "PRODUTOS",
      title: "OFICIAIS",
      subtitle: "Vista o som. Leve o OG.MK$",
      cta: "SAIBA MAIS",
      disclaimer: "*COLEÇÃO EM BREVE — ENTRE NA LISTA DE ESPERA PARA GARANTIR O SEU MERCH!",
      whatsappMessage: "Olá! Quero entrar na lista de espera para o produto: ",
    },
    presskit: {
      tag: "MATERIAL OFICIAL",
      title: "PRESS KIT",
      description: "Fotos, release, logo e informações oficiais do OG.MK$ para divulgação e contratação.",
      genres: "Trap, Drill e Detroit Trap.",
      definition: "A sonoridade que define o underground paulistano.",
      stat1Num: "50K+",
      stat1Label: "PLAYS E VIEWS",
      stat2Num: "30+",
      stat2Label: "FAIXAS E PARTICIPAÇÕES",
      stat3Num: "29+",
      stat3Label: "EVENTOS/SHOWS",
      btnPresskit: "BAIXAR PRESS KIT",
      btnPhotos: "BAIXAR FOTOS",
      btnLogo: "BAIXAR LOGO",
      btnVideos: "VIDEOS / REELS",
    },
    contact: {
      ctaTitle: "LEVE O SHOW DO OG.MK$ PARA SEU EVENTO!",
      ctaSubtitle: "OG.MK$ (conhecido como dois bigode) é um rapper e compositor independente, disponível para shows, festivais e presença VIP em todo o Brasil.",
      btnManager: "FALE COM O MANAGER",
      formTitle: "ENTRE EM CONTATO",
      formDescription: "Preencha o formulário para orçamentos de shows, eventos, parcerias ou para entrar na lista de espera exclusiva do Merch.",
      placeholderName: "SEU NOME COMPLETO",
      placeholderEmail: "E-MAIL DE CONTATO",
      placeholderMessage: "DIGITE AQUI SUA MENSAGEM",
      btnSend: "ENVIAR MENSAGEM",
    },
    footer: {
      tagline: "Trap, Drill & Detroit Trap.\nDo Jardim Brasil pro Mundo!",
      contactTitle: "CONTATO",
      prodTitle: "PONTO PRODUÇÕES",
      prodDesc: "Produtora musical · Desde 2022\nGerenciamento e produção do OG.MK$",
      address: "R. Basílio Alves Morango, 933 — Jardim Brasil\nSão Paulo · SP — 02222-001",
      seeMaps: "VER NO GOOGLE MAPS",
      ctaShow: "CONTRATE O SHOW",
      copyright: "© 2026 OG.MK$ | Todos os direitos reservados | Developed by Abner Simão Design | Política de privacidade | Termos de uso.",
    },
  },
  EN: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      releases: "RELEASES",
      clips: "CLIPS",
      agenda: "TOUR",
      merch: "MERCH",
      presskit: "PRESSKIT",
      contact: "CONTACT",
    },
    hero: {
      aka: "AKA (DOIS BIGODE)",
      tagline: "TRAP · RAP · DETROIT · LIFESTYLE",
      ctaShow: "BOOK A SHOW",
      ctaRelease: "LATEST RELEASE",
    },
    release: {
      title: "LATEST RELEASE",
      subtitle: "Available on all platforms.",
      coverAlt: "Cover art for the single Resumo, OG.MK$, prod. D' Mazo",
      listen: "Listen to Resumo on Spotify",
    },
    about: {
      title: "WHO IS OG.MK$?",
      subtitle: "FROM THE NORTH ZONE TO THE NATIONAL TRAP SCENE!",
      p1: "OG.MK$ KNOWN AS 'DOIS BIGODE' is an independent rapper and songwriter from São Paulo who turns real-life stories, ambition, and lifestyle into sound, building his identity in the national trap scene.",
      p2: "With releases like “Resumo”, “Refs”, and “Faturando”, he delivers a versatile sonic identity blending street culture, authenticity, and raw attitude.",
      p3: "His journey includes performing at São Paulo's Virada Cultural in 2025, alongside key collaborations in the independent scene.",
      ctaShow: "BOOK A SHOW",
    },
    videos: {
      title: "WATCH NOW",
      subtitle: "Official music videos by OG.MK$",
      playPrompt: "Click to watch",
      scrollLeft: "Scroll left",
      scrollRight: "Scroll right",
    },
    agenda: {
      title: "SHOW SCHEDULE",
      subtitle: "Upcoming Events",
      upcoming: "Upcoming Shows",
      past: "Past Shows",
      freeTicket: "FREE ADMISSION",
      atDoor: "TICKETS AT THE DOOR",
      soldOut: "SOLD OUT",
    },
    merch: {
      tag: "MERCH",
      title: "OFFICIAL",
      subtitle: "Wear the sound. Carry OG.MK$",
      cta: "LEARN MORE",
      disclaimer: "*COLLECTION COMING SOON — JOIN THE WAITLIST TO SECURE YOUR MERCH!",
      whatsappMessage: "Hello! I want to join the waitlist for the product: ",
    },
    presskit: {
      tag: "OFFICIAL MATERIAL",
      title: "PRESS KIT",
      description: "Official photos, bio, logo, and info for OG.MK$ booking and press coverage.",
      genres: "Trap, Drill & Detroit Trap.",
      definition: "The sound that defines São Paulo's underground scene.",
      stat1Num: "50K+",
      stat1Label: "PLAYS & VIEWS",
      stat2Num: "30+",
      stat2Label: "TRACKS & FEATS",
      stat3Num: "29+",
      stat3Label: "EVENTS & SHOWS",
      btnPresskit: "DOWNLOAD PRESS KIT",
      btnPhotos: "DOWNLOAD PHOTOS",
      btnLogo: "DOWNLOAD LOGO",
      btnVideos: "VIDEOS / REELS",
    },
    contact: {
      ctaTitle: "BRING OG.MK$ TO YOUR EVENT!",
      ctaSubtitle: "OG.MK$ (known as dois bigode) is an independent rapper and songwriter, available for shows, festivals, and VIP appearances throughout Brazil.",
      btnManager: "TALK TO MANAGER",
      formTitle: "GET IN TOUCH",
      formDescription: "Fill out the form for show bookings, events, partnerships, or to join the exclusive Merch waitlist.",
      placeholderName: "YOUR FULL NAME",
      placeholderEmail: "CONTACT EMAIL",
      placeholderMessage: "TYPE YOUR MESSAGE HERE",
      btnSend: "SEND MESSAGE",
    },
    footer: {
      tagline: "Trap, Drill & Detroit Trap.\nFrom Jardim Brasil to the World!",
      contactTitle: "CONTACT",
      prodTitle: "PONTO PRODUÇÕES",
      prodDesc: "Music Production · Since 2022\nOG.MK$ Management & Production",
      address: "R. Basílio Alves Morango, 933 — Jardim Brasil\nSão Paulo · SP — 02222-001",
      seeMaps: "SEE ON GOOGLE MAPS",
      ctaShow: "BOOK A SHOW",
      copyright: "© 2026 OG.MK$ | All rights reserved | Developed by Abner Simão Design | Privacy Policy | Terms of Use.",
    },
  },
  ES: {
    nav: {
      home: "INICIO",
      about: "SOBRE",
      releases: "LANZAMIENTOS",
      clips: "VIDEOS",
      agenda: "AGENDA",
      merch: "MERCH",
      presskit: "PRESSKIT",
      contact: "CONTACTO",
    },
    hero: {
      aka: "AKA (DOIS BIGODE)",
      tagline: "TRAP · RAP · DETROIT · LIFESTYLE",
      ctaShow: "CONTRATAR SHOW",
      ctaRelease: "ÚLTIMO LANZAMIENTO",
    },
    release: {
      title: "ÚLTIMO LANZAMIENTO",
      subtitle: "Disponible en todas las plataformas.",
      coverAlt: "Portada del sencillo Resumo, OG.MK$, prod. D' Mazo",
      listen: "Escuchar Resumo en Spotify",
    },
    about: {
      title: "¿QUIÉN ES OG.MK$?",
      subtitle: "¡DE LA ZONA NORTE A LA ESCENA DEL TRAP NACIONAL!",
      p1: "OG.MK$ CONOCIDO COMO 'DOIS BIGODE' es un rapero y compositor independiente de São Paulo que transforma vivencias, ambición y estilo de vida en música, construyendo su identidad en la escena del trap nacional.",
      p2: "Con lanzamientos como “Resumo”, “Refs” y “Faturando”, el artista presenta una sonoridad versátil que combina cultura urbana, autenticidad y actitud.",
      p3: "Su trayectoria incluye su participación en la Virada Cultural de São Paulo en 2025, además de colaboraciones en la escena independiente.",
      ctaShow: "CONTRATAR SHOW",
    },
    videos: {
      title: "MIRA AHORA",
      subtitle: "Los videos oficiales de OG.MK$",
      playPrompt: "Haz clic para ver",
      scrollLeft: "Desplazar a la izquierda",
      scrollRight: "Desplazar a la derecha",
    },
    agenda: {
      title: "AGENDA DE SHOWS",
      subtitle: "Próximos Eventos",
      upcoming: "Próximos Shows",
      past: "Shows Anteriores",
      freeTicket: "ENTRADA GRATUITA",
      atDoor: "ENTRADAS EN PUERTA",
      soldOut: "AGOTADO",
    },
    merch: {
      tag: "PRODUCTOS",
      title: "OFICIALES",
      subtitle: "Viste el sonido. Lleva OG.MK$",
      cta: "SABER MÁS",
      disclaimer: "¡COLECCIÓN PRÓXIMAMENTE — ÚNETE A LA LISTA DE ESPERA PARA ASEGURAR TU MERCH!",
      whatsappMessage: "¡Hola! Quiero unirme a la lista de espera para el producto: ",
    },
    presskit: {
      tag: "MATERIAL OFICIAL",
      title: "PRESS KIT",
      description: "Fotos, biografía, logo e información oficial de OG.MK$ para difusión y contratación.",
      genres: "Trap, Drill y Detroit Trap.",
      definition: "El sonido que define el underground paulista.",
      stat1Num: "50K+",
      stat1Label: "REPRODUCCIONES Y VIEWS",
      stat2Num: "30+",
      stat2Label: "CANCIONES Y FEATS",
      stat3Num: "29+",
      stat3Label: "EVENTOS Y SHOWS",
      btnPresskit: "DESCARGAR PRESS KIT",
      btnPhotos: "DESCARGAR FOTOS",
      btnLogo: "DESCARGAR LOGO",
      btnVideos: "VIDEOS / REELS",
    },
    contact: {
      ctaTitle: "¡LLEVA EL SHOW DE OG.MK$ A TU EVENTO!",
      ctaSubtitle: "OG.MK$ (conocido como dois bigode) es un rapero y compositor independiente, disponible para shows, festivales y presencia VIP en todo Brasil.",
      btnManager: "HABLAR CON EL MANAGER",
      formTitle: "PONTE EN CONTACTO",
      formDescription: "Rellena el formulario para presupuestos de shows, eventos, alianzas o para unirte a la lista de espera del Merch.",
      placeholderName: "TU NOMBRE COMPLETO",
      placeholderEmail: "CORREO DE CONTACTO",
      placeholderMessage: "ESCRIBE AQUÍ TU MENSAJE",
      btnSend: "ENVIAR MENSAJE",
    },
    footer: {
      tagline: "Trap, Drill & Detroit Trap.\n¡Del Jardim Brasil al Mundo!",
      contactTitle: "CONTACTO",
      prodTitle: "PONTO PRODUÇÕES",
      prodDesc: "Productora musical · Desde 2022\nGestión y producción de OG.MK$",
      address: "R. Basílio Alves Morango, 933 — Jardim Brasil\nSão Paulo · SP — 02222-001",
      seeMaps: "VER EN GOOGLE MAPS",
      ctaShow: "CONTRATAR SHOW",
      copyright: "© 2026 OG.MK$ | Todos los derechos reservados | Developed by Abner Simão Design | Política de privacidad | Términos de uso.",
    },
  },
};
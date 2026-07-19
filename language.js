(function () {
  "use strict";

  const translations = {
    sl: {
      nav_home: "Domov",
      nav_services: "Storitve",
      nav_about: "O nas",
      nav_contact: "Kontakt",
      hero_eyebrow: "IT PARTNER · ZDRUŽENO KRALJESTVO",
      hero_title: "Digitalne IT rešitve<br>za prihodnost",
      hero_lead: "TUROS je tehnološko podjetje s sedežem v Združenem kraljestvu, ki pomaga podjetjem izboljšati poslovanje z modernimi digitalnimi rešitvami.",
      hero_cta: "Kontaktirajte nas",
      hero_cta_secondary: "Naše storitve",
      services_eyebrow: "KAJ POČNEMO",
      services_title: "Naše storitve",
      service1_title: "Razvoj programske opreme",
      service1_desc: "Izdelava spletnih aplikacij in rešitev po meri za podjetja.",
      service2_title: "AI rešitve",
      service2_desc: "Uporaba umetne inteligence za izboljšanje poslovnih procesov.",
      service3_title: "Avtomatizacija poslovanja",
      service3_desc: "Digitalizacija ponavljajočih se opravil in optimizacija dela.",
      service4_title: "IT svetovanje",
      service4_desc: "Pomagamo podjetjem izbrati prave tehnološke rešitve.",
      about_eyebrow: "KDO SMO",
      about_title: "O podjetju TUROS",
      about_text: "TUROS je IT podjetje, usmerjeno v razvoj programske opreme, digitalizacijo in sodobne tehnološke rešitve. Naš cilj je pomagati podjetjem uporabljati tehnologijo na enostaven in učinkovit način.",
      contact_eyebrow: "POVEŽIVA SE",
      contact_title: "Kontakt",
      contact_whatsapp_label: "WhatsApp",
      contact_country: "Združeno kraljestvo",
      footer_rights: "Vse pravice pridržane."
    },
    en: {
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About",
      nav_contact: "Contact",
      hero_eyebrow: "IT PARTNER · UNITED KINGDOM",
      hero_title: "Digital IT solutions<br>for the future",
      hero_lead: "TUROS is a technology company based in the United Kingdom, helping businesses improve their operations with modern digital solutions.",
      hero_cta: "Contact us",
      hero_cta_secondary: "Our services",
      services_eyebrow: "WHAT WE DO",
      services_title: "Our services",
      service1_title: "Software development",
      service1_desc: "Building custom web applications and solutions for businesses.",
      service2_title: "AI solutions",
      service2_desc: "Using artificial intelligence to improve business processes.",
      service3_title: "Business automation",
      service3_desc: "Digitalising repetitive tasks and optimising workflows.",
      service4_title: "IT consulting",
      service4_desc: "Helping businesses choose the right technology solutions.",
      about_eyebrow: "WHO WE ARE",
      about_title: "About TUROS",
      about_text: "TUROS is an IT company focused on software development, digitalisation and modern technology solutions. Our goal is to help businesses use technology in a simple and effective way.",
      contact_eyebrow: "LET'S CONNECT",
      contact_title: "Contact",
      contact_whatsapp_label: "WhatsApp",
      contact_country: "United Kingdom",
      footer_rights: "All rights reserved."
    },
    de: {
      nav_home: "Start",
      nav_services: "Leistungen",
      nav_about: "Über uns",
      nav_contact: "Kontakt",
      hero_eyebrow: "IT-PARTNER · VEREINIGTES KÖNIGREICH",
      hero_title: "Digitale IT-Lösungen<br>für die Zukunft",
      hero_lead: "TUROS ist ein Technologieunternehmen mit Sitz im Vereinigten Königreich, das Unternehmen hilft, ihre Abläufe mit modernen digitalen Lösungen zu verbessern.",
      hero_cta: "Kontaktieren Sie uns",
      hero_cta_secondary: "Unsere Leistungen",
      services_eyebrow: "WAS WIR TUN",
      services_title: "Unsere Leistungen",
      service1_title: "Softwareentwicklung",
      service1_desc: "Individuelle Webanwendungen und Lösungen für Unternehmen.",
      service2_title: "KI-Lösungen",
      service2_desc: "Einsatz künstlicher Intelligenz zur Verbesserung von Geschäftsprozessen.",
      service3_title: "Geschäftsautomatisierung",
      service3_desc: "Digitalisierung wiederkehrender Aufgaben und Optimierung der Arbeit.",
      service4_title: "IT-Beratung",
      service4_desc: "Wir helfen Unternehmen, die richtigen Technologielösungen zu wählen.",
      about_eyebrow: "WER WIR SIND",
      about_title: "Über TUROS",
      about_text: "TUROS ist ein IT-Unternehmen mit Fokus auf Softwareentwicklung, Digitalisierung und moderne Technologielösungen. Unser Ziel ist es, Unternehmen den einfachen und effizienten Einsatz von Technologie zu ermöglichen.",
      contact_eyebrow: "KONTAKT AUFNEHMEN",
      contact_title: "Kontakt",
      contact_whatsapp_label: "WhatsApp",
      contact_country: "Vereinigtes Königreich",
      footer_rights: "Alle Rechte vorbehalten."
    },
    it: {
      nav_home: "Home",
      nav_services: "Servizi",
      nav_about: "Chi siamo",
      nav_contact: "Contatti",
      hero_eyebrow: "PARTNER IT · REGNO UNITO",
      hero_title: "Soluzioni IT digitali<br>per il futuro",
      hero_lead: "TUROS è un'azienda tecnologica con sede nel Regno Unito, che aiuta le imprese a migliorare le proprie attività con soluzioni digitali moderne.",
      hero_cta: "Contattaci",
      hero_cta_secondary: "I nostri servizi",
      services_eyebrow: "COSA FACCIAMO",
      services_title: "I nostri servizi",
      service1_title: "Sviluppo software",
      service1_desc: "Realizzazione di applicazioni web e soluzioni su misura per le aziende.",
      service2_title: "Soluzioni AI",
      service2_desc: "Utilizzo dell'intelligenza artificiale per migliorare i processi aziendali.",
      service3_title: "Automazione aziendale",
      service3_desc: "Digitalizzazione delle attività ripetitive e ottimizzazione del lavoro.",
      service4_title: "Consulenza IT",
      service4_desc: "Aiutiamo le aziende a scegliere le soluzioni tecnologiche giuste.",
      about_eyebrow: "CHI SIAMO",
      about_title: "L'azienda TUROS",
      about_text: "TUROS è un'azienda IT orientata allo sviluppo software, alla digitalizzazione e alle moderne soluzioni tecnologiche. Il nostro obiettivo è aiutare le aziende a utilizzare la tecnologia in modo semplice ed efficace.",
      contact_eyebrow: "RESTIAMO IN CONTATTO",
      contact_title: "Contatti",
      contact_whatsapp_label: "WhatsApp",
      contact_country: "Regno Unito",
      footer_rights: "Tutti i diritti riservati."
    },
    hr: {
      nav_home: "Početna",
      nav_services: "Usluge",
      nav_about: "O nama",
      nav_contact: "Kontakt",
      hero_eyebrow: "IT PARTNER · UJEDINJENO KRALJEVSTVO",
      hero_title: "Digitalna IT rješenja<br>za budućnost",
      hero_lead: "TUROS je tehnološka tvrtka sa sjedištem u Ujedinjenom Kraljevstvu koja pomaže tvrtkama poboljšati poslovanje modernim digitalnim rješenjima.",
      hero_cta: "Kontaktirajte nas",
      hero_cta_secondary: "Naše usluge",
      services_eyebrow: "ČIME SE BAVIMO",
      services_title: "Naše usluge",
      service1_title: "Razvoj softvera",
      service1_desc: "Izrada web aplikacija i rješenja po mjeri za tvrtke.",
      service2_title: "AI rješenja",
      service2_desc: "Korištenje umjetne inteligencije za poboljšanje poslovnih procesa.",
      service3_title: "Automatizacija poslovanja",
      service3_desc: "Digitalizacija repetitivnih zadataka i optimizacija rada.",
      service4_title: "IT savjetovanje",
      service4_desc: "Pomažemo tvrtkama odabrati prava tehnološka rješenja.",
      about_eyebrow: "TKO SMO",
      about_title: "O tvrtki TUROS",
      about_text: "TUROS je IT tvrtka usmjerena na razvoj softvera, digitalizaciju i suvremena tehnološka rješenja. Naš cilj je pomoći tvrtkama koristiti tehnologiju na jednostavan i učinkovit način.",
      contact_eyebrow: "POVEŽIMO SE",
      contact_title: "Kontakt",
      contact_whatsapp_label: "WhatsApp",
      contact_country: "Ujedinjeno Kraljevstvo",
      footer_rights: "Sva prava pridržana."
    }
  };

  const STORAGE_KEY = "turos_lang";

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.sl;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    const select = document.getElementById("language");
    if (select) select.value = lang;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }
  }

  function detectInitialLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch (e) {
      /* ignore */
    }
    const browserLang = (navigator.language || "sl").slice(0, 2);
    return translations[browserLang] ? browserLang : "sl";
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(detectInitialLanguage());

    const select = document.getElementById("language");
    if (select) {
      select.addEventListener("change", (e) => applyLanguage(e.target.value));
    }

    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });

      mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileNav.classList.remove("open");
          menuToggle.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  });
})();
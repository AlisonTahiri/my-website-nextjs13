export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Crafting digital experiences",
      subtitle: "at the intersection of",
      highlight1: "code",
      highlight2: "design",
      cta: "Let's Talk",
      resume: "View Resume",
      badge: "Available for Projects",
      typewriter: [
        "web applications",
        "design systems",
        "offline-first PWAs",
        "scalable frontends",
        "React ecosystems",
      ],
      building: "I build",
    },
    about: {
      title: "About me",
      card1Title: "Problem Solver",
      card1Text:
        "Bridging the gap between technical precision and business objectives with an analytical, results-driven approach.",
      card2Title: "Tech Stack",
      card2Text:
        "Specialized in the React ecosystem — Next.js, TypeScript, Tailwind — building performant, scalable applications.",
      card3Title: "Multilingual",
      card3Text:
        "Communicating across cultures in 5 languages, bringing a global perspective to every project.",
      card4Title: "Enterprise Ready",
      card4Text:
        "A unique blend of software engineering and financial management, delivering structured, reliable solutions.",
    },
    projects: {
      title: "Featured Projects",
      viewLive: "View Live",
    },
    skills: {
      title: "Skills & Technologies",
    },
    languages: {
      title: "Languages I Speak",
    },
    experience: {
      title: "Experience",
    },
    contact: {
      title: "Get in Touch",
      description:
        "Have a project in mind? Let's build something great together.",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      submit: "Send Message",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with ❤️ and AI",
    },
    chat: {
      title: "Ask me anything",
      placeholder: "Ask about skills, experience...",
      send: "Send",
      poweredBy: "AI-Powered Assistant",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      projects: "Projekte",
      skills: "Fähigkeiten",
      experience: "Erfahrung",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Digitale Erlebnisse gestalten",
      subtitle: "an der Schnittstelle von",
      highlight1: "Code",
      highlight2: "Design",
      cta: "Kontakt aufnehmen",
      resume: "Lebenslauf ansehen",
      badge: "Verfügbar für Projekte",
      typewriter: [
        "Webanwendungen",
        "Design-Systeme",
        "Offline-First PWAs",
        "skalierbare Frontends",
        "React-Ökosysteme",
      ],
      building: "Ich baue",
    },
    about: {
      title: "Über mich",
      card1Title: "Problemlöser",
      card1Text:
        "Brücke zwischen technischer Präzision und Geschäftszielen mit einem analytischen, ergebnisorientierten Ansatz.",
      card2Title: "Tech Stack",
      card2Text:
        "Spezialisiert auf das React-Ökosystem — Next.js, TypeScript, Tailwind — für performante, skalierbare Anwendungen.",
      card3Title: "Mehrsprachig",
      card3Text:
        "Kommunikation über Kulturen hinweg in 5 Sprachen, mit einer globalen Perspektive für jedes Projekt.",
      card4Title: "Enterprise-fähig",
      card4Text:
        "Eine einzigartige Kombination aus Softwareentwicklung und Finanzmanagement für strukturierte, zuverlässige Lösungen.",
    },
    projects: {
      title: "Ausgewählte Projekte",
      viewLive: "Live ansehen",
    },
    skills: {
      title: "Fähigkeiten & Technologien",
    },
    languages: {
      title: "Sprachen",
    },
    experience: {
      title: "Berufserfahrung",
    },
    contact: {
      title: "Kontakt",
      description:
        "Haben Sie ein Projekt im Sinn? Lassen Sie uns etwas Großartiges zusammen bauen.",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Ihre Nachricht",
      submit: "Nachricht senden",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      builtWith: "Erstellt mit ❤️ und KI",
    },
    chat: {
      title: "Fragen Sie mich",
      placeholder: "Fragen zu Fähigkeiten, Erfahrung...",
      send: "Senden",
      poweredBy: "KI-gestützter Assistent",
    },
  },
} as const;

export type Locale = keyof typeof translations;

// Deep-writable to normalize readonly string literals across locales
type DeepWritable<T> = {
  -readonly [K in keyof T]: T[K] extends readonly (infer U)[]
    ? U[]
    : T[K] extends object
    ? DeepWritable<T[K]>
    : T[K] extends string
    ? string
    : T[K];
};

export type TranslationKeys = DeepWritable<typeof translations.en>;

/**
 * Data Layer - Developer/Portfolio Page Redesign
 * 
 * Contenu statique pour la page vitrine développeur
 * Aligné avec le Google Business Profile de Loup Aubour
 */

export const developerHero = {
  eyebrow: "DÉVELOPPEUR WEB INDÉPENDANT",
  name: "Loup Aubour",
  title: "Concepteur de Sites Web",
  tagline: "Je ne vends pas de la technique, je vends de la visibilité",
  description: "Développeur web indépendant basé à Boulogne-Billancourt. J'aide les commerçants, artisans et professions libérales à trouver plus de clients grâce à Internet. Sites ultra-rapides, parfaitement lisibles sur mobile, et optimisés pour Google. Résultat : Performance Google 100/100 et première page Google pour mes clients.",
  image: {
    src: "/images/redesign/hero-developer-800.jpg",
    srcset: "/images/redesign/hero-developer-400.jpg 400w, /images/redesign/hero-developer-800.jpg 800w, /images/redesign/hero-developer-1200.jpg 1200w",
    alt: "Loup Aubour - Développeur web indépendant"
  },
  cta: {
    primary: {
      text: "Voir mes Réalisations",
      href: "#projects"
    },
    secondary: {
      text: "Discuter de votre projet",
      href: "#contact"
    }
  }
};

export const developerServices = {
  title: "Mes Services",
  subtitle: "Pas d'agence, pas d'intermédiaire. Un interlocuteur unique, réactif et pédagogique.",
  services: [
    {
      id: "creation",
      name: "Création de site internet",
      description: "Création d'un site vitrine moderne avec Performance Google 100/100. Idéal pour les commerçants, artisans et professions libérales qui veulent être visibles en ligne.",
      icon: "Code",
      color: "from-cyan-500 to-blue-500",
      price: "À partir de 2 200 €",
      features: [
        "Un site moderne qui inspire confiance à vos clients",
        "Performance Google 100/100 — votre site se charge instantanément",
        "Visible sur Google dès la mise en ligne",
        "Hébergement 1 an offert"
      ]
    },
    {
      id: "refonte",
      name: "Refonte de site web",
      description: "Modernisation complète de votre site existant. Amélioration de la vitesse, du design et du référencement pour attirer plus de clients.",
      icon: "Wrench",
      color: "from-purple-500 to-pink-500",
      price: "À partir de 1 800 €",
      features: [
        "Diagnostic complet de votre site actuel",
        "Nouveau design professionnel et moderne",
        "Vos textes et photos transférés sans rien perdre",
        "Un site plus rapide qui remonte sur Google"
      ]
    },
    {
      id: "seo",
      name: "Référencement Google (SEO)",
      description: "Optimisation de votre site pour apparaître en première page Google dans votre zone géographique. SEO local pour capter les clients près de chez vous.",
      icon: "Eye",
      color: "from-green-500 to-emerald-500",
      price: "À partir de 1 200 €",
      features: [
        "Diagnostic complet de votre visibilité Google",
        "Optimisation de votre fiche Google Business",
        "Vous apparaissez quand vos clients cherchent près de chez vous",
        "Rapport de suivi mensuel de vos positions"
      ]
    },
    {
      id: "maintenance",
      name: "Maintenance de site web",
      description: "Maintenance mensuelle de votre site : mises à jour de sécurité, sauvegardes, corrections et petites évolutions pour garder votre site performant.",
      icon: "Cloud",
      color: "from-orange-500 to-red-500",
      price: "À partir de 250 €/mois",
      features: [
        "Votre site toujours à jour et sécurisé",
        "Votre site protégé contre les pannes",
        "Corrections et petites évolutions incluses",
        "Support réactif — réponse sous 24h"
      ]
    }
  ]
};

export const developerProjects = {
  title: "Mes Réalisations",
  subtitle: "Des sites qui génèrent des résultats concrets pour mes clients",
  projects: [
    {
      id: "loupaubour",
      name: "loupaubour.fr",
      description: "Mon site professionnel. Vitrine de mes services et portfolio. Conçu pour démontrer mon expertise en performance web et référencement local.",
      tags: ["Site vitrine", "SEO Local", "Performance 100/100", "Responsive"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      metrics: [
        { label: "Performance", value: "100/100" },
        { label: "SEO", value: "100/100" },
        { label: "Mobile", value: "100/100" }
      ],
      links: {
        demo: "https://loupaubour.fr"
      }
    },
    {
      id: "lepanierfromager",
      name: "lepanierfromager.fr",
      description: "Cette artisane fromagère n'avait aucune présence en ligne. Aujourd'hui, ses clients la trouvent en un clic sur Google grâce à son site vitrine optimisé.",
      tags: ["Artisan", "SEO Local", "Site vitrine", "Google Business"],
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&h=400&fit=crop",
      metrics: [
        { label: "Performance", value: "100/100" },
        { label: "SEO", value: "100/100" },
        { label: "Visibilité", value: "4× #1 Google" }
      ],
      links: {
        demo: "https://lepanierfromager.fr"
      }
    },
    {
      id: "pixelclash",
      name: "Pixel Clash",
      description: "Projet personnel — Site événementiel pour un championnat retrogaming. Démo technique de mes compétences en architecture web moderne et optimisation performance.",
      tags: ["Démo technique", "Événementiel", "Astro", "React"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      metrics: [
        { label: "Performance", value: "98/100" },
        { label: "Accessibilité", value: "100/100" },
        { label: "SEO", value: "100/100" }
      ],
      links: {
        demo: "https://pixel-clash.netlify.app"
      }
    }
  ]
};

export const developerContact = {
  title: "Discutons de Votre Projet",
  description: "Pas d'agence, pas d'intermédiaire. Contactez-moi directement pour un accompagnement réactif, pédagogique et sans jargon technique.",
  methods: [
    {
      id: "phone",
      label: "Téléphone",
      value: "06 08 84 86 82",
      icon: "Phone",
      href: "tel:+33608848682"
    },
    {
      id: "website",
      label: "Site web",
      value: "loupaubour.fr",
      icon: "ExternalLink",
      href: "https://loupaubour.fr"
    },
    {
      id: "github",
      label: "GitHub",
      value: "@Okamixtape",
      icon: "Github",
      href: "https://github.com/Okamixtape"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "Loup Aubour",
      icon: "Linkedin",
      href: "https://linkedin.com/in/loupaubour"
    }
  ],
  cta: {
    text: "Demander un devis gratuit",
    href: "https://loupaubour.fr/#contact"
  }
};

export const developerSkills = {
  title: "Pourquoi Me Choisir",
  skills: [
    {
      id: "performance",
      name: "Performance Google 100/100",
      description: "Vos visiteurs ne patientent pas. Mes sites se chargent en moins d'une seconde, ce qui améliore votre référencement et votre taux de conversion.",
      icon: "Zap",
      level: 100
    },
    {
      id: "seo",
      name: "Visibilité sur Google",
      description: "Être en première page Google dans votre ville, c'est possible. J'optimise chaque site pour le référencement local et Google Business Profile.",
      icon: "Eye",
      level: 95
    },
    {
      id: "mobile",
      name: "Parfait sur Mobile",
      description: "Plus de 60% de vos clients vous trouvent sur leur téléphone. Chaque site est conçu mobile-first pour une expérience irréprochable.",
      icon: "Box",
      level: 100
    },
    {
      id: "accompagnement",
      name: "Accompagnement Sur-Mesure",
      description: "Un interlocuteur unique du début à la fin. Devis détaillé sous 48h, support 3 mois gratuit après livraison, et des explications sans jargon technique.",
      icon: "Cloud",
      level: 95
    }
  ]
};

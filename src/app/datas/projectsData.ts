import {ProjectFilterTypes, ProjectTypes} from "../definitions/types";

export const projectsFiltersData: ProjectFilterTypes[] = [
  {id: 1, label: "Tous mes projets", value: "all", icon: "widget"},
  {id: 2, label: "Développement", value: "DEVELOPPEMENT", icon: "code"},
  {id: 3, label: "UX/UI", value: "UX/UI", icon: "window-frame"},
  {id: 4, label: "Design", value: "DESIGN GRAPHIQUE", icon: "ruler-pen"},
  {id: 5, label: "Marketing", value: "MARKETING", icon: "chart"},
];

export const projectsData: ProjectTypes[] = [
  // PORTFOLIO
  {
    id: 0,
    path: "portfolio",
    category: ["DEVELOPPEMENT", "UX/UI"],
    title: "Portfolio 2025",
    description: "Création de mon portfolio",
    image: "portfolioCover",
    softwares: ["next", "typescript", "tailwind", "figma"],
    banner: "portfolioBanner",
    hashtag: "#Portfolio #Next.js",
    big_description: "Découvrez mon portfolio réalisé en Next.js et Typescript ! ",
    details: {
      softwares: ["next", "typescript", "tailwind", "figma"],
      role: ["Développement", "Maquettage"],
      school_year: "Bachelor Développement Web - Année 3",
    },
    buttons: [
      {
        href: "https://github.com/orinaya/portfolio-2025",
        title: "Lien Github",
        color: "strawberry",
        iconBefore: "github",
      },
    ],
    date: 8,
  },
  //EQUINOX
  {
    id: 1,
    path: "equinox",
    category: ["DEVELOPPEMENT", "DESIGN GRAPHIQUE", "MARKETING"],
    title: "Equinox",
    description: "Création d'un jeu vidéo lors d'une Game Jam",
    image: "equinoxCover",
    softwares: ["godot", "aseprite"],
    banner: "equinoxBanner",
    hashtag: "#GameJam #PitchDeck",
    big_description:
      "L'année dernière, Atlangames nous proposait une Game Jam sur le thème 'frontières'. Le but ? Créer un jeu vidéo et en faire sa promotion en 4 jours, le tout en concurrence avec 17 autres écoles. De cette semaine est né 'Equinox', notre jeu de plateforme 2D. Il met en scène Nox, un petit chat décédé qui essaie de récupérer ses 7 vies restantes en traversant la frontière entre paradis et enfer. Avec ce jeu, nous remportons pour MyDigitalSchool Nantes, l'Award de la Meilleure Direction Artistique ! À vous de jouer désormais ! 🎮",
    details: {
      softwares: ["godot", "aseprite"],
      role: ["Pitch Deck Manager", "Game Design"],
      team: ["Erwan Duchêne", "Erwann Michaud de Perier", "Matilin Noël"],
      teamLink: [
        "https://www.linkedin.com/in/erwan-duch%C3%AAne/",
        "https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/",
        "https://www.linkedin.com/in/matilin-noel/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    buttons: [
      {
        href: "https://margouillat.itch.io/equinox",
        title: "Tester le jeu",
        color: "cremeBrulee",
        iconBefore: "controller",
      },
    ],
    date: 8,
  },
  // JEU ENQUETE API
  {
    id: 2,
    path: "jeu-enquete-api",
    category: ["DEVELOPPEMENT"],
    title: "Jeu d'enquête",
    description: "API Restful",
    image: "apiCover",
    softwares: ["nodejs", "javascript", "express"],
    banner: "apiBanner",
    hashtag: "#API #NodeJS",
    big_description:
      "⚔️ Plongez dans une aventure immersive en explorant les APIs avec ce jeu d'enquête médiéval-fantastique, où vous incarnerez Eldrin Le Protecteur, paladin noble et vénérable.",
    first_image: "apiFirstImage",
    details: {
      softwares: ["nodejs", "javascript", "express", "bcrypt", "jwt"],
      role: ["Développement"],
      school_year: "Bachelor Développement Web - Année 3",
    },
    buttons: [
      {
        href: "https://github.com/orinaya/jeu-enquete-api",
        title: "Lien Github",
        color: "strawberry",
        iconBefore: "github",
      },
    ],
    date: 8,
  },
  //HACK.ME
  {
    id: 3,
    path: "hack-me",
    category: ["DEVELOPPEMENT", "DESIGN GRAPHIQUE"],
    title: "HACK.ME",
    description: "Création d'un jeu de société et son site en anglais",
    image: "hackmeCover",
    softwares: ["javascript", "html", "css"],
    banner: "hackmeBanner",
    hashtag: "#SeriousGame #EnglishGame",
    big_description:
      "Cette année, pendant l'espace d'une semaine, nous avons créé en groupe un serious game en anglais sur le thème de la cybersécurité ! Le but du jeu ? 4 cartes de mot de passe faces cachées à protéger à tout prix des cartes pénalités et attaques, et ce, grâce à des cartes bonus. Et grâce à votre carte spécialiste, maîtriser des bonus pour hacker vos adversaires ! (PS: Ce jeu a gagné la deuxième place nationale)",
    details: {
      softwares: ["javascript", "html", "css"],
      role: ["Développement", "Conception"],
      team: ["Emilien Clément", "Lise Soares", "Manon Chapeau"],

      school_year: "Bachelor Développement Web - Année 3",
    },

    buttons: [
      {
        href: "https://github.com/orinaya/hack-me-serious-game",
        title: "Lien Github",
        iconBefore: "github",
        color: "strawberry",
      },
      {
        href: "https://hack-me-serious-game.vercel.app/",
        title: "Voir le projet",
        iconBefore: "eye",
        color: "cremeBrulee",
      },
    ],
    date: 8,
  },
  // PAUSE CONNECT
  {
    id: 4,
    path: "pause-connect",
    title: "Pause Connect",
    category: ["DEVELOPPEMENT", "UX/UI"],
    description: "Site de sensibilisation addiction",
    image: "pauseConnectCover",
    softwares: ["html", "css", "vue"],
    banner: "pauseConnectBanner",
    hashtag: "#DéveloppementFront #Maquettage #Marketing",
    big_description:
      "Pause Connect est un projet de sensibilisation à l'addiction aux écrans, réalisé dans le cadre de partiels. Ce site propose des données chiffrées, des conseils pratiques, des défis pour réduire l'utilisation des écrans, ainsi qu'un quiz interactif pour évaluer la dépendance potentielle.",
    first_image: "pauseConnectFirstImage",
    details: {
      softwares: ["figma", "html", "css", "vue"],
      role: ["Travail d’équipe", "Développement web", "Maquettage"],
      team: ["Erwann Michaud de Perier", "Erwan Duchêne"],
      teamLink: [
        "https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/",
        "https://www.linkedin.com/in/erwan-duch%C3%AAne/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    buttons: [
      {
        href: "https://github.com/orinaya/pause-connect",
        title: "Lien Github",
        color: "strawberry",
        iconBefore: "github",
      },
      {
        href: "https://pause-connect.vercel.app/",
        title: "Voir le projet",
        iconBefore: "eye",
        color: "cremeBrulee",
      },
    ],
    date: 5,
  },
  // GHIBLI
  {
    id: 5,
    title: "Ghibli",
    path: "ghibli",
    category: ["DEVELOPPEMENT"],
    description: "Site de films",
    image: "ghibliCover",
    softwares: ["vue", "css", "figma"],
    banner: "ghibliBanner",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Ce projet a été réalisé dans le cadre du cours du framework Vue.js. Il recense tous les films du Studio Ghibli récupéré grâce à une API Ghibli. Le but, ici, était d'afficher toutes les données et de donner la possibilité de voir le détail d'un film mais également de filtrer et trier les films.",
    first_image: "ghibliFirstImage",
    details: {
      softwares: ["vue", "css", "figma"],
      role: ["Développement front", "Maquettage"],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    buttons: [
      {
        href: "https://github.com/orinaya/projet-ghibli",
        title: "Lien Github",
        color: "strawberry",
        iconBefore: "github",
      },
      {
        href: "https://projet-ghibli.vercel.app/",
        title: "Voir le projet",
        iconBefore: "eye",
        color: "cremeBrulee",
      },
    ],
    date: 6,
  },
  // MAPEACH
  {
    id: 6,
    path: "mapeach",
    category: ["DEVELOPPEMENT", "UX/UI", "MARKETING"],
    title: "MaPeach",
    description: "Application de rendez-vous pour couple",
    image: "mapeachCover",
    softwares: ["figma", "wordpress"],
    banner: "mapeachBanner",
    hashtag: "#Innovation #RendezVous",
    big_description:
      "Le sujet ? Proposer un produit ou service innovant. Voici, MaPeach, une application recensant des lieux de rendez-vous à destination des couples perdus dans la routine. Elle permet de vivre de nouvelles aventures ludiquement grâce à une roue vous proposant un choix de lieu. Elle vous mettra au défi pour gagner de superbes badges. Grâce à notre galerie, il sera possible de figer ces moments en de merveilleuses photos et pourquoi pas donner l'envie à d'autres couples de l'utiliser ! ",
    details: {
      softwares: ["figma", "wordpress"],
      role: ["Maquettage", "Création Affiches", "Rédaction de contenus", "Gestion de projet"],
      team: ["Erwann Michaud de Perier", "Arthur Ploteau", "Louka Lemonnier", "Mathéo Lebehot"],
      teamLink: [
        "https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/",
        "https://www.linkedin.com/in/arthur-ploteau-314110234/",
        "https://www.linkedin.com/in/louka-lemonnier/",
        "https://www.linkedin.com/in/matheolebehot/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 12,
  },
  // PLANTOPIA
  {
    id: 7,
    path: "plantopia",
    category: ["DEVELOPPEMENT", "UX/UI"],
    title: "Plantopia",
    description: "Site e-commerce de plantes",
    image: "plantopiaCover",
    softwares: ["html", "css", "js", "figma"],
    banner: "plantopiaBanner",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Plantopia est un site e-commerce de plantes et fleurs réalisé en duo dans le cadre du cours d’Intégration web. Il présente une page d'accueil, une page recensant toutes les plantes et fleurs, une page détail du produit et une page panier.",
    first_image: "plantopiaFirstImage",
    details: {
      softwares: ["figma", "html", "css", "js"],
      role: ["Développement web", "Maquettage"],
      team: ["Erwann Michaud de Perier"],
      teamLink: ["https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/"],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    buttons: [
      {
        href: "https://github.com/orinaya/plantopia",
        iconBefore: "github",
        title: "Lien Github",
        color: "strawberry",
      },
    ],
    date: 4,
  },
];

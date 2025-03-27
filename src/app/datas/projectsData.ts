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
    category: ["DEVELOPPEMENT"],
    title: "Portfolio 2025",
    description: "Création de mon portfolio",
    image: "portfolioCover",
    softwares: ["next", "typescript", "tailwindcss"],
    banner: "portfolioBanner",
    hashtag: "#Portfolio #Next.js",
    big_description: "Découvrez mon portfolio réalisé en Next.js et Typescript ! ",
    // first_image: "",
    second_image: "portfolio/portfolio-2.jpg",
    details: {
      softwares: ["next.js", "typescript", "tailwindcss"],
      role: ["Développement"],
      team: ["Seule"],
      // teamLink: [""],
      school_year: "Bachelor Développement Web - Année 3",
    },
    buttons: [
      {
        href: "https://github.com/orinaya/portfolio-2025",
        title: "Github",
        color: "strawberry",
      },
    ],
    date: 8,
  },
  //EQUINOX
  {
    id: 2,
    path: "equinox",
    category: ["DEVELOPPEMENT", "DESIGN GRAPHIQUE", "MARKETING"],
    title: "Equinox",
    description: "Création d'un jeu vidéo lors d'une Game Jam",
    image: "equinoxCover",
    softwares: ["godot", "aseprite"],
    banner: "equinoxBanner",
    hashtag: "#GameJam #PitchDeck",
    big_description:
      "L'année dernière Atlangames nous proposaient une Game Jam sur le thème “𝗳𝗿𝗼𝗻𝘁𝗶𝗲̀𝗿𝗲𝘀”. Le but ? Créer un jeu vidéo et en faire sa promotion en 4 jours, le tout en concurrence avec 17 autres écoles. De cette semaine est né “𝗘𝗾𝘂𝗶𝗻𝗼𝘅”, notre jeu de plateforme 2D. Il met en scène 𝗡𝗼𝘅, un petit chat décédé qui essaie de récupérer ses 7 vies restantes en traversant la frontière entre paradis et enfer. Avec ce jeu, nous remportons pour MyDigitalSchool Nantes, l’𝗔𝘄𝗮𝗿𝗱 𝗱𝗲 𝗹𝗮 𝗠𝗲𝗶𝗹𝗹𝗲𝘂𝗿𝗲 𝗗𝗶𝗿𝗲𝗰𝘁𝗶𝗼𝗻 𝗔𝗿𝘁𝗶𝘀𝘁𝗶𝗾𝘂𝗲 ! À vous de jouer désormais ! 🎮",
    first_image: "",
    second_image: "equinox/equinox-2.jpg",
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
      },
    ],
    date: 8,
  },
  // JEU ENQUETE API
  {
    id: 3,
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
      team: [""],
      teamLink: [""],
      school_year: "Bachelor Développement Web - Année 3",
    },
    buttons: [
      {
        href: "https://github.com/orinaya/jeu-enquete-api",
        title: "Github",
        color: "strawberry",
      },
    ],
    date: 8,
  },
  //HACK.ME
  {
    id: 4,
    path: "hack-me",
    category: ["DEVELOPPEMENT", "DESIGN GRAPHIQUE"],
    title: "HACK.ME",
    description: "Création d'un jeu de société et son site en anglais",
    image: "hackmeCover",
    softwares: ["javascript", "html", "css"],
    banner: "hackmeBanner",
    hashtag: "#SeriousGame #EnglishGame",
    big_description:
      "Cette année, pendant l'espace d'une semaine, nous avons créé en groupe un serious game en anglais sur le thème de la cybersécurité ! Le but du jeu ? 4 cartes de mot de passe faces cachées à protéger à tout prix des cartes pénalités et attaques, et ce, grâce à des cartes bonus. Et grâce à votre carte spécialiste, maîtriser des bonus pour hacker vos adversaires !",
    first_image: "",
    second_image: "hackme/hackme-2.jpg",
    details: {
      softwares: ["javascript", "html", "css"],
      role: ["Développement", "Conception"],
      team: ["Emilien Clément", "Lise Soares", "Manon Chapeau"],
      // teamLink: [
      //   "https://www.linkedin.com/in/",
      //   "https://www.linkedin.com/in/",
      //   "https://www.linkedin.com/in/",
      // ],
      school_year: "Bachelor Développement Web - Année 3",
    },

    buttons: [
      {
        href: "https://github.com/orinaya/hack-me-serious-game",
        title: "Github",
        color: "strawberry",
      },
      {
        href: "https://hack-me-serious-game.vercel.app/",
        title: "Voir le projet",
        color: "cremeBrulee",
      },
    ],
    date: 8,
  },
  // PAUSE CONNECT
  {
    id: 5,
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
    first_image: "pause-connect/pause-connect-1.jpg",
    second_image: "pause-connect/pause-connect-2.jpg",
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
        title: "Github",
        color: "strawberry",
      },
      {
        href: "https://pause-connect.vercel.app/",
        title: "Visiter le site",
        color: "cremeBrulee",
      },
    ],
    date: 5,
  },
  // GHIBLI
  {
    id: 6,
    title: "Ghibli",
    path: "ghibli",
    category: ["DEVELOPPEMENT"],
    description: "Site de films",
    image: "ghibliCover",
    softwares: ["html", "css", "vue"],
    banner: "ghibliBanner",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Ce projet a été réalisé dans le cadre du cours du framework Vue.js. Il recense tous les films du Studio Ghibli récupéré grâce à une API Ghibli. Le but, ici, était d'afficher toutes les données et de donner la possibilité de voir le détail d'un film mais également de filtrer et trier les films.",
    first_image: "ghibli/ghibli-1.jpg",
    second_image: "ghibli/ghibli-2.jpg",
    details: {
      softwares: ["figma", "html", "css", "js"],
      role: ["Développement front", "Maquettage"],
      team: [""],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    buttons: [
      {
        href: "https://github.com/orinaya/projet-ghibli",
        title: "Github",
        color: "strawberry",
      },
      {
        href: "https://projet-ghibli.vercel.app/",
        title: "Voir le projet",
        color: "cremeBrulee",
      },
    ],
    date: 6,
  },
  // MAPEACH
  {
    id: 7,
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
    first_image: "",
    second_image: "mapeach/mapeach-2.jpg",
    details: {
      softwares: ["figma", "wordpress"],
      role: ["Maquettage", "Création Affiches", "Rédaction de contenus", "Gestion de projet"],
      team: ["Erwann Michaud de Perier", "Arthur Ploteau", "Louka Lemonnier", "Mathéo Lebéhot"],
      teamLink: [
        "https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/",
        "https://www.linkedin.com/in/arthur-ploteau-314110234/",
        "https://www.linkedin.com/in/louka-lemonnier/",
        "https://www.linkedin.com/in/matheolebehot/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    // buttons: [
    //   {
    //     href: "https://oriane-frouin.mds-nantes.yt/mapeach/",
    //     title: "Visiter le site",
    //     color: "verdigris",
    //   },
    // ],
    date: 12,
  },
  // PLANTOPIA
  {
    id: 8,
    path: "plantopia",
    category: ["DEVELOPPEMENT", "UX/UI"],
    title: "Plantopia",
    description: "Site e-commerce de plantes",
    image: "plantopiaCover",
    softwares: ["html", "css", "js"],
    banner: "plantopiaBanner",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Plantopia est un site e-commerce de plantes et fleurs réalisé en duo dans le cadre du cours d’Intégration web. Il présente une page d'accueil, une page recensant toutes les plantes et fleurs, une page détail du produit et une page panier.",
    first_image: "plantopia/plantopia-1.jpg",
    second_image: "plantopia/plantopia-2.jpg",
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
        title: "Github",
        color: "strawberry",
      },
    ],
    date: 4,
  },
  // //LOTR
  // {
  //   id: 6,
  //   path: "le-seigneur-des-anneaux",
  //   title: "Le Seigneur des Anneaux",
  //   category: ["DEVELOPPEMENT", "UX/UI"],
  //   description: "Site de films",
  //   image: "lotr",
  //   softwares: ["figma", "php"],
  //   banner: "lotr/lotr-banner.jpg",
  //   hashtag: "#POO #MVC",
  //   big_description:
  //     "Voici un site recensant les films, personnages et quelques citations du Seigneur des Anneaux",
  //   first_image: "lotr/lotr-1.jpg",
  //   second_image: "lotr/lotr-2.jpg",
  //   details: {
  //     softwares: ["figma", "php"],
  //     role: ["Développement web", "Maquettage"],
  //     team: [""],
  //     school_year: "Bachelor Cycle Web et Multimédia - Année 2",
  //   },
  //   buttons: [
  //     {
  //       href: "https://github.com/orinaya/LOTR",
  //       title: "Voir le projet",
  //       color: "strawberry",
  //     },
  //   ],
  //   date: 10,
  // },
];

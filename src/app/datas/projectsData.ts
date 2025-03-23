import {ProjectTypes} from "@/definitions/types";

export const projectsData: ProjectTypes[] = [
  //EQUINOX
  {
    id: 0,
    path: "equinox",
    category: ["DEVELOPPEMENT", "DESIGN GRAPHIQUE", "MARKETING"],
    title: "Equinox",
    description: "Création d'un jeu vidéo lors d'une Game Jam",
    image: "equinox",
    softwares: ["godot", "aseprite"],
    banner: "equinox/equinox-banner.jpg",
    hashtag: "#GameJam #PitchDeck",
    big_description:
      "Cette année Atlangames nous proposaient une Game Jam sur le thème “𝗳𝗿𝗼𝗻𝘁𝗶𝗲̀𝗿𝗲𝘀”. Le but ? Créer un jeu vidéo et en faire sa promotion en 4 jours, le tout en concurrence avec 17 autres écoles. De cette Game Jam est né “𝗘𝗾𝘂𝗶𝗻𝗼𝘅”, notre jeu de plateforme 2D. Il met en scène 𝗡𝗼𝘅, un petit chat décédé qui essaie de récupérer ses 8 vies restantes en traversant la frontière entre paradis et enfer. Avec ce jeu, nous remportons pour MyDigitalSchool Nantes, l’𝗔𝘄𝗮𝗿𝗱 𝗱𝗲 𝗹𝗮 𝗠𝗲𝗶𝗹𝗹𝗲𝘂𝗿𝗲 𝗗𝗶𝗿𝗲𝗰𝘁𝗶𝗼𝗻 𝗔𝗿𝘁𝗶𝘀𝘁𝗶𝗾𝘂𝗲 ! À vous de jouer désormais ! 🎮",
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
        color: "verdigris",
      },
    ],
    date: 8,
  },
  // MAPEACH
  {
    id: 1,
    path: "mapeach",
    category: ["DEVELOPPEMENT", "WEBDESIGN", "MARKETING"],
    title: "MaPeach",
    description: "Application de rendez-vous pour couple",
    image: "mapeach",
    softwares: ["figma", "wordpress"],
    banner: "mapeach/mapeach-banner.jpg",
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
    buttons: [
      {
        href: "https://oriane-frouin.mds-nantes.yt/mapeach/",
        title: "Visiter le site",
        color: "verdigris",
      },
    ],
    date: 12,
  },
  // FLOAX
  // {
  //   id: 2,
  //   path: "studio-floax",
  //   category: ["DEVELOPPEMENT"],
  //   title: "Floax",
  //   description: "Site vitrine de Floax",
  //   image: "floax",
  //   softwares: ["html", "sass", "vue", "typescript"],
  //   banner: "floax/floax-banner.jpg",
  //   hashtag: "#IntégrationWeb #FrontEnd ",
  //   big_description:
  //     "Floax est un site vitrine réalisé pour l'entreprise où j'ai effectué mon stage. J'ai pris en charge l'intégration et le développement front-end du site en compagnie d'autres collègues. Il met en valeur les services et compétences de l'entreprise.",
  //   first_image: "floax/floax-1.jpg",
  //   second_image: "floax/floax-2.jpg",
  //   details: {
  //     softwares: ["html", "sass", "vue", "typescript"],
  //     role: ["Intégration web", "Développement front"],
  //     team: ["Loïc Vanderschooten", "Clara Le Meur", "Vincent Ramaye", "Brice Le Gallo-Tastet"],
  //     teamLink: [""],
  //     school_year: "Bachelor Cycle Web et Multimédia - Année 2",
  //   },
  //   buttons: [
  //     {
  //       href: "https://floax.fr",
  //       title: "Visiter le site",
  //       color: "verdigris",
  //     },
  //   ],
  //   date: 2,
  // },
  // PLANTOPIA
  {
    id: 4,
    path: "plantopia",
    category: ["DEVELOPPEMENT", "WEBDESIGN"],
    title: "Plantopia",
    description: "Site e-commerce de plantes",
    image: "plantopia",
    softwares: ["figma", "html", "css", "js"],
    banner: "plantopia/plantopia-banner.jpg",
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
    date: 4,
  },
  // LE DÉDALE
  {
    id: 5,
    path: "le-dedale",
    title: "Le Dédale",
    category: ["DEVELOPPEMENT", "WEBDESIGN"],
    description: "Site boutique-café d'un client",
    image: "dedale",
    softwares: ["figma", "wordpress", "elementor", ""],
    banner: "dedale/dedale-banner.jpg",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Le Dédale, boutique-café ludique à Rezé est notre client actuel pour notre projet Fil rouge de deuxième année de formation. Au vu de leur installation récente, nous leur avons proposé de créer leur site. Désormais, au-delà d'un simple site vitrine, il s'agit également de leur créer un espace boutique contenant tous leurs produits le tout d'un un univers steampunk !",
    first_image: "dedale/dedale-1.jpg",
    second_image: "dedale/dedale-2.jpg",
    details: {
      softwares: ["figma", "wordpress", "elementor", "woo"],
      role: ["Gestion de Projet", "Développement web", "Maquettage"],
      team: ["Erwan Duchêne", "Audrey Norvez", "Valentin Renaud"],
      teamLink: [
        "https://www.linkedin.com/in/erwan-duch%C3%AAne/",
        "https://www.linkedin.com/in/audrey-norvez-a25673253/",
        "https://www.linkedin.com/in/valentin-renaud/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 9,
  },
  //LOTR
  {
    id: 6,
    path: "le-seigneur-des-anneaux",
    title: "Le Seigneur des Anneaux",
    category: ["DEVELOPPEMENT", "WEBDESIGN"],
    description: "Site de films",
    image: "lotr",
    softwares: ["figma", "php"],
    banner: "lotr/lotr-banner.jpg",
    hashtag: "#POO #MVC",
    big_description:
      "Le Dédale, boutique-café ludique à Rezé est notre client actuel pour notre projet Fil rouge de deuxième année de formation. Au vu de leur installation récente, nous leur avons proposé de créer leur site. Désormais, au-delà d'un simple site vitrine, il s'agit également de leur créer un espace boutique contenant tous leurs produits le tout d'un un univers steampunk !",
    first_image: "lotr/lotr-1.jpg",
    second_image: "lotr/lotr-2.jpg",
    details: {
      softwares: ["figma", "php"],
      role: ["Développement web", "Maquettage"],
      team: [""],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 10,
  },
  // PAUSE CONNECT
  {
    id: 7,
    path: "pause-connect",
    title: "Pause Connect",
    category: ["DEVELOPPEMENT", "WEBDESIGN"],
    description: "Site de sensibilisation addiction",
    image: "pauseconnect",
    softwares: ["figma", "html", "css", "vue"],
    banner: "pause-connect/pause-connect-banner.jpg",
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
        href: "https://develop--magenta-torrone-ae14a6.netlify.app",
        title: "Visiter le site",
        color: "verdigris",
      },
    ],
    date: 5,
  },
  //Ghibli
  {
    id: 8,
    title: "Ghibli",
    path: "ghibli",
    category: ["DEVELOPPEMENT"],
    description: "Site de films",
    image: "ghibli",
    softwares: ["figma", "html", "css", "vue"],
    banner: "ghibli/ghibli-banner.jpg",
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
    date: 6,
  },
];

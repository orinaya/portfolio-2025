// data/skills.ts

import {SkillCategory, SoftSkill} from "../definitions/types";

export const hardSkills: SkillCategory[] = [
  {
    title: "Langage",
    items: [
      {name: "Javascript", icon: "javascript", color: "FDF8CE"},
      {name: "Typescript", icon: "typescript", color: "D6E5F5"},
      {name: "PHP", icon: "php", color: "DCE3EF"},
      {name: "SQL", icon: "sql", color: "F7E2D4"},
    ],
  },
  {
    title: "Front-end",
    items: [
      {name: "HTML5/CSS3", icon: "html", color: "F9DAD2"},
      {name: "React.js/Next.js", icon: "react", color: "E1F8FE"},
      {name: "Vue.js", icon: "vue", color: "D9F2E7"},
      {name: "SASS/Tailwind", icon: "sass", color: "F2D9E5"},
    ],
  },
  {
    title: "Back-end",
    items: [
      {name: "Node.js (Express)", icon: "nodejs", color: "E1EDDE"},
      {name: "PHP (Symfony)", icon: "symfony", color: "E7E3E8"},
    ],
  },
  {
    title: "Bases de données",
    items: [
      {name: "MySQL", icon: "mysql", color: "F5FCFF"},
      {name: "PostgreSQL", icon: "postgresql", color: "D6E5F5"},
    ],
  },
  {
    title: "CMS",
    items: [
      {name: "Wordpress", icon: "wordpress", color: "CCEEFF"},
      {name: "Elementor", icon: "elementor", color: "FFCCE1"},
    ],
  },
  {
    title: "Dev mobile",
    items: [{name: "React Native", icon: "react", color: "E1F8FE"}],
  },
  {
    title: "Outils",
    items: [{name: "Git", icon: "git", color: "FCD6CF"}],
  },
  {
    title: "Autre",
    items: [{name: "Figma", icon: "figma", color: "FCD9CF"}],
  },
];

export const softSkills: SoftSkill[] = [
  {text: "Autonomie et prise d'initiative"},
  {text: "Adaptabilité et apprentissage continu"},
  {text: "Esprit analytique et résolution de problèmes"},
];

export const langSkills: SkillCategory[] = [
  {
    items: [
      {name: "Français (langue maternelle)", icon: "langfr", color: "E7E3E8"},
      {name: "Anglais (B2 Intermédiaire avancé)", icon: "langen", color: "E7E3E8"},
    ],
  },
];

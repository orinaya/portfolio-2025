// utils/iconMapping.ts
import javascriptIcon from "@/assets/icons/javascript.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import phpIcon from "@/assets/icons/php.svg";
import sqlIcon from "@/assets/icons/sql.svg";
import htmlIcon from "@/assets/icons/html.svg";
import cssIcon from "@/assets/icons/css.svg";
import reactIcon from "@/assets/icons/react.svg";
import vueIcon from "@/assets/icons/vue.svg";
import sassIcon from "@/assets/icons/sass.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import nodejsIcon from "@/assets/icons/nodejs.svg";
import symfonyIcon from "@/assets/icons/symfony.svg";
import reactNativeIcon from "@/assets/icons/react.svg";
import mysqlIcon from "@/assets/icons/mysql.svg";
import postgresqlIcon from "@/assets/icons/postgresql.svg";
import gitIcon from "@/assets/icons/git.svg";
import wordpressIcon from "@/assets/icons/wordpress.svg";
import elementorIcon from "@/assets/icons/elementor.svg";
import figmaIcon from "@/assets/icons/figma.svg";
import langFrIcon from "@/assets/icons/lang-fr.svg";
import langEnIcon from "@/assets/icons/lang-en.svg";
import godotIcon from "@/assets/icons/godot.svg";
import wooIcon from "@/assets/icons/woo.svg";
import nextIcon from "@/assets/icons/nextjs.svg";
import asepriteIcon from "@/assets/icons/aseprite.svg";

type IconProps = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

const IconMapping: Record<string, IconProps> = {
  javascript: javascriptIcon,
  typescript: typescriptIcon,
  php: phpIcon,
  sql: sqlIcon,
  html: htmlIcon,
  css: cssIcon,
  react: reactIcon,
  next: nextIcon,
  vue: vueIcon,
  sass: sassIcon,
  tailwind: tailwindIcon,
  nodejs: nodejsIcon,
  symfony: symfonyIcon,
  reactNative: reactNativeIcon,
  mysql: mysqlIcon,
  postgresql: postgresqlIcon,
  git: gitIcon,
  wordpress: wordpressIcon,
  elementor: elementorIcon,
  figma: figmaIcon,
  langfr: langFrIcon,
  langen: langEnIcon,
  godot: godotIcon,
  woo: wooIcon,
  aseprite: asepriteIcon,
};

export default IconMapping;

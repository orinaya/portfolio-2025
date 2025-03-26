export interface ButtonProps {
  title?: string;
  colorBg: string;
  colorText: string;
  routeLink?: string;
  iconBefore?: string;
  iconAfter?: string;
  iconCenter?: string;
  target?: string;
  className?: string;
  colorBgHover: string;
  colorTextHover: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type EducationTypes = {
  id: number;
  years: string;
  title: string;
  institution: string;
  location?: string;
  description?: string;
  skills?: string[];
  achievements?: string[];
};

export type TitleProps = {
  uptitle: string;
  title: string;
};

export interface SkillItem {
  name: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  title?: string;
  items: SkillItem[];
}

export interface SoftSkill {
  text: string;
}

export interface ProjectFilterTypes {
  id: number;
  label: string;
  value: string;
  icon: string;
}
export interface ProjectTypes {
  id: number;
  path?: string;
  category?: string[];
  title: string;
  description: string;
  project_status: string;
  image: string;
  softwares: string[];
  banner?: string;
  hashtag?: string;
  big_description?: string;
  first_image?: string;
  second_image?: string;
  details?: {
    softwares: string[];
    role: string[];
    team?: string[];
    teamLink?: string[];
    school_year: string;
  };
  buttons?: {
    href: string;
    title: string;
    color: string;
  }[];
  date: number;
}

export interface FramerProps {
  xInitial?: number;
  xWhileInView?: number;
  yInitial?: number;
  yWhileInView?: number;
  children?: any;
  className?: string;
  scaleInitial?: number;
  scaleWhileInView?: number;
  transitionDuration?: number;
  transitionDelay?: number;
  layoutId?: string;
}

export interface TypewriterTypes {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

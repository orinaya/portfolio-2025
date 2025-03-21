export interface ButtonProps {
  title?: string;
  colorBg: string;
  colorText: string;
  routeLink: string;
  iconBefore?: string;
  iconAfter?: string;
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
  title: string;
  items: SkillItem[];
}

export interface SoftSkill {
  text: string;
}

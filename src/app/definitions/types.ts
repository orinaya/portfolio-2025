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

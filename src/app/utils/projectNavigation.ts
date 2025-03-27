import {projectsData} from "@/datas/projectsData";

export const getNextProjectRoute = (projectPath: string): string | null => {
  const currentIndex = projectsData.findIndex((item) => item.path === projectPath);
  const nextRoute = currentIndex + 1;
  return nextRoute < projectsData.length ? `/${projectsData[nextRoute].path}` : null;
};

export const getPreviousProjectRoute = (projectPath: string): string | null => {
  const currentIndex = projectsData.findIndex((item) => item.path === projectPath);
  const previousRoute = currentIndex - 1;
  return previousRoute >= 0 ? `/${projectsData[previousRoute].path}` : null;
};

export const getNextProject = (projectPath: string) => {
  const currentIndex = projectsData.findIndex((item) => item.path === projectPath);
  const nextRoute = currentIndex + 1;
  return nextRoute < projectsData.length ? projectsData[nextRoute] : null;
};

export const getPreviousProject = (projectPath: string) => {
  const currentIndex = projectsData.findIndex((item) => item.path === projectPath);
  const previousRoute = currentIndex - 1;
  return previousRoute >= 0 ? projectsData[previousRoute] : null;
};

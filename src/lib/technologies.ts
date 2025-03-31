import { TECHNOLOGIES } from "./technology-list";

export type Technology<T extends string = string> = {
  name: T;
  url: string;
  logoName: string; // https://simpleicons.org/
  logoColor: string;
  badgeName: string;
  badgeColor?: string;
  style?: string;
};

export type TechnologyName = (typeof TECHNOLOGIES)[number]["name"];

export const isTechnologyName = (name: string): name is TechnologyName => {
  return !!TECHNOLOGIES.find((technology) => technology.name === name);
};

export const getTechnology = (name: TechnologyName) => {
  const technology = TECHNOLOGIES.find(
    (technology) => technology.name === name,
  );
  if (!technology) {
    throw new Error(`Technology ${name} not found`);
  }

  return technology;
};

export const generateBadgeUrl = (name: TechnologyName) => {
  const technology = getTechnology(name);

  const url = `https://img.shields.io/badge/${encodeURIComponent(technology.badgeName)}-${technology.badgeColor ?? "20232A"}?logo=${encodeURIComponent(technology.logoName)}&logoColor=${technology.logoColor}&style=for-the-badge`;
  return url;
};

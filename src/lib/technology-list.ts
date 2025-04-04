import { Technology } from './technologies';

const TechnologyFactory = {
  create<T extends string>(data: Technology<T>): Technology<T> {
    return {
      ...data,
    };
  },
};

export const TECHNOLOGIES = Object.freeze(
    [
      TechnologyFactory.create({
        name: "next-js",
        url: "https://nextjs.org/",
        badgeName: "Next.js",
        logoName: "nextdotjs",
        logoColor: "white",
      }),
      TechnologyFactory.create({
        name: "react-js",
        url: "https://reactjs.org/",
        badgeName: "React.js",
        logoName: "react",
        logoColor: "61DAFB",
      }),
      TechnologyFactory.create({
        name: "tanstack-query",
        url: "https://tanstack.com/query/latest",
        badgeName: "Tanstack Query",
        logoName: "reactquery",
        logoColor: "FF4154",
      }),
      TechnologyFactory.create({
        name: "typescript",
        url: "https://www.typescriptlang.org/",
        badgeName: "TypeScript",
        logoName: "typescript",
        logoColor: "3178C6",
      }),
      TechnologyFactory.create({
        name: "tailwindcss",
        url: "https://tailwindcss.com/",
        badgeName: "Tailwind CSS",
        logoName: "tailwindcss",
        logoColor: "06B6D4",
      }),
      TechnologyFactory.create({
        name: "nodejs",
        url: "https://nodejs.org/",
        badgeName: "Node.js",
        logoName: "nodedotjs",
        logoColor: "339933",
      }),
      TechnologyFactory.create({
        name: "python",
        url: "https://www.python.org/",
        badgeName: "Python",
        logoName: "python",
        logoColor: "3776AB",
      }),
      TechnologyFactory.create({
        name: "docker",
        url: "https://www.docker.com/",
        badgeName: "Docker",
        logoName: "docker",
        logoColor: "2496ED",
      }),
      TechnologyFactory.create({
        name: "postgresql",
        url: "https://www.postgresql.org/",
        badgeName: "PostgreSQL",
        logoName: "postgresql",
        logoColor: "4169E1",
      }),
      TechnologyFactory.create({
        name: "mongodb",
        url: "https://www.mongodb.com/",
        badgeName: "MongoDB",
        logoName: "mongodb",
        logoColor: "47A248",
      }),
      TechnologyFactory.create({
        name: "redis",
        url: "https://redis.io/",
        badgeName: "Redis",
        logoName: "redis",
        logoColor: "DC382D",
      }),
      TechnologyFactory.create({
        name: "graphql",
        url: "https://graphql.org/",
        badgeName: "GraphQL",
        logoName: "graphql",
        logoColor: "E10098",
      }),
      TechnologyFactory.create({
        name: "jest",
        url: "https://jestjs.io/",
        badgeName: "Jest",
        logoName: "jest",
        logoColor: "C21325",
      }),
      TechnologyFactory.create({
        name: "prisma",
        url: "https://www.prisma.io/",
        badgeName: "Prisma",
        logoName: "prisma",
        logoColor: "2D3748",
      }),
      TechnologyFactory.create({
        name: "vue",
        url: "https://vuejs.org/",
        badgeName: "Vue.js",
        logoName: "vuedotjs",
        logoColor: "4FC08D",
      }),
      TechnologyFactory.create({
        name: "angular",
        url: "https://angular.io/",
        badgeName: "Angular",
        logoName: "angular",
        logoColor: "DD0031",
      }),
      TechnologyFactory.create({
        name: "svelte",
        url: "https://svelte.dev/",
        badgeName: "Svelte",
        logoName: "svelte",
        logoColor: "FF3E00",
      }),
      TechnologyFactory.create({
        name: "vite",
        url: "https://vitejs.dev/",
        badgeName: "Vite",
        logoName: "vite",
        logoColor: "646CFF",
      }),
      TechnologyFactory.create({
        name: "webpack",
        url: "https://webpack.js.org/",
        badgeName: "Webpack",
        logoName: "webpack",
        logoColor: "8DD6F9",
      }),
      TechnologyFactory.create({
        name: "sass",
        url: "https://sass-lang.com/",
        badgeName: "Sass",
        logoName: "sass",
        logoColor: "CC6699",
      }),
      TechnologyFactory.create({
        name: "storybook",
        url: "https://storybook.js.org/",
        badgeName: "Storybook",
        logoName: "storybook",
        logoColor: "FF4785",
      }),
      TechnologyFactory.create({
        name: "redux",
        url: "https://redux.js.org/",
        badgeName: "Redux",
        logoName: "redux",
        logoColor: "764ABC",
      }),
      TechnologyFactory.create({
        name: "eslint",
        url: "https://eslint.org/",
        badgeName: "ESLint",
        logoName: "eslint",
        logoColor: "4B32C3",
      }),
      TechnologyFactory.create({
        name: "prettier",
        url: "https://prettier.io/",
        badgeName: "Prettier",
        logoName: "prettier",
        logoColor: "F7B93E",
      }),
      TechnologyFactory.create({
        name: "cypress",
        url: "https://www.cypress.io/",
        badgeName: "Cypress",
        logoName: "cypress",
        logoColor: "69D3A7",
      }),
      TechnologyFactory.create({
        name: "vitest",
        url: "https://vitest.dev/",
        badgeName: "Vitest",
        logoName: "vitest",
        logoColor: "6E9F18",
      }),
      TechnologyFactory.create({
        name: "astro",
        url: "https://astro.build/",
        badgeName: "Astro",
        logoName: "astro",
        logoColor: "BC52EE",
      }),
      TechnologyFactory.create({
        name: "nuxt",
        url: "https://nuxt.com/",
        badgeName: "Nuxt",
        logoName: "nuxt",
        logoColor: "00DC82",
      }),
      TechnologyFactory.create({
        name: "javascript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        badgeName: "JavaScript",
        logoName: "javascript",
        logoColor: "F7DF1E",
      }),
      TechnologyFactory.create({
        name: "html",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        badgeName: "HTML5",
        logoName: "html5",
        logoColor: "E34F26",
      }),
      TechnologyFactory.create({
        name: "css",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        badgeName: "CSS3",
        logoName: "css3",
        logoColor: "1572B6",
      }),
    ].sort((a, b) => a.name.localeCompare(b.name)),
  );
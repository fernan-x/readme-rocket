type Technology<T extends string = string> = {
    name: T;
    url: string;
    logoName: string; // https://simpleicons.org/
    logoColor: string;
    badgeName: string;
    badgeColor?: string;
    style?: string;
}

const TechnologyFactory = {
    create<T extends string>(data: Technology<T>): Technology<T> {
        return {
            ...data,
        };
    },
};

const TECHNOLOGIES = [
    TechnologyFactory.create({
        name: 'next-js',
        url: 'https://nextjs.org/',
        badgeName: 'Next.js',
        logoName: 'nextdotjs',
        logoColor: 'white',
    }),
    TechnologyFactory.create({
        name: 'react-js',
        url: 'https://reactjs.org/',
        badgeName: 'React.js',
        logoName: 'react',
        logoColor: '61DAFB',
    }),
    TechnologyFactory.create({
        name: 'tanstack-query',
        url: 'https://tanstack.com/query/latest',
        badgeName: 'Tanstack Query',
        logoName: 'reactquery',
        logoColor: 'FF4154',
    }),
];

export type TechnologyName = typeof TECHNOLOGIES[number]['name'];

export const isTechnologyName = (name: string): name is TechnologyName => {
    return !!TECHNOLOGIES.find(technology => technology.name === name);
};

export const getTechnology = (name: TechnologyName) => {
    const technology = TECHNOLOGIES.find(technology => technology.name === name);
    if (!technology) {
        throw new Error(`Technology ${name} not found`);
    }

    return technology;
};

export const generateBadgeUrl = (name: TechnologyName) => {
    const technology = getTechnology(name);

    const url = `https://img.shields.io/badge/${encodeURIComponent(technology.badgeName)}-${technology.badgeColor ?? '20232A'}?logo=${encodeURIComponent(technology.logoName)}&logoColor=${technology.logoColor}&style=for-the-badge`;
    return url;
};
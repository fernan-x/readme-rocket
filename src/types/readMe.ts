export type ReadMe = {
    title: string;
    description: string;
    githubUrl: string;
    about: string;
    projectScreenshot: string;
    technologies: string[];
    contacts: {
        fullName: string;
        email: string;
        linkedin: string;
    };
};

export const ReadMeFactory = {
    create: (data?: Partial<ReadMe>): ReadMe => {
        return {
            title: 'Example Project',
            description: 'This is a blazing fast project which will help you to create a project with a beautiful UI and a lot of features.',
            githubUrl: 'https://github.com/fernan-x/readme-rocket',
            projectScreenshot: 'https://picsum.photos/1280/500',
            technologies: [],
            about: '',
            contacts: {
                fullName: 'Fabien Fernandes Alves',
                email: 'fernandesalvesfabien@gmail.com',
                linkedin: 'https://www.linkedin.com/in/fabien-fernandes-alves/',
            },
            ...data,
        };
    }
};
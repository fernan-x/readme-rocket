import { TechnologyName } from '@/lib/technologies';

export type ReadMe = {
    title: string;
    description: string;
    githubUrl: string;
    about: string;
    projectScreenshot: string;
    technologies: TechnologyName[];
    contributing: string;
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
            technologies: ['react-js', 'next-js', 'tanstack-query'],
            about: '',
            contributing: `
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>.
<br /><br />
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!
<br /><br />
<ol>
    <li>Fork the Project</li>
    <li>Create your Feature Branch (<code>git checkout -b feature/AmazingFeature</code>)</li>
    <li>Commit your Changes (<code>git commit -m 'Add some AmazingFeature'</code>)</li>
    <li>Push to the Branch (<code>git push origin feature/AmazingFeature</code>)</li>
    <li>Open a Pull Request</li>
</ol>
            `,
            contacts: {
                fullName: 'Fabien Fernandes Alves',
                email: 'fernandesalvesfabien@gmail.com',
                linkedin: 'https://www.linkedin.com/in/fabien-fernandes-alves/',
            },
            ...data,
        };
    }
};
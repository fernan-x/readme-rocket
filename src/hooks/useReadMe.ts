import { ReadMe } from '@/types/readMe';
import { useState } from 'react';

const ReadMeFactory = {
    create: (data?: Partial<ReadMe>): ReadMe => {
        return {
            title: 'Example Project',
            description: 'This is a blazing fast project which will help you to create a project with a beautiful UI and a lot of features.',
            url: 'https://github.com/fernan-x/readme-rocket',
            technologies: [],
            contacts: {
                fullName: 'Fabien Fernandes Alves',
                email: 'fernandesalvesfabien@gmail.com',
                linkedin: 'https://www.linkedin.com/in/fabien-fernandes-alves/',
            },
            ...data,
        };
    }
};

const useReadMe = () => {
    const [document, setDocument] = useState<ReadMe>(ReadMeFactory.create());

    return {
        document,
        setDocument,
    };
};

export default useReadMe;
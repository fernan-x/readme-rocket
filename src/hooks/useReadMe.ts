import { useState } from 'react';

export type ReadMe = {
    title: string;
    description: string;
    url: string;
    technologies: string[];
};

const ReadMeFactory = {
    create: (data?: Partial<ReadMe>): ReadMe => {
        return {
            title: '',
            description: '',
            url: 'https://github.com/',
            technologies: [],
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
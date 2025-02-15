import { ReadMe, ReadMeFactory } from '@/types/readMe';
import { useState } from 'react';

const useReadMe = () => {
    const [document, setDocument] = useState<ReadMe>(ReadMeFactory.create());

    return {
        document,
        setDocument,
    };
};

export default useReadMe;
import { ReadMe } from '@/types/readMe';
import CollapsibleCard from './collapsible-card';
import EditorProject from './editor-project';
import React from 'react';
import EditorContact from './editor-contact';
import { Book, Code, FolderOpenDot, Mail } from 'lucide-react';
import EditorAboutProject from './editor-about-project';
import EditorAboutContributing from './editor-contributing';

type EditorProps = {
    document: ReadMe;
    setDocument: React.Dispatch<React.SetStateAction<ReadMe>>;
};

const Editor = ({document, setDocument}: EditorProps) => {
    return (
        <>
            <CollapsibleCard
                title='Project'
                icon={<Book color='#7c3aed' />}
                defaultOpen
            >
                <EditorProject document={document} setDocument={setDocument} />
            </CollapsibleCard>
            <CollapsibleCard
                title='About the project'
                icon={<FolderOpenDot color='#7c3aed' />}
            >
                <EditorAboutProject document={document} setDocument={setDocument} />
            </CollapsibleCard>
            {/* <CollapsibleCard title='Build with' />
            <CollapsibleCard title='Getting started' /> */}
            <CollapsibleCard
                title='Contributing'
                icon={<Code color='#7c3aed' />}
            >
                <EditorAboutContributing document={document} setDocument={setDocument} />
            </CollapsibleCard>
            <CollapsibleCard
                title='Contact'
                icon={<Mail color='#7c3aed' />}
            >
                <EditorContact document={document} setDocument={setDocument} />
            </CollapsibleCard>
        </>
    );
};

export default Editor;
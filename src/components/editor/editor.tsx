import { ReadMe } from '@/types/readMe';
import CollapsibleCard from './collapsible-card';
import EditorProject from './editor-project';
import React from 'react';
import EditorContact from './editor-contact';

type EditorProps = {
    document: ReadMe;
    setDocument: React.Dispatch<React.SetStateAction<ReadMe>>;
};

const Editor = ({document, setDocument}: EditorProps) => {
    return (
        <>
            <CollapsibleCard title='Project' defaultOpen>
                <EditorProject document={document} setDocument={setDocument} />
            </CollapsibleCard>
            {/* <CollapsibleCard title='About the project' />
            <CollapsibleCard title='Build with' />
            <CollapsibleCard title='Getting started' />
            <CollapsibleCard title='Contributing' /> */}
            <CollapsibleCard title='Contact'>
                <EditorContact document={document} setDocument={setDocument} />
            </CollapsibleCard>
        </>
    );
};

export default Editor;
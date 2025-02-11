import { ReadMe } from '@/hooks/useReadMe';
import CollapsibleCard from './collapsible-card';
import EditorProject from './editor-project';
import React from 'react';

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
            <CollapsibleCard title='About the project' />
            <CollapsibleCard title='Build with' />
            <CollapsibleCard title='Getting started' />
            <CollapsibleCard title='Contributing' />
            <CollapsibleCard title='Contact' />
        </>
    );
};

export default Editor;
import CollapsibleCard from './collapsible-card';
import EditorProject from './editor-project';


const Editor = () => {
    return (
        <>
            <CollapsibleCard title='Project' defaultOpen>
                <EditorProject />
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
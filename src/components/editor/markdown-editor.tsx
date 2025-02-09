import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const MarkdownEditor = () => {
    return (
        <>
            This is the editor
            <Collapsible>
                <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
                <CollapsibleContent>
                Yes. Free to use for personal and commercial projects. No attribution
                required.
                </CollapsibleContent>
            </Collapsible>
        </>
    );
};

export default MarkdownEditor;
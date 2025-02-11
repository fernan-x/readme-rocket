import { ReadMe } from '@/hooks/useReadMe';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type EditorProjectProps = {
    document: ReadMe;
    setDocument: React.Dispatch<React.SetStateAction<ReadMe>>;
};

const EditorProject = ({document, setDocument}: EditorProjectProps) => {
    return (
        <>
            <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    type="text"
                    id="name"
                    placeholder="My Project"
                    value={document?.title}
                    onChange={(e) => setDocument({...document, title: e.target.value})}
                />
            </div>

            <div className="grid w-full gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    placeholder="Type your description here."
                    id="description"
                    value={document?.description}
                    onChange={(e) => setDocument({...document, description: e.target.value})}
                />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="url">Github URL</Label>
                <Input
                    type="text"
                    id="url"
                    placeholder="https://github.com/my-project"
                    value={document?.url}
                    onChange={(e) => setDocument({...document, url: e.target.value})}
                />
            </div>
        </>
    );
};

export default EditorProject;
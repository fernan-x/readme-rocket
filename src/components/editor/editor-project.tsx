import { ReadMe } from '@/types/readMe';
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
                <Label htmlFor="github-url">Github URL</Label>
                <Input
                    type="text"
                    id="github-url"
                    placeholder="https://github.com/my-project"
                    value={document?.githubUrl}
                    onChange={(e) => setDocument({...document, githubUrl: e.target.value})}
                />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="demo-url">Demo URL</Label>
                <Input
                    type="text"
                    id="demo-url"
                    placeholder=""
                    value={document?.demoUrl}
                    onChange={(e) => setDocument({...document, demoUrl: e.target.value})}
                />
            </div>
        </>
    );
};

export default EditorProject;
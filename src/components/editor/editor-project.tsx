import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const EditorProject = () => {
    return (
        <>
            <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="My Project" />
            </div>

            <div className="grid w-full gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Type your description here." id="description" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="url">Github URL</Label>
                <Input type="text" id="url" placeholder="https://github.com/my-project" />
            </div>
        </>
    );
};

export default EditorProject;
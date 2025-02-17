import { ReadMe } from '@/types/readMe';
import sanitize from 'sanitize-html';
import { Label } from '@radix-ui/react-label';
import WysiwygEditor from '../common/wysiwyg-editor';
import { Input } from '../ui/input';

type EditorAboutProjectProps = {
    document: ReadMe;
    setDocument: React.Dispatch<React.SetStateAction<ReadMe>>;
};

const EditorAboutProject = ({ document, setDocument }: EditorAboutProjectProps) => {
    return (
        <>
            <WysiwygEditor
                id="about"
                value={document.about}
                onChange={(e) => setDocument({...document, about: sanitize(e.target.value)})}
            />
            <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="screenshot">Screenshot</Label>
                <Input
                    id="screenshot"
                    placeholder=""
                    value={document.projectScreenshot}
                    onChange={(e) => setDocument({...document, projectScreenshot: e.target.value})}
                />
            </div>
        </>
    );
};

export default EditorAboutProject;
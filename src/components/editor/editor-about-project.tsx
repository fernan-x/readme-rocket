import { ReadMe } from '@/types/readMe';
import sanitize from 'sanitize-html';
import { Label } from '@radix-ui/react-label';
import WysiwygEditor from '../common/wysiwyg-editor';

type EditorAboutProjectProps = {
    document: ReadMe;
    setDocument: React.Dispatch<React.SetStateAction<ReadMe>>;
};

const EditorAboutProject = ({ document, setDocument }: EditorAboutProjectProps) => {
    return (
        <div className="grid w-full gap-2">
            <Label htmlFor="about">Description</Label>
            <WysiwygEditor
                id="about"
                value={document.about}
                onChange={(e) => setDocument({...document, about: sanitize(e.target.value)})}
            />
        </div>
    );
};

export default EditorAboutProject;
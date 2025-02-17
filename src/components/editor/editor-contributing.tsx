import { ReadMe } from '@/types/readMe';
import sanitize from 'sanitize-html';
import WysiwygEditor from '../common/wysiwyg-editor';

type EditorAboutContributingProps = {
    document: ReadMe;
    setDocument: React.Dispatch<React.SetStateAction<ReadMe>>;
};

const EditorAboutContributing = ({ document, setDocument }: EditorAboutContributingProps) => {
    return (
        <WysiwygEditor
            id="about"
            value={document.contributing}
            onChange={(e) => setDocument({...document, contributing: sanitize(e.target.value)})}
        />
    );
};

export default EditorAboutContributing;
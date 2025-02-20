import { ReadMe } from '@/types/readMe';
import sanitize from 'sanitize-html';
import { Label } from '@radix-ui/react-label';
import WysiwygEditor from '../common/wysiwyg-editor';
import { Input } from '../ui/input';
import { MultiSelect } from '../ui/multi-select';
import { TECHNOLOGIES, TechnologyName } from '@/lib/technologies';

type EditorAboutProjectProps = {
    document: ReadMe;
    setDocument: React.Dispatch<React.SetStateAction<ReadMe>>;
};

const EditorAboutProject = ({ document, setDocument }: EditorAboutProjectProps) => {
    const technologiesList = TECHNOLOGIES.map(t => ({
        value: t.name,
        label: t.badgeName,
        iconImg: <img src={`https://simpleicons.org/icons/${t.logoName}.svg`} alt={t.badgeName} className='h-4 w-4 mr-2 fill-white' />,
    }));

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
            <div className="grid w-full items-center gap-2">
                <Label htmlFor="built-with">Built with</Label>
                <MultiSelect
                    modalPopover
                    options={technologiesList}
                    onValueChange={(value) => setDocument({...document, technologies: value as TechnologyName[]})}
                    defaultValue={document.technologies}
                    placeholder="Select frameworks"
                    variant="inverted"
                />
            </div>
        </>
    );
};

export default EditorAboutProject;
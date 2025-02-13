import { ReadMe } from '@/types/readMe';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type EditorContactProps = {
    document: ReadMe;
    setDocument: React.Dispatch<React.SetStateAction<ReadMe>>;
};

const EditorContact = ({document, setDocument}: EditorContactProps) => {
    return (
        <>
            <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                    type="text"
                    id="fullname"
                    placeholder=""
                    value={document.contacts.fullName}
                    onChange={(e) => setDocument({...document, contacts: {...document.contacts, fullName: e.target.value}})}
                />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    placeholder=""
                    value={document.contacts.email}
                    onChange={(e) => setDocument({...document, contacts: {...document.contacts, email: e.target.value}})}
                />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="linkedin">Linkedin URL</Label>
                <Input
                    type="text"
                    id="linkedin"
                    placeholder="https://www.linkedin.com/in/"
                    value={document.contacts.linkedin}
                    onChange={(e) => setDocument({...document, contacts: {...document.contacts, linkedin: e.target.value}})}
                />
            </div>
        </>
    );
};

export default EditorContact;
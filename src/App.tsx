import AppShell from '@/components/common/app-shell';
import Editor from '@/components/editor/editor';
import { Rocket } from 'lucide-react';
import useReadMe from './hooks/useReadMe';
import Preview from './components/editor/preview';


function App() {
    const { document, setDocument } = useReadMe();

    return (
        <AppShell>
            <AppShell.Header>
                <h1 className="text-3xl font-bold flex flex-row items-center gap-2">
                    <Rocket color='#7c3aed' />
                    ReadMe Rocket
                </h1>
            </AppShell.Header>

            <AppShell.Content>
                <AppShell.Left>
                    <Editor
                        document={document}
                        setDocument={setDocument}
                    />
                </AppShell.Left>
                <AppShell.Right>
                    <Preview document={document} />
                </AppShell.Right>
            </AppShell.Content>
        </AppShell>
    );
}

export default App;

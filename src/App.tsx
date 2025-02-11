import { Button } from '@/components/ui/button';
import TechnologyBadge from '@/components/common/technology-badge';
import AppShell from '@/components/common/app-shell';
import Editor from '@/components/editor/editor';
import { Rocket } from 'lucide-react';
import useReadMe from './hooks/useReadMe';


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
                    <Button>Click me</Button>
                    <TechnologyBadge name="next-js" />
                    <TechnologyBadge name="react-js" />
                    <TechnologyBadge name="tanstack-query" />
                </AppShell.Right>
            </AppShell.Content>
        </AppShell>
    );
}

export default App;

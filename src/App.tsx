import { Rocket } from 'lucide-react';
import AppShell from '@/components/common/app-shell';
import Editor from '@/components/editor/editor';
import { ThemeProvider } from '@/contexts/theme-provider';
import useReadMe from './hooks/useReadMe';
import Preview from './components/editor/preview';
import { ThemeToggle } from './components/common/theme-toggle';
import CopyDocumentButton from './components/common/copy-document-button';


function App() {
    const { document, setDocument } = useReadMe();

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AppShell>
                <AppShell.Header>
                    <h1 className="text-3xl font-bold flex flex-row items-center gap-2 flex-1 m-0">
                        <Rocket color='#7c3aed' size={36} />
                        ReadMe Rocket
                    </h1>
                    <div className='flex gap-2'>
                        <CopyDocumentButton document={document} />
                        <ThemeToggle />
                    </div>
                </AppShell.Header>

                <AppShell.Content>
                    <AppShell.Left>
                        <Editor
                            document={document}
                            setDocument={setDocument}
                        />
                    </AppShell.Left>
                    <AppShell.Right noGap>
                        <Preview document={document} />
                    </AppShell.Right>
                </AppShell.Content>
            </AppShell>
        </ThemeProvider>
    );
}

export default App;

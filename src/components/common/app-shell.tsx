const AppShellSide = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-8 w-full overflow-y-auto">
            {children}
        </div>
    );
};

const AppShellContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-row gap-8 w-full h-full overflow-hidden">
            {children}
        </div>
    );
};

const AppShellHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-row gap-8 w-full">
            {children}
        </div>
    );
};

const AppShell = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-background h-screen flex flex-col p-8 gap-8'>
            {children}
        </div>
    );
};

AppShell.Header = AppShellHeader;
AppShell.Content = AppShellContent;
AppShell.Left = AppShellSide;
AppShell.Right = AppShellSide;

export default AppShell;
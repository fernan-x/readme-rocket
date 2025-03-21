import { cn } from "@/lib/utils";

const AppShellSide = ({
  children,
  noGap = false,
  className,
}: {
  children: React.ReactNode;
  noGap?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `flex flex-col ${noGap ? "" : "gap-4 "}w-full overflow-y-auto`,
        className,
      )}
    >
      {children}
    </div>
  );
};

const AppShellContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row gap-8 w-full h-full overflow-hidden relative">
      {children}
    </div>
  );
};

const AppShellHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-row gap-8 w-full">{children}</div>;
};

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background h-screen flex flex-col p-4 md:p-8 gap-8">
      {children}
    </div>
  );
};

AppShell.Header = AppShellHeader;
AppShell.Content = AppShellContent;
AppShell.Left = AppShellSide;
AppShell.Right = AppShellSide;

export default AppShell;

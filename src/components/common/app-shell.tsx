import { cn } from "@/lib/utils";

type AppShellSideProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  noGap?: boolean;
  className?: string;
}

const AppShellSide = ({
  children,
  noGap = false,
  className,
  ...props
}: AppShellSideProps) => {
  return (
    <div
      className={cn(
        `flex flex-col ${noGap ? "" : "gap-4 "}w-full overflow-y-auto`,
        className,
      )}
      {...props}
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

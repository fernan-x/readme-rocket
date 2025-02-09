import { Button } from '@/components/ui/button';
import TechnologyBadge from '@/components/common/technology-badge';
import AppShell from './components/common/app-shell';


function App() {
  return (
    <AppShell>
      <AppShell.Header>
        <h1 className="text-3xl font-bold underline">
              ReadMe Creator
        </h1>
      </AppShell.Header>

      <AppShell.Content>
        <AppShell.Left>
          <p>This is the left side</p>
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

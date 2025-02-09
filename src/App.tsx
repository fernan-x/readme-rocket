import { Button } from '@/components/ui/button';
import TechnologyBadge from '@/components/common/technology-badge';


function App() {
  return (
    <div className='bg-background h-screen flex flex-col p-8 gap-4'>
      <h1 className="text-3xl font-bold underline">
          ReadMe Creator
      </h1>
      <Button>Click me</Button>
      <TechnologyBadge name="next-js" />
      <TechnologyBadge name="react-js" />
      <TechnologyBadge name="tanstack-query" />
    </div>
  );
}

export default App;

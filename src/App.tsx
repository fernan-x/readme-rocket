import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className='bg-background h-screen flex flex-col p-8 gap-4'>
      <h1 className="text-3xl font-bold underline">
          Hello world!
      </h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;

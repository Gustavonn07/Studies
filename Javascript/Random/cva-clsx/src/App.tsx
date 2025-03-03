import './css/app.css';
import { useState } from 'react';
import { cn } from './libs/utils';
import Button from './components/ui/Button';

function App() {

  const [disabled, setDisabled] = useState(false);

  return (
    <main className={cn("w-full h-screen flex justify-center items-center bg-slate-300 flex-col gap-10")}>

      <div
        className={cn("min-w-1/4 w-2/5 text-center text-3xl py-5 rounded-md", {
          'bg-red-400 text-gray-100': disabled,
          'bg-green-400 text-gray-800': !disabled
        })}
        onClick={() => setDisabled(!disabled)}
      >
        Olá mundo (Clique em mim!)
      </div>

      <Button
        size={"lg"}
        variant={"danger"}
      />
    </main>
  )
}

export default App;

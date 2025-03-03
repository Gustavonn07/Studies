import './css/app.css';
import { cn } from './libs/utils';
import Button from './components/ui/Button';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Params {
  param1: string;
  param2: string;
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [params, setParams] = useState<Params>({ param1: '', param2: '' });

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const param1 = query.get('nome') || '';
    const param2 = query.get('idade') || '';
    setParams({ param1, param2 });
  }, [location.search]);

  const handleAddParams = () => {
    const newParam1 = 'valor1';
    const newParam2 = 'valor2';
    navigate(`?nome=${newParam1}&idade=${newParam2}`);
  };

  const handleDeleteParams = () => {
    navigate("");
  };

  return (
    <main className={cn("w-full h-screen flex justify-center items-center bg-slate-300 flex-col gap-10")}>
      <p>Param1: {params.param1}</p>
      <p>Param2: {params.param2}</p>
      <Button
        texto="Adicionar parametros"
        className='text-gray-100 hover:bg-gray-800 hover:text-gray-200 duration-100'
        handler={handleAddParams}
      />
      <Button
        texto="Deletar parametros"
        className='text-gray-100 hover:bg-gray-800 hover:text-gray-200 duration-100'
        handler={handleDeleteParams}
      />
    </main>
  );
}

const Root = () => (
  <Routes>
    <Route path="/" element={<App />} />
  </Routes>
);

const AppWrapper = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

export default AppWrapper;

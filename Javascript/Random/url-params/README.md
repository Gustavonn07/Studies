### Passo 1 - (SETUP) Instalar dependências

Para configurar o projeto de utilização de parametros da url, você precisará instalar as seguintes dependências:

- **react-router-dom**: Biblioteca para gerenciamento de rotas em aplicações React.

Execute o comando abaixo para instalar todas as dependências:

```bash
npm install react-router-dom
```

### Passo 2 - Estrutura do Projeto

A estrutura principal do projeto é composta por um componente `App` que gerencia os parâmetros da URL. A seguir estão os componentes principais:

- App: Componente principal que lê e exibe os parâmetros da URL.

- Button: Componente reutilizável para ações (adicionar/remover parâmetros).

Código App: 
```typescript
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
```

Código Button: 
```typescript
import { cn } from "../../libs/utils"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  texto: string
  handler: () => void
}

function Button({ className, handler, texto }: ButtonProps) {

  return (
    <button 
      className={cn('rounded-md font-semibold bg-gray-700 text-gray-300 h-10 px-4 py-2', className)}
      onClick={handler}
    >
      {texto}
    </button>
  )
}
```

## Passo 3 - Defina suas rotas:

Sempre quando quiser utilizar um hook do `react-router-dom` é necessário adicionar um contexto a ele, adicionando as suas respectivas rotas:

```typescript
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
```

## Passo 4 - Usando navigate e location:

Importe os hooks `useNavigation` e `useLocation` para conseguir manipular os parametros na url...

- useNavigation: Quando você deseja redirecionar um usuário para uma nova rota e incluir parâmetros na URL (como parâmetros de consulta), o useNavigate é extremamente útil. Isso permite que você passe informações relevantes para a próxima página de forma dinâmica e interativa.

- useLocation: Ajuda a manipular e acessar informações na URL, permitindo que você reaja a mudanças na URL e gerencie parâmetros de forma eficaz.
 
## Passo 5 - Adicionando parametros na URL:

Utilizando o código abaixo podemos usar o hook `useNavigate()` para adicionar parametros por meio de strings:
```typescript
const navigate = useNavigate();

const handleAddParams = () => {
  const newParam1 = 'valor1';
  const newParam2 = 'valor2';
  navigate(`?nome=${newParam1}&idade=${newParam2}`);
};
```

## Passo 6 - Coletar parametros da URL:

Utilizando o código abaixo podemos usar o hook `useLocation()` para coletar os parametros utilizando o URLSearchParams como auxiliador:
```typescript
const location = useLocation();
const [params, setParams] = useState<Params>({ param1: '', param2: '' });

useEffect(() => {
  const query = new URLSearchParams(location.search);
  const param1 = query.get('nome') || '';
  const param2 = query.get('idade') || '';
  setParams({ param1, param2 });
}, [location.search]);
```
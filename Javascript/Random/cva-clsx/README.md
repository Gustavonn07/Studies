### 1 Passo - (SETUP) Instalar dependências:

Para configurar o projeto com `Class-Variance-Authority e clsx`, você precisará instalar as seguintes dependências:

- **tailwindcss**: Tailwind CSS é um framework de utilitários CSS que fornece classes pré-definidas para estilizar seus componentes HTML. Ele permite uma abordagem baseada em classes para construir interfaces, eliminando a necessidade de escrever CSS personalizado para muitos casos comuns.

- **postcss**: PostCSS é uma ferramenta para transformar CSS com JavaScript plugins. É um processador de CSS que pode adicionar recursos como autoprefixing, minificação, e outras transformações.

- **autoprefixer**: Autoprefixer é um plugin para PostCSS que adiciona prefixos de fornecedores (vendor prefixes) automaticamente para você. Isso é útil para garantir que seu CSS seja compatível com diferentes navegadores.

- **clsx**: clsx é uma pequena biblioteca JavaScript para condicionalmente combinar e construir strings de classes CSS. É útil para compor classes de forma dinâmica, com suporte a strings, objetos e arrays.

- **tailwind-merge**: tailwind-merge (ou twMerge) é uma biblioteca para combinar e otimizar classes Tailwind CSS. Ela resolve conflitos e remove duplicações de classes, garantindo que as classes Tailwind sejam combinadas corretamente.

- **class-variance-authority**: class-variance-authority (ou cva) é uma biblioteca para definir e gerenciar variantes de classes CSS de forma declarativa. É especialmente útil para criar e aplicar variantes de estilo de forma estruturada e coesa.

Execute o comando abaixo para instalar todas as dependências:

```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npm install tailwind-merge class-variance-authority clsx
```

### 2 Passo - twMerge + clsx:

Crie um arquivo que retorne a função `cn`, essa função terá o objetivo de juntar o conceito do twMerge com clsx, permitindo a junção de classes utilizando objetos nas classes.

```typescript
import clsx, { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassArray) {
    const CLASS_NAMES =  clsx(...inputs);
    return twMerge(CLASS_NAMES);
}
```

### 3 Passo - Entender a função cn():

```typescript
import './css/app.css';
import { useState } from 'react';
import { cn } from './libs/utils';

function App() {

  const [disabled, setDisabled] = useState(false);

  return (
    <main className={cn("w-full h-screen flex justify-center items-center bg-slate-300")}>

      <div
        className={cn("min-w-1/4 w-2/5 text-center text-3xl py-5 rounded-md", {
          'bg-red-400 text-gray-100': disabled,
          'bg-green-400 text-gray-800': !disabled
        })}
        onClick={() => setDisabled(!disabled)}
      >
        Olá mundo (Clique em mim!)
      </div>
    </main>
  )
}

export default App;
```

No código acima usamos a função `cn` para que as classes que forem adicionadas possam ser substituidas usando o `twMerge`, além disso será permitido utilizar objetos para passagem de classes!

### 4 Passo - Criando variantes com cva():

```typescript
const buttonVariants = cva(
  "rounded-md font-semibold",
  {
    variants: {
      variant: {
        default: "bg-gray-700 text-gray-300",
        danger: "bg-red-300 text-gray-700",
        success: "bg-green-300 text-gray-700"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)
```

No código acima podemos definir as variantes, tamanhos e as variantes defaults para que não seja necessário criar varios componentes do mesmo tipo de button.

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {};

function Button({ className, variant, size}: ButtonProps) {

  return (
    <button className={cn(buttonVariants({ variant, size, className }))}>
      Button
    </button>
  )
}

export default Button
```

Dessa forma podemos passar os valores como parametros, assim utilizando tanto o `cn()` e o `cva()` juntos!

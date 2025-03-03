### Passo 1 - (SETUP) Instalar dependências

Para configurar o projeto com `dnd-kit`, você precisará instalar as seguintes dependências:

- **@dnd-kit/core**: Contém a maior parte dos componentes do `dnd-kit`.
- **@dnd-kit/utilities**: Oferece funções úteis para utilizar com o `dnd-kit`.
- **@dnd-kit/sortable**: Permite que os elementos "draggables" sejam reorganizados.

Execute o comando abaixo para instalar todas as dependências:

```bash
npm install @dnd-kit/core @dnd-kit/utilities @dnd-kit/sortable
```

### Passo 2 - DndContext

Para criar um ambiente que pode ser usada a biblioteca crie um contexto usando a tag `<DndContext></DndContext>`.

Defina o atributo `colisionDetection` dentro de `<DndContext></DndContext>` para qual o tipo de colisão que deverá ser detectada.

## Passo 3 - Defina seus elementos:

Sempre quando definir seus elementos crie o ID do elemento, já que irá facilitar na hora de utilizar o Sortable, além de melhorar a forma de procura do elemento em si.

Adicione o contexto `<SortableContext></SortableContext>` no elemento pai dos elementos que serão "draggables", assim eles poderão ser reorganizados (pode adicionar em uma coluna de kanban por exemplo...).

Adicione no contexto `<SortableContext></SortableContext>` os atributos `items` e `strategy`. Respectivamente um adicione a array de itens que serão usados e no outro a estrategia de como deve ser o Drag (direção).

## Passo 4 - Criando um elemento Sortable:

Importe dentro do elemento que irá possuir a propriedade de Drag o hook `useSortable`.

Destruture os atributos de `{ attributes, listeners, transform, transition, setNodeRef } = useSortable({id})`.
- **attributes**: Um objeto que contém os atributos necessários para a acessibilidade e interações do item arrastável. Estes atributos são necessários para garantir que o item funcione corretamente com leitores de tela e outras tecnologias assistivas.

- **listeners**: Um objeto contendo os eventos necessários para iniciar e gerenciar o processo de arrastar o item. Inclui eventos como `onMouseDown`, `onTouchStart`, e `onPointerDown`.

- **transform**: Um objeto que define a transformação CSS que deve ser aplicada ao item durante o arrasto. Ele pode conter propriedades como `x, y, scale, etc`. Utilize a função `CSS.Transform.toString(transform)` para converter o objeto de transformação em uma string CSS válida.

- **transition**: Uma string que define a transição CSS a ser aplicada ao item quando ele é movido ou solto. Geralmente, é uma configuração de tempo e tipo de transição, como `transform 250ms ease`.

- **setNodeRef**: Uma função que deve ser atribuída à referência `ref` do elemento que você deseja tornar arrastável. Essa função é responsável por conectar o elemento DOM ao sistema de arrastar e soltar.

## Passo 5 - Criando onDragEnd:

Crie o seu `handleDragEnd` ex:
```typescript
const getTaskPosition = (id: UniqueIdentifier) => {
    return tasks.findIndex(task => task.id === id);
};

const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTasks(tasks => {
      const originalPosition = getTaskPosition(active.id);
      const newPosition = getTaskPosition(over.id);

      if(originalPosition === -1 || newPosition === -1) return tasks;

      return arrayMove(tasks, originalPosition, newPosition);
    });
};
```

No seu `DndContext` adicione o atributo `onDragEnd` e passe como parametro o seu `handleDragEnd`.

## Passo 6 - Keybord + Pointer Controls:

Para criar assessibilidade e ao pressionar ENTER em um elemento e a setinha de direção possa trocar de lugar, além de criar uma forma de usar o DnD em modelos celulares sem problemas adicione esse objeto chamado `sensors`:
```typescript
const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
);
```

Adicione no seu `DndContext` o atributo `sensors` e passe como parametro seu objeto criado chamado `sensors`.
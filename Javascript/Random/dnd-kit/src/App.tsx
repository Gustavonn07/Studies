import { closestCorners, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, UniqueIdentifier, useSensor, useSensors } from '@dnd-kit/core';
import './App.css'
import { useState } from 'react';
import { TaskType } from './types';
import Column from './components/Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      title: "Add tasks to home page"
    },
    {
      id: 2,
      title: "Fix styling in about section"
    },
    {
      id: 3,
      title: "Learn how to center a div"
    }
  ]);

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
    })
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  
  return (
    <>
      <div className="App">
        <h1>My Tasks ✅</h1>

        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >

          <Column 
            tasks={tasks}
          />
        </DndContext>
      </div>
    </>
  )
}

export default App;

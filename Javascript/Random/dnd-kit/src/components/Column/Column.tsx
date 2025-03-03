import "./Column.css";
import { TaskType } from "../../types";

import {
    SortableContext, 
    verticalListSortingStrategy 
} from '@dnd-kit/sortable';
import Task from "../Task/Task";

interface Props {
    tasks: TaskType[];
}

function Column({ tasks }: Props) {

  return (
    <SortableContext
        items={tasks}
        strategy={verticalListSortingStrategy}
    >
        <ul className="column">
            {
                tasks.map((task) => (
                    <Task 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                    />
                ))
            }
        </ul>
    </SortableContext>
  )
}

export default Column;
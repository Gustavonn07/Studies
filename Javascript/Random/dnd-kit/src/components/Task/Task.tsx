import "./Task.css";
import { TaskType } from "../../types";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Task({ id, title }: TaskType) {

    const {
        attributes,
        listeners,
        transform,
        transition,
        setNodeRef
    } = useSortable({id});

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return (
        <li
            {...attributes}
            {...listeners}
            style={style}
            key={id}
            className={"task"}
            ref={setNodeRef}
        >
            <input type="checkbox" className="checkbox" />
            {title}
        </li>
    )
}

export default Task;
'use client';

import { Todo } from "@prisma/client"
import { TodoItem } from "..";

interface Props {
    todos?: Todo[];
}


export const TodosGrip = ({ todos = [] }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                todos?.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))
            }
        </div>
    )
}

export default TodosGrip
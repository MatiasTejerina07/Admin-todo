'use client';

import { Todo } from "@prisma/client"
import { TodoItem } from "..";
import { handlersTodos } from "../helpers/todos.endpoint";
import { useRouter } from "next/navigation";


interface Props {
    todos?: Todo[];
}


export const TodosGrip = ({ todos = [] }: Props) => {
    const router = useRouter();

    const toggleTodo = async (id: string, complete: boolean): Promise<any> => {
        const updateTodo = await handlersTodos.updateTodo(id, complete)
        console.log(updateTodo);
        router.refresh();
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                todos?.map((todo, index) => (
                    <TodoItem key={index} todo={todo} toggleTodo={toggleTodo} />
                ))
            }
        </div>
    )
}

export default TodosGrip
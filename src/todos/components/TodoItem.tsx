'use client';

import { Todo } from "@prisma/client";
import style from "./todo.style.module.css";
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
    todo: Todo;
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | undefined>
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
    return (
        <div className={todo?.complete ? style['todo-done'] : style['todo-pending']}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <div
                    onClick={() => toggleTodo(todo.id, !todo.complete)}
                    className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todo.complete ? "bg-blue-100" : "bg-red-100"}`}>
                    {todo.complete ?
                        (<IoCheckboxOutline />)
                        :
                        (<IoSquareOutline />)
                    }
                </div>
                <div className="text-center sm:text-left">
                    <p>{todo.description}</p>
                </div>
            </div>
        </div>
    )
}

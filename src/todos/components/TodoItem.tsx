import { Todo } from "@prisma/client";
import style from "./todo.style.module.css"
import { IoCheckboxOutline } from 'react-icons/io5'
interface Props {
    todo: Todo;
    //TODO:acciones que quiero llamar
}

export const TodoItem = ({ todo }: Props) => {
    return (
        <div className={todo?.complete ? style['todo-done'] : style['todo-pending']}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <div className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100`}>
                    <IoCheckboxOutline />
                </div>
                <div className="text-center sm:text-left">
                    <p>{todo.description}</p>
                </div>
            </div>
        </div>
    )
}

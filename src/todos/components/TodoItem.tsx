import { Todo } from "@prisma/client"

interface Props {
    todos: Todo[];
    //TODO:acciones que quiero llamar
}

export const TodoItem = ({ todos }: Props) => {
    return (
        <div>
            {JSON.stringify(todos)}
        </div>
    )
}

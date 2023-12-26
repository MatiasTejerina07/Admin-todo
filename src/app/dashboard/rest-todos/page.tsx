import prisma from "@/lib/prisma";
import { TodosGrip } from "@/todos";
export const metadata = {
    title: 'Lista de todos',
    description: 'Lista de todos',
};

export default async function RestTodosPage() {

    const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } })
    console.log(todos)


    return (
        <div>
            <TodosGrip todos={todos} />
        </div>
    );
}
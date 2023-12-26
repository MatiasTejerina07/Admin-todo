import { Todo } from "@prisma/client";


const updateTodo = async(id:string, complete:boolean):Promise<Todo> =>{
    
        const body = {complete};
        const todo = await fetch(`/api/todos/${id}`, {
            method: 'PUT',
            body:JSON.stringify(body),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res=>res.json());
        console.log({todo});

        return todo;
        

    
}

export const handlersTodos = {
    updateTodo
}
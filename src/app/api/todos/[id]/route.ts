
import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';
interface Arguments{
    params:{
        id:string
    }
}


export async function GET(request: Request, {params}:Arguments) { 
    const {id} = params;

  const response = await prisma.todo.findFirst({where:{id}})

  if(!response){
    return NextResponse.json({
        response:`El todo con id: ${id} no existe`
    },{status:400})
  }


  return NextResponse.json({
    response:response
  })
}



const putSchema = yup.object({
    complete:yup.boolean().optional(),
    description:yup.string().optional()
})


export async function PUT(request: Request, {params}:Arguments) { 
try {
    const {id} = params;
    const {complete, description} = await putSchema.validate(await request.json());
    const updateTodo = await prisma.todo.update({
        where:{
            id
        },
        data:{
            complete,
            description
        }
    })

    return NextResponse.json(updateTodo)
} catch (error) {
    return NextResponse.json(error, {status:400})
 }
}
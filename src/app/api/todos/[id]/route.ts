
import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

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
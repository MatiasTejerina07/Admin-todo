import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data:[
            {
                description:"piedra del poder"
            },
            {
                description:'piedra del alma'
            },
            {
                description:'piedra del sueño',
                complete:true
            }
        ]
    })
    
  return NextResponse.json({
    message:'se envio la petición'
  })
}
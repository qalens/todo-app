import { Prisma } from "@prisma/client"
import prisma from "./prisma"

export const createTodo=(caption:string)=>{
    return prisma.todoItem.create({
        data:{
            caption
        }
    })
}
export const getSingleTodo=(id:number)=>{
    return prisma.todoItem.findFirst({
        where:{
            id
        }
    })
}
export const deleteSingleTodo=(id:number)=>{
    return prisma.todoItem.delete({
        where:{
            id
        }
    })
}
export const updateSingleTodo=(id:number,isDone:boolean)=>{
    return prisma.todoItem.update({
        where:{
            id
        },
        data:{
            isDone
        }
    })
}
export const getAllTodos=({isDone}:{isDone?:boolean})=>{
    if (isDone==undefined){
        return prisma.todoItem.findMany({
            orderBy:{
                isDone:Prisma.SortOrder.asc
            }
        })    
    }
    return prisma.todoItem.findMany({
        where:{
            isDone
        }
    })
}

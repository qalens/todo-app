// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TodoItem } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteSingleTodo, getSingleTodo, updateSingleTodo } from '../../../belibs/dao/todoitem'

type Error ={
    message:string
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoItem|Error>
) {
    const {id }=req.query;
    if (req.method=='GET'){
        getSingleTodo(Number(id)).then(todo=>{
            if (todo)
                res.status(200).json(todo)
            else {
                res.status(404).json({message:`Todo with id ${id} not found`})
            }
        })
    }
    if (req.method=='DELETE'){
        deleteSingleTodo(Number(id)).then(todo=>{
            if (todo)
                res.status(200).json(todo)
            else {
                res.status(404).json({message:`Todo with id ${id} not found`})
            }
        })
    }
    if (req.method=='PUT'){
        console.log(req.body.isDone)
        updateSingleTodo(Number(id),req.body.isDone).then(todo=>{
            res.status(200).json(todo)
        })
    }
}

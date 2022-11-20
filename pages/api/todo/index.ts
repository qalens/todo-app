// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TodoItem } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTodo, getAllTodos } from '../../../belibs/dao/todoitem'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoItem[]|TodoItem>
) {
    if (req.method=='GET'){
        getAllTodos({}).then(todos=>{
            res.status(200).json(todos)
        })
    }
    if (req.method=='POST'){
        createTodo(req.body.caption).then(item=>{
            res.status(201).json(item)
        })
    }
}

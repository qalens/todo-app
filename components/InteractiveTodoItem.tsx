import { TodoItem } from "@prisma/client"
import { TrashIcon } from '@heroicons/react/24/outline'
export default function InteractiveTodoItem({data:{id,caption,isDone},onChange}:{data:TodoItem,onChange:()=>void}){
    return (<div className="todo-item" id={`${id}`}><span className={`text-2xl text-center cursor-pointer ${isDone?"line-through":""}`} onClick={()=>{
        fetch(`/api/todo/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                isDone: !isDone
            })
        }).then(res=>{
            onChange()
        })
    }}>{caption}</span><span className="float-right opacity-0 hover:opacity-100 cursor-pointer" onClick={()=>{
        fetch(`/api/todo/${id}`,{
            method:'DELETE'
        }).then(res=>{
            onChange()
        })
    }}><TrashIcon className="h-6 w-6 text-blue-500"/></span></div>)    
}
import { TodoItem } from "@prisma/client"
import { useCallback, useEffect, useState } from "react"
import InteractiveTodoItem from "./InteractiveTodoItem"
import TodoCreator from "./TodoCreator"

export default function TodoList(){
    const [isLoading, setLoading] = useState(false)
    const [allTodos,setAllTodos]=useState<TodoItem[]>([])
    const reload = useCallback(()=>{
        setLoading(true)
        fetch('/api/todo')
        .then((res) => res.json())
        .then((data) => {
            setAllTodos(data)
            setLoading(false)
        })
    },[]);
    useEffect(()=>{
        reload()
    },[])
    if (isLoading){
        return (<span>Loading</span>)
    }
    return (<ol className="divide-y border p-3">
        <li><TodoCreator onChange={()=>{reload()}}/></li>
        {allTodos.map(todo=>(<li className="p-2" key={todo.id}><InteractiveTodoItem data={todo} onChange={()=>{
            reload()
        }}/></li>))}
    </ol>)    
}
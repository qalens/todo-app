import { Input } from "@material-tailwind/react"
import { TodoItem } from "@prisma/client"
import { useState } from "react"
export default function TodoCreator({onChange}:{onChange:()=>void}){
    const [currentText,setcurrentText] = useState('');
    return (<Input id={"new-todo"} label="New Todo" onKeyPress={(event)=>{
        if(event.key=='Enter'){
            fetch('/api/todo',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    'caption':currentText
                })
            }).then(res=>{
                onChange()
            })
        }
    }} onChange={(e)=>{setcurrentText(e.target.value)}} value={currentText}/>)    
}
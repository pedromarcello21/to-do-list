import React from 'react'

export default function Form({toDo, setToDo, isEditing, setIsEditing, task}) {

    const handleSubmit = e => {
        e.preventDefault();
        if(!isEditing){
            fetch("http://localhost:1221/todo", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    task:e.target.task.value
                })
            })
            .then(res => res.json())
            .then(resConverted => setToDo([...toDo, resConverted]))
            e.target.task.value = "";
        }
        else{
            fetch(`http://localhost:1221/todo/${e.target.parentElement.id}`, {
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    task:e.target.task.value
                })
            })
            .then(() => setIsEditing(!isEditing))

        }
    }
  return (
    <form onSubmit = {handleSubmit} className = "form">
        {isEditing ? <input type ="text" name ="task" defaultValue = {task.task}/> : <input type ="text" name ="task"/>}
        {isEditing ? <button type ="submit">Edit Task</button> : <button type ="submit">Add Task</button>}
    </form>
  )
}

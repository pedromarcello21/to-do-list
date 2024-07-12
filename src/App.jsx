import { useState, useEffect } from 'react'
import './App.css'
import Form from "./Form.jsx"

function App() {

  const [toDo, setToDo] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState({})

  useEffect(()=>{
    fetch("http://localhost:1221/todo")
    .then(res => res.json())
    .then(resConverted => setToDo(resConverted))
  }, [isEditing])



  const deleteTask = e =>{
    e.preventDefault();
    const filtered = toDo.filter(task => task.id !== e.target.parentElement.id)
    fetch(`http://localhost:1221/todo/${e.target.parentElement.id}`, {
      method:"DELETE"
    })
    setToDo(filtered)
  }
  
  const editTask = task =>{
    setIsEditing(!isEditing)
    setCurrentTask(task)
  }


  return (
    <>
      <h1>Pedro's to do list</h1>
      {toDo.map(task =>
            <div id = {task.id} key = {task.id} className='task'> 
              <button onClick = {()=> editTask(task)}>✏️</button>
              <p>{task.task}</p>
              <button onClick = {deleteTask}>x</button>
              {isEditing && task.id === currentTask.id ? <Form isEditing={isEditing} setIsEditing = {setIsEditing} task = {task}/> : <></>}
      
            </div>
      )}
      <Form toDo = {toDo} setToDo = {setToDo}/>

    </>
  )
}

export default App

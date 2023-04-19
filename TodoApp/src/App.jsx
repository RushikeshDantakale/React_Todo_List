import {  useState } from 'react'
import './App.css'
import TaskList from './component/TaskList';
import AddTaskForm from './component/AddTaskForm';





function App() {
 
  const [taskArray , setTaskArray] = useState([]);

 
  const updateTask = ({id , update}) => {    
    setTaskArray(pre =>{
      return pre.map((item)=>{
        
       return (item.id !== id) || (update === "") ? item :{ ...item , 'title' : update };
      })
    })

  }



  const updateStatus = (id) => {
  
    setTaskArray(pre =>{
      return pre.map((item)=>{
        
          return (item.id !== id) ? item :{ ...item , 'status' : !item.status  };
        
       
      })
    })
  }


  const removeTask = (id) =>{
    setTaskArray(pre => {
      return pre.filter((item)=>{
        return item.id !== id;
      })
    })
  }

  return (
    <>
 
   
    <div className='todo_container'>

    <h1 className='heading'>TODO LIST</h1>
    <AddTaskForm setTaskArray = {setTaskArray}  taskArray = {taskArray} />

    <div className='tasklist_container'>
    <TaskList  updateTask = {updateTask}  taskArray = {taskArray} updateStatus={updateStatus} removeTask={removeTask}/>
    </div>
    </div>

    </>
  )
}

export default App

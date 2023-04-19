import React, { useContext, useState } from 'react'
import '../App.css'



export default function AddTaskForm({taskArray , setTaskArray}){

  

    const [task , setTask] = useState('')


  
   
    const handleSubmit= (e) => {
        e.preventDefault();
        if (task === "") {
          
        }else{
          setTaskArray(taskUpdate => [...taskUpdate , {'id':taskArray.length+1 , 'title':task , 'status' : false}]);
          setTask("");
        }
        
    }

   
  return (
    <div >
    <form onSubmit={handleSubmit}>
    <div className='add_task_container'>

    <div className='input_add'> 
     <input className='input' type="text" name='task' value={task} onChange={(e)=>setTask(e.target.value)}/>
     </div>

    <div className='btn_add'>
     <button className='btn' type='submit'>Add</button>

     </div>
     </div>
    </form>
    </div>
  )
}

import React from 'react'
import Task from './Task'



export default function TaskList({taskArray , updateTask , updateStatus , removeTask}) {



   
  
  console.log(taskArray,10 , 10);
  return (
    <div className=''>
    
    {(taskArray.length === 0 ) ? <div className='no_task'> <div> There are no tasks sirji!! Add a Task!</div> </div> :
    taskArray.map((item , index)=>{
     console.log(item, 18)
       return (<Task key={index} item={item}  updateTask={updateTask} updateStatus = {updateStatus}  removeTask={removeTask}/>)
    })
     }
   

       
    </div>
  )
}

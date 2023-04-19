import React, { useState } from 'react'



export default function Task({item , updateTask , updateStatus ,removeTask}) {
   
    const [edit , setEdit] = useState(false);
   const [update , setUpdate] = useState("");

 
   
    const {id , title , status} = item;

   
    console.log(update);    
  return (<>
    <div className='task_container'>
        <input className='checkbox' type="checkbox"  onChange={() => updateStatus(id)} />
        <p className='task'>{title}</p>
        <p className='status'>{!status ? "pending" : "completed"}  </p>
        <button className='btn_edit' onClick={()=>setEdit(!edit)}>edit</button>
        <button className='btn_delete' onClick={()=> removeTask(id)}>delete </button>
    </div>
    {edit && <div className='task_container'>
<input type="text" placeholder='Edit your task..' className='input_edit' name='update' value={update} onChange={(e)=>setUpdate(e.target.value)}/>
<button className='btn_update' onClick={()=>{ updateTask({id , update}); setEdit(!edit)  }}>update</button>
</div> }

    </>)
}

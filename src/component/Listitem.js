import React, { useContext, useState } from 'react'
import { taskcontext } from './Taskcontext'
import { MdDelete, MdEdit } from 'react-icons/md';


function Listitem({name,status}) {

  const {taskName,btnDelete,taskStatus,btnEdit,setTaskStatus} = useContext(taskcontext)

  const [check,setCheck] = useState(false);


  const handleChange = ()=>{

    var ctr = document.getElementById("checkbox1"+name)
    var state = ctr.checked
    //ctr.checked = !state;


  }

  return (
    <div className='bg-white flex justify-between mt-2 mx-5' >
            <div>
            <input type="checkbox" name="" id={`checkbox1${name}`} className='mx-5' checked={status==='complete'?true:false} onChange={handleChange}/>
            <span className='mx-5'>{name}</span>
            </div>
            <div>
            <button className='mx-5' value={name} onClick={(e)=>btnDelete(e)}>
              <span><MdDelete/></span>
              </button>
            <button className='mx-5' id='editBtn' value={name} onClick={(e)=>{
              btnEdit(e)
              const btn = document.getElementById('editBtn')
              
              }}><MdEdit/></button>
            </div>
            
            
            </div>
  )
}

export default Listitem
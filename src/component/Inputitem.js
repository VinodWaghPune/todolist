import React from "react";
import { useContext } from "react";
import { taskcontext } from "./Taskcontext";



function Inputitem() {

   // const setTaskName = useContext(TaskContext)

   const {taskName,setTaskName,taskStatus,setTaskStatus} = useContext(taskcontext);

   const textChange = (e)=>{
    setTaskName(e.target.value)
   }

   const selectChange = (e)=>{
    setTaskStatus(e.target.value)
   }


  return (
    <div className="mb-10 mt-10">
      <label className="mt-20 ml-5">TaskName</label>
      <input type="text" name="taskname" value={taskName} onChange={(e)=>textChange(e)} className="mt-5 mx-5"/>
      <label htmlFor="">Status</label>
      <select name='status' value={taskStatus} onChange={(e)=>selectChange(e)} className="mx-5">
        <option value="pending">pending</option>
        <option value="complete">complete</option>
      </select>
    </div>
  );
}

export default Inputitem;

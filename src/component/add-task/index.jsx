

import { useRef } from "react";
import { IoClose } from "react-icons/io5";

const AddTask=({setOpenAddTask, setAddTask, addTask, dataTask, setDataTask})=> {

  const nameRef = useRef();
  const descriptionRef = useRef();

  const handleAddTask =()=>{

    setDataTask({
      [dataTask.id]:Math.floor(Math.random()*100), 
      [dataTask.name]:nameRef.current.value, 
      [dataTask.description]: descriptionRef.current.value,
    })

    // setAddTask([...dataTask, ])
    console.log(dataTask)
  }

  const handleCloseAddTask=()=>{
    setOpenAddTask(false)
  }

  return (
    <div className="w-[400px] h-[280px] rounded bg-white fixed top-[100px] left-[500px] p-3">
      <div onClick={handleCloseAddTask}>
        <IoClose color="#616B65" size={25}/>
      </div>
      <div className="flex flex-col items-start justify-start gap-3 p-3 mb-4">
        <h3 className="mb-2">Add Task</h3>
        <input ref={nameRef} type="text" placeholder="task" className="w-full border  border-gray rounded-md outline-pale-green px-4 py-1"/>
        <input ref={descriptionRef} type="text" placeholder="description" className="w-full border  border-gray rounded-md  outline-pale-green px-4 py-1"/>
      </div>
      <div className="flex justify-end items-center gap-2 p-3">
        <button onClick={handleCloseAddTask} className="bg-orange text-white text-base px-2 py-1 rounded-md">Cancel</button>
        <button onClick={handleAddTask} className="bg-dark-green text-white text-base px-2 py-1 rounded-md">Add Task</button>
      </div>
    </div>
  )
}

export default AddTask;


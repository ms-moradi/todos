"use client"

import { useState } from "react";
import DailyTasks from "@/component/daily-tasks";
import Navbar from "@/component/navbar/index";
import AddTask from "@/component/add-task";
import { GoPlus } from "react-icons/go";

const Task =()=>{

    const[openAddTask, setOpenAddTask] = useState(false);
    const[addTask, setAddTask] = useState([]);
    const[dataTask, setDataTask] = useState({id:"", name:"", description:""});

    const handelAddTask =()=>{
        setOpenAddTask(true)
    }

    return(
        <div className="w-full flex flex-col items-start p-8 relative">
            <div className="w-full ">
                <Navbar/>
            </div>
            <div className="flex justify-start items-center gap-8">
                {/* <DailyTasks/>
                <DailyTasks/>
                <DailyTasks/>
                <DailyTasks/> */}
            </div>
            <div  onClick={handelAddTask} className="w-12 h-12 rounded-full bg-beige flex justify-center items-center fixed bottom-4 right-4">
                <GoPlus size={30} color="#fff"/>
            </div>
            <div  className={openAddTask?'flex': 'hidden'}>
                <AddTask setOpenAddTask={setOpenAddTask}  setAddTask={setAddTask} addTask={addTask} dataTask={dataTask} setDataTask={setDataTask}/>
            </div>
        </div>
    )
}

export default Task;
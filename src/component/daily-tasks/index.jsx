import { IoEllipsisHorizontalSharp } from "react-icons/io5";


const DailyTasks =()=>{
    return(
        <div className="min-w-72 border-[5px] rounded-xl border-light-white bg-light-white">
            <div className="w-full h-10 bg-light-white py-1 px-2 2 text-dark-gray flex justify-between items-center">
                <h3>Monday</h3>
                <IoEllipsisHorizontalSharp size={20} color="#616B65"/>
            </div>
            <div className="w-full h-96 rounded-lg bg-light-gray">

            </div>
        </div>
    )
}

export default DailyTasks;
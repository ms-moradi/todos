
import Image from "next/image";
import { itemDashboard } from "@/data/data";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import profile from "../../image/profile.jpg";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TiStarOutline } from "react-icons/ti";


const Dashboard = () => {
  return(
    <div className="w-[300px] h-screen">
        <div className="w-full h-2/5 bg-pale-green pt-6 px-8 flex flex-col gap-4">
            <div className=" flex justify-start items-center text-white gap-3">
                <FaArrowsTurnToDots color="pink" size={20}/>
                <h1 className="font-bold text-base">Todo</h1>
            </div>
            <div>
                <div className="flex justify-start items-center gap-3 mt-4">
                    <Image src={profile} alt="profile" width={50} height={50} className="rounded-full border-2 border-white"/>
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-white text-sm font-bold">Full Name</h1>
                        <div className="w-36 h-[3px] bg-dark-green rounded-full relative flex items-center">
                            <div className="w-14 h-[3px] bg-bone-white absolute"></div>
                        </div>
                        <div> 
                            <span className="text-bone-white text-xs">6,245</span>
                            <span className="text-dark-green text-xs"> / 20,420</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <div className="flex items-center gap-3 text-bone-white">
                    <IoCheckmarkDoneSharp size={20}/>
                    <div className="flex flex-col items-start justify-center">
                        <span className="text-xs">2,460</span>
                        <span className="text-bone-white text-[10px]">Work Done</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-bone-white">
                    <TiStarOutline size={20}/>
                    <div className="flex flex-col items-start justify-center">
                        <span className="text-xs">10,450</span>
                        <span className="text-bone-white text-[10px]">Active Tasks</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-3/5 bg-white flex flex-col justify-start gap-1 py-10 px-12" >
            {itemDashboard.map(item=>(
                <div key={item.id} className="flex justify-start items-center gap-8 py-3 px-6 rounded text-dark-green hover:bg-pale-green hover:text-[#fff]">
                    <div className="text-lg">{item.icon}</div>
                    <div className="text-base">{item.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Dashboard;





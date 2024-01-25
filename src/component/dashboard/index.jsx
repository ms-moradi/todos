
import Image from "next/image";
import { itemDashboard } from "@/data/data";
import { AiOutlineDashboard } from "react-icons/ai";
const Dashboard = () => {
  return(
    <div className="w-[300px] h-screen">
        <div className="w-full h-2/5 bg-pale-green">
            dashboard
        </div>
        <div className="w-full h-3/5 bg-bone-white flex flex-col justify-start items-center gap-8 py-10" >
            
            {itemDashboard.map(item=>(
                <div key={item.id} className="flex justify-start items-center gap-8">
                    <div>{item.icon}</div>
                    <div>{item.name}</div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Dashboard;





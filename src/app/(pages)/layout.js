import DashboardCom from "@/component/dashboardCom"
import"../../style/globals.css";

export default function SecondeLayout ({children}){
    return(
        <div className="w-full h-screen flex ">
            <DashboardCom/>
            <div id="main-bg" className="w-full h-screen  overflow-x-scroll">
                {children}
            </div>
        </div>
    )
}
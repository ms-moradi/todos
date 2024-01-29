

import SearchBar from "../searchbar";

import { HiSquares2X2 } from "react-icons/hi2";
import { MdOutlineReorder } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";



const Navbar = ()=>{
    return(
        <div className="w-full py-2 mt-1 mb-8 flex justify-between items-center">
            <div className="flex gap-6">
                <div className="min-w-10 flex items-center gap-6  bg-pale-green text-bone-white pl-6 pr-4 py-3 rounded-md">
                    <h3>show : </h3>
                    <select className=" text-bone-white bg-pale-green outline-none"> 
                        <option value={"all"} className="mt-2">All</option>
                        <option value={"done"}>Done</option>
                        <option value={"undone"}>Undone</option>
                    </select>
                </div>
                <div className="w-28 h-12 bg-very-light-green flex justify-center items-center gap-1 rounded-md p-1">
                    <HiSquares2X2 size={35} color="#EBF1F2" className="w-1/2  rounded-md "/>
                    <MdOutlineReorder size={35} color="#EBF1F2"
                        className="w-1/2   rounded-md"
                    />
                </div>
                <div className="w-14 h-12 rounded-md flex justify-center items-center bg-pale-green text-bone-white pl-1">
                    <FaRegEdit size={28}/>
                </div>
            </div>
            <div>
                <SearchBar/>
            </div>
        </div>
    )
}

export default Navbar;
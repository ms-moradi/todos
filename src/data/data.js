import { AiOutlineDashboard } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";


export const itemDashboard = [
    {id:1, name:"Dashboard", icon:<AiOutlineDashboard/>, src:"/dashboard"},
    {id:2, name:"All Task", icon:<BsListTask />, src:"/task"},
    {id:3, name:"Calendar", icon:<FaRegCalendarAlt/>, src:"/calendar"},
    {id:4, name:"Messages", icon:<SlEnvolopeLetter/>, src:"/message"},
    {id:5, name:"Settings", icon:<IoSettingsOutline/>, src:"/setting-page"},
]
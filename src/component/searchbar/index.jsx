
import { IoIosSearch } from "react-icons/io";


const SearchBar=()=>{
    return(
        <div className="h-12 flex justify-start items-center bg-white rounded-md pl-4 pr-2">
            <input type="search" placeholder="Search" className="outline-none" />
            <IoIosSearch color="#A1ABA6" size={30}/>
        </div>
    )
}

export default SearchBar;
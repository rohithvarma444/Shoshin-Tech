import { FiSearch, FiBell, FiMessageCircle } from 'react-icons/fi'; 
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

import Profile from '../../assets/profile.png'
function Navbar() {
  return (
    <div className="w-full h-16 bg-white  flex items-center justify-between px-4 border-b border-gray-200 border-width-3 py-6">
      
      
      <div className="flex items-center bg-gray-100 p-2 rounded-lg w-[30%] ml-10">
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent outline-none w-full" 
        />
        <FiSearch className="text-gray-500 cursor-pointer" />
      </div>
      
      <div className="flex items-center space-x-6 gap-x-1 mr-10">
        
        <div className="relative">
          <FiBell className="text-gray-600 text-xl cursor-pointer" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        <FiMessageCircle className="text-gray-600 text-xl cursor-pointer" />
        
        <div className="flex items-center gap-x-3 cursor-pointer">
          <img 
            src={Profile}
            alt="User profile" 
            className="w-10 h-10 rounded-full"
          />
          <div className='flex items-center gap-x-2'>
            <span className="text-gray-700 font-semibold">Admirra John</span>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Navbar;

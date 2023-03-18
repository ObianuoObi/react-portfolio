import { NavLink } from "react-router-dom";
import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Header () {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }
    return (
     
      
      <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
         <h1 className="w-full text-3xl font-bold text-[#38bdf8]">O.B.I.</h1>
        <ul className="hidden md:flex">
          <l1 className= 'p-4'>Home</l1>
          <l1 className= 'p-4'>Projects</l1>
          <l1 className= 'p-4'>Contact</l1>
        </ul>
<div onClick={handleNav} className= 'block md:hidden '>
  {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/> }
  
</div>

<div className={!nav ? 'fixed left-4 top-7 w-[60%] h-full border-r border-r-white-900 bg[] ease-in-out duration-500' : 'fixed left-[-100%]' }>
<h1 className="w-full text-3xl font-bold text-[#38bdf8]">O.B.I.</h1>
  <ul className="uppercase grid ">
  <l1 className= 'p-4 border-b border-gray-100'>Home</l1>
  <l1 className= 'p-4 border-b border-gray-100'>Projects</l1>
   <l1 className= 'p-4 border-b border-gray-100'>Contact</l1>
  </ul>
</div>
  </div>

    )
}

export default  Header;
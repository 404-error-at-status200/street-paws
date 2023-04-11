import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import Logo  from "./logo"
import Profile from "./profile"
import Hamburger from "./hamburger"


function Main(){
    const[nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav);
    };
    return (
        <div className="flex justify-between items-center max-width-[1240px] mx-auto px-4 h-24">
            <div>
            {/* <img src={Logo} alt="Your SVG" /> */}
            <Logo/>
            </div>
            <ul className='md:flex hidden md:space-x-4 items-center'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Community</li>
                <li className='p-4'>Report</li>
                <button className='px-6 rounded-xl h-11 bg-[#61b3ff] border-[#61b3ff] border-[2px] hover:bg-white transition-all'>Login</button>
                <button className='px-4 h-11 border-[2px] rounded-xl border-[#61b3ff] hover:bg-[#61b3ff] transition-all'>SignUp</button>
            </ul>

            <div onClick={handleNav} className='flex md:hidden space-x-4'>
                <CgProfile size={20} color='#61b3ff'/>
                {nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#61b3ff] md:hidden ease-in-out duration-500 z-10" : "fixed top-0 -left-full ease-in-out duration-500 "}>
                <h1 className='w-full text-3xl font-bold m-4'>Street Paws</h1>
                <ul className='pt-4 uppercase'>
                    <li className='p-4 mx-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 mx-4 border-b border-gray-600'>Community</li>
                    <li className='p-4 mx-4 border-b border-gray-600'>Report</li>
                </ul>
            </div>
        </div>
    );
};

export default Main
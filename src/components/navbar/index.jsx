import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import Logo  from "./logo"
import Profile from "./profile"
import Hamburger from "./hamburger"
import Menu from './navbar-menu'


function Main(){
    const[nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav);
    };
    return (
        <div className="flex justify-between items-center max-width-[1240px] mx-auto px-4 h-24">
            <Logo/>
            {nav && <Menu/>}
            <ul className='md:flex hidden md:space-x-4 items-center'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Community</li>
                <li className='p-4'>Report</li>
                <button className='px-6 rounded-xl h-11 bg-[#61b3ff] border-[#61b3ff] border-[2px] hover:bg-white transition-all'>Login</button>
                <button className='px-4 h-11 border-[2px] rounded-xl border-[#61b3ff] hover:bg-[#61b3ff] transition-all'>SignUp</button>
            </ul>
            <div  className='flex md:hidden space-x-4' >
                <Profile />
                {nav ? <AiOutlineClose size={20} onClick={handleNav}/> :  <AiOutlineMenu size={20} onClick={handleNav}/>}
            </div>
        </div>
    );
};

export default Main
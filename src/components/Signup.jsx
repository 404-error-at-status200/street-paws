import React, { useState } from 'react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaApple } from 'react-icons/fa'

const Signup = () => {

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };


    return (
        <div>
            <button onClick={show}>Signup</button>
            <Rodal visible={visible} onClose={hide} enterAnimation="slideDown" leaveAnimation="slideDown" height={575}>
                <div>
                    <form action="" className='flex flex-col space-y-4'>
                        <h1 className='text-center font-semibold text-xl'>Sign Up</h1>
                        <div className='flex flex-col'>
                            <label htmlFor="text/plain" className='px-4 pb-2'></label>
                            <input type="text" placeholder='Enter your username' id='email' name='email' className='border px-4 py-2 mx-4 rounded-full outline-none hover:border-[#61b3ff]' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='px-4 pb-2'></label>
                            <input type="text" placeholder='Enter your email' id='email' name='email' className='border px-4 py-2 mx-4 rounded-full outline-none hover:border-[#61b3ff]' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='px-4 pb-2'></label>
                            <input type="tel" placeholder='Enter your phone number' id='email' name='email' pattern="{0-9}[10]" className='border px-4 py-2 mx-4 rounded-full outline-none hover:border-[#61b3ff]' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password" className='px-4 pb-2'></label>
                            <input type="Password" placeholder='Password' id='password' name='password' className='border px-4 py-2 mx-4 rounded-full outline-none hover:border-[#61b3ff]' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password" className='px-4 pb-2'></label>
                            <input type="Password" placeholder='Confirm Password' id='password' name='password' className='border px-4 py-2 mx-4 rounded-full outline-none hover:border-[#61b3ff]' />
                        </div>
                        <button className='px-4 h-11 mx-28 border-[2px] rounded-xl border-[#61b3ff] hover:bg-[#61b3ff] transition-all'>SignUp</button>
                        <h1 className='text-center font-semibold text-md'>Already have account? <a href="#"><span className='text-center font-semibold text-md text-blue-500'>Login</span></a></h1>
                    </form>
                    <div className='flex flex-col'>
                        <div className='text-center text-lg'>Signin with</div>
                        <div className='flex space-x-16 py-4 justify-center items-center'>
                            <FcGoogle size={30} /><FaFacebook size={30} color='#4267B2' /><FaApple size={30} color='#555555' />
                        </div>
                    </div>
                </div>
            </Rodal>
        </div>
    );
}

export default Signup

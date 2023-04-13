import React,{ useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook,FaApple} from 'react-icons/fa'



const Login = () => {
        const [visible, setVisible] = useState(false);
      
        const show = () => {
          setVisible(true);
        };
      
        const hide = () => {
          setVisible(false);
        };
      
        return (
          <div>
            <button onClick={show}>Login</button>
            <Rodal visible={visible} onClose={hide} enterAnimation="slideDown" leaveAnimation="slideDown" height={450}>
              <div>
                <form action="" className='flex flex-col space-y-4'>
                <h1 className='text-center font-semibold text-xl'>Login</h1>
                <div className='flex flex-col'>
                <label htmlFor="email" className='px-4 pb-2'></label>
                    <input type="text" placeholder='Enter your email' id='email' name='email' className='border px-4 py-2 mx-4 rounded-full outline-none hover:border-[#61b3ff]'/>
                </div> 
                <div className='flex flex-col'>
                <label htmlFor="password" className='px-4 pb-2'></label>
                    <input type="Password" placeholder='Password' id='password' name='password' className='border px-4 py-2 mx-4 rounded-full outline-none hover:border-[#61b3ff]'/>
                </div> 
                <button className='px-4 h-11 mx-28 border-[2px] rounded-xl border-[#61b3ff] hover:bg-[#61b3ff] transition-all'>Login</button>
                <a href="#"><h1 className='text-center font-semibold text-md'>Forgot Your Password</h1></a>
                <h1 className='text-center font-semibold text-md'>Don't have account? <a href="#"><span className='text-center font-semibold text-md text-blue-500'>Sign Up</span></a></h1>
                </form>
                <div className='flex flex-col'>
                <div className='text-center text-lg'>Signin with</div>
                <div className='flex space-x-16 py-4 justify-center items-center'>
                <FcGoogle size={30}/><FaFacebook size={30} color='#4267B2'/><FaApple size={30} color='#555555'/>
                </div>
                </div>
              </div>
            </Rodal>
          </div>
        );
}

export default Login

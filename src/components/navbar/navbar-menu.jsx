import React, { useState } from "react";
import Login from "../Authentication/login";
import Signup from "../Authentication/signup";

function Menu() {
  const [isLogin, setIsLogIn] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [visible, setVisible] = useState(false)
  function login() {
    setIsLogIn(!isLogin)
    console.log("run")
  }
  function signup(){
    setIsSignup(!isSignup)
  }
  return (
    <div
      className={
        "absolute top-0 left-0 min-w-[60%] h-full border-r border-r-gray-900 bg-[#61b3ff] md:hidden ease-in-out duration-500 z-10"
      }
    >
      <h1 className="w-full text-3xl font-bold m-4">Street Paws</h1>
      <ul className="pt-4 uppercase">
        <li className="p-4 mx-4 border-b border-gray-600">Home</li>
        <li className="p-4 mx-4 border-b border-gray-600">Community</li>
        <li className="p-4 mx-4 border-b border-gray-600">Report</li>
        <li className="p-4 mx-4 border-b border-gray-600" onClick={signup}>Sign Up</li>
        <li className="p-4 mx-4 border-b border-gray-600" onClick={login}>Log In</li>
      </ul>
      {isSignup && <Signup display={signup}/>}
      {isLogin && <Login display={login}/>}
    </div>
  );
}

export default Menu;

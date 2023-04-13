import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      setError("");
      login(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError("Failed to create an account");
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <div>
      <Rodal
        visible={true}
        onClose={props.display}
        enterAnimation="slideDown"
        leaveAnimation="slideDown"
        height={450}
        width={350}
      >
        <div>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col space-y-4"
          >
            <h1 className="text-center font-semibold text-xl">Login</h1>
            <div className="flex flex-col">
              <label htmlFor="email" className="px-4 pb-2"></label>
              <input
                type="text"
                placeholder="Enter your email"
                className="border px-4 py-2 mx-4 rounded-full outline-none hover:border-[#61b3ff]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="px-4 pb-2"></label>
              <input
                type="Password"
                placeholder="Password"
                className="border px-4 py-2 mx-4 rounded-full outline-none hover:border-[#61b3ff]"
              />
            </div>
            <button className="px-4 h-11 mx-28 border-[2px] rounded-xl border-[#61b3ff] hover:bg-[#61b3ff] transition-all">
              Login
            </button>
            <a href="#">
              <h1 className="text-center font-semibold text-md">
                Forgot Your Password
              </h1>
            </a>
            <h1 className="text-center font-semibold text-md">
              Don't have account?{" "}
              <a href="#">
                <span className="text-center font-semibold text-md text-blue-500">
                  Sign Up
                </span>
              </a>
            </h1>
          </form>
          <div className="flex flex-col">
            <div className="text-center text-lg">Or Log In with</div>
            <div className="flex space-x-16 py-4 justify-center items-center">
              <FcGoogle size={30} />
              <FaFacebook size={30} color="#4267B2" />
              <FaApple size={30} color="#555555" />
            </div>
          </div>
        </div>
      </Rodal>
    </div>

    // <form onSubmit={handleSubmit}>
    //     <label>Email :</label> <input type='email' ref={emailRef} required/>
    //     <label>Password :</label> <input type='password' ref={passwordRef} required autoComplete='on'/>
    //     <button type='submit' disabled={loading}>Submit</button>
    // </form>
  );
}

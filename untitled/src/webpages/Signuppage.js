import React from 'react';
import Background from '../assets/backgroundv.mp4';
import { MdWavingHand } from 'react-icons/md';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';

const Signup = () => {
  return (
    <div className="flex ">
      <section className=" w-3/12"></section>
      <section className="w-full relative ">
      <video className="w-full h-full fixed" src={Background} autoPlay loop muted/>
      <div className="absolute my-5">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#080398e3] via-[#1badfc] to-[#00e1ffe0] ml-24  ">Welcome!</h1>
        <h2 className="ml-40 text-xl text-black ">-Join with us & explore more.</h2>
      </div>
        <main className="absolute flex flex-col items-center justify-center w-full  h-screen flex-1 text-center">
          <div className="rounded-bl-3xl flex w-2/3 max-w-4xl ">
            <div className=" w-3/5 p-5 shadow-gray-200 shadow-md ">
              <div className="text-left font-bold">
                <span className="font-normal">Arc</span>Star
              </div>
              <div className="py-4">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-black via-gray-600 to-gray-200 mb-2 ">Log In to Account</h2>
                <div className="border-2 w-96 border-black inline-block mb-2"></div>
                <div className="flex justify-center my-2 text-gray-400">
                  <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                    <FaFacebookF className="text-sm"/>
                  </a>
                  <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                    <FaGoogle className="text-sm"/>
                  </a>
                  <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                    <FaLinkedinIn className="text-sm "/>
                  </a>
                  <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                    <FaTwitter className="text-sm "/>
                  </a>
                </div>
                <p className="text-gray-400">OR</p>
                <p className="text-gray-400 my-4"> Use your Email instead. </p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                  <FiMail className="text-gray-400 m-2 text-md"/>
                    <input type="email" placeholder="Enter your Email" className="bg-gray-100 outline-none flex-1"/>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 m-2 text-lg" />
                    <input type="password" placeholder="Enter your Password" className="bg-gray-100 outline-none flex-1" />
                  </div>
                </div>
                <div className="flex justify-evenly mb-6 ml-18 ">
                  <label className="flex items-center text-sm cursor-pointer"><input type="checkbox" name="remember" className="mr-1 cursor-pointer "/>
                  Remember Me
                  </label>
                  <a href="#" className="text-sm hover:font-underline">Forgot Password?</a>
                </div>
                <a href="#" className=" rounded-full py-2 px-12 inline-block font-semibold bg-gradient-to-tr from-black via-gray-700 to-gray-500 hover:bg-gradient-to-bl text-white hover:tracking-wider duration-300">Log In</a>
              </div>
            </div>
            <div className=" w-2/5 bg-gradient-to-tr from-[#070281e3] via-[#2573e1] to-[#00e1ffe0] text-white shadow-md shadow-gray-400 py-36 px-12 ">
              <div className="text-center text-3xl animate-shake"><MdWavingHand/></div>
              <h1 className="text-3xl font-bold " >Hello, User!</h1>
              <div className="border-2 w-60 border-white inline-block mb-2 "></div>
                <p >Don't have an account yet?</p>
                <p className="mb-8 text-gray-100"> Sign in now & start learning.</p>
                <a href="#" className=" border-2 border-white rounded-full py-2 px-12 inline-block font-semibold hover:bg-white hover:text-[#0903abe3] hover:tracking-wider duration-500">Sign Up</a>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Signup;

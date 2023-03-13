import React from 'react';
import Background from '../assets/backgroundv.mp4';
import { MdWavingHand, MdLockOutline } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';

const Signup = () => {
    return (
        <div className="flex ">
            <section className=" w-3/12"></section>
            <section className="w-full relative ">
                <video className="w-full h-full fixed" src={Background} autoPlay loop muted />
                <main className="absolute flex flex-col items-center justify-center w-full  h-screen flex-1 text-center">
                    <div className="rounded-bl-3xl flex w-2/3 max-w-4xl ">
                        <div className=" w-2/5 bg-gradient-to-tr from-[#070281e3] via-[#2573e1] to-[#00e1ffe0] text-white shadow-md shadow-gray-400 py-36 px-12 ">
                            <div className="text-center text-3xl animate-shake"><MdWavingHand /></div>
                            <h1 className="text-3xl font-bold " >Welcome back !</h1>
                            <div className="border-2 w-60 border-white inline-block mb-2 "></div>
                            <p >Make your account in seconds & boost your growth from today.</p>
                        </div>
                        <div className=" w-3/5 p-5 shadow-gray-200 shadow-md bg-white">
                            <div className="text-left font-bold">
                                <span className="font-normal">Arc</span>Star
                            </div>
                            <div className="py-4 ">
                                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-black via-gray-600 to-gray-200 mb-2 ">Create Account</h2>
                                <div className="border-2 w-96 border-black inline-block mb-2"></div>
                                <p className="text-gray-400 mb-5"> Enter your personal details.</p>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-100 w-80 p-2 flex items-center mb-2">
                                        <BsPerson className="text-gray-400 m-2 text-lg"/>
                                        <input type="name" placeholder="Enter your full name" className="bg-gray-100 outline-none flex-1"/>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-100 w-80 p-2 flex items-center mb-2">
                                        <FiMail className="text-gray-400 m-2 text-lg" />
                                        <input type="email" placeholder="Enter your email" className="bg-gray-100 outline-none flex-1" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-100 w-80 p-2 flex items-center mb-2">
                                        <MdLockOutline className="text-gray-400 m-2 text-lg" />
                                        <input type="password" placeholder="Create Password" className="bg-gray-100 outline-none flex-1" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-100 w-80 p-2 flex items-center mb-8">
                                        <MdLockOutline className="text-gray-400 m-2 text-lg"/>
                                        <input type="password" placeholder="Confirm Password" className="bg-gray-100 outline-none flex-1"/>
                                    </div>
                                </div>
                                <a href="/login" className=" rounded-full py-2 px-12 inline-block font-semibold bg-gradient-to-tr from-black via-gray-700 to-gray-500 hover:bg-gradient-to-bl text-white hover:tracking-wider duration-300">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Signup
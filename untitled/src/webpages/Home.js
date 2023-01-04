import React from 'react';
import Background from '../assets/backgroundv.mp4';
import Image from '../assets/background.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex ">
      <section className="w-3/12"></section>
      <section className="w-full relative">
      <video className="h-screen w-full fixed" src={Background} autoPlay loop muted />
              <div className="absolute my-10"> 
        <h1 className="md:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#080398e3] via-[#1fe5ff] to-[#00e1ffe0] md:ml-24 ">ArcStar</h1>
        <h2 className="md:text-xl text-sm text-black md:ml-40 ml-10">-Closer like Proxima Centurai.</h2>
        <h2 className="md:m-10 m-5 md:ml-60 md:w-7/12 md:text-justify text-gray-500 md:text-[16px] text-[13px]"> A student coding platform for beginners. This platform allows beginner students to embark on their 100 days of code challenge and connect with other students to discuss their progress and exchange ideas. This platform will not only help students stay motivated and accountable during their coding journey, but also provide them with a supportive community of like-minded individuals to turn to for guidance and inspiration at the same time.</h2>
        <div className="md:flex md:w-80 md:h-80 w-52 md:m-16 m-3 md:ml-28">
          <img className="rounded-full justify-center items-center" src={Image} />
            <div className="flex md:gap-10 gap-3 md:m-20 my-10 text-white text-xl font-semibold w-0 h-0 ">
              <NavLink href="#" target="blank">
                <div className="bg-gradient-to-tr from-black via-gray-800 to-gray-500 justify-center md:text-[22px] text-[14px] md:w-52 md:h-40  w-[115px] h-30 text-center md:p-5 p-2 hover:scale-110 duration-200">
                  100DaysofCode Challenge
                  <h1 className="md:text-sm text-xs text-end md:py-9 py-2 whitespace-nowrap font-extralight hover:tracking-wider duration-300">Get Started !</h1>
                </div>
              </NavLink>

              <NavLink href="#" target="blank">
                <div className="bg-gradient-to-tr from-[#080398e3] via-[#0069ff] to-[#00e1ffe0] justify-center md:text-[22px] text-[14px] md:w-52 md:h-40 h-30 w-[115px] text-center md:p-5 p-2 hover:scale-110 duration-200">
                  Take the Online Quiz 
                  <h1 className="md:text-sm text-xs text-end md:py-10 py-2 whitespace-nowrap font-extralight hover:tracking-wider duration-300">Test your skills ! </h1>
                </div>
              </NavLink>
            </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
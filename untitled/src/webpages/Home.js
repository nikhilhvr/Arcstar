import React from 'react';
import Background from '../assets/backgroundv.mp4';
import Image from '../assets/background.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex ">
      <section className=" w-3/12"></section>
      <section className="w-full relative">
      <video className="h-full w-full fixed" src={Background} autoPlay loop muted />
              <div className="absolute my-10"> 
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#080398e3] via-[#1fe5ff] to-[#00e1ffe0] ml-24 ">ArcStar</h1>
        <h2 className="text-xl text-black ml-40">-Closer like Proxima Centurai.</h2>
        <h2 className="m-10 mx-60 w-7/12 text-justify text-gray-500"> A student coding platform for beginners. This platform allows beginner students to embark on their 100 days of code challenge and connect with other students to discuss their progress and exchange ideas. This platform will not only help students stay motivated and accountable during their coding journey, but also provide them with a supportive community of like-minded individuals to turn to for guidance and inspiration at the same time.</h2>
        <div className="flex w-80 m-16 ml-28 ">
          <img className="rounded-full" src={Image} />
            <div className="flex gap-10 m-20 text-white text-xl font-semibold">
              <NavLink href="#" target="blank">
                <div className="bg-gradient-to-tr from-black via-gray-800 to-gray-500 w-52 h-40 justify-center text-center p-5 hover:scale-110 duration-200">
                  100DaysofCode Challenge
                  <h1 className="text-sm text-end py-9 whitespace-nowrap font-extralight hover:tracking-wider duration-300">Get Started !</h1>
                </div>
              </NavLink>

              <NavLink href="#" target="blank">
                <div className="bg-gradient-to-tr from-[#080398e3] via-[#0069ff] to-[#00e1ffe0] h-40 w-52 justify-center text-center p-5 hover:scale-110 duration-200">
                  Take the Online Quiz 
                  <h1 className="text-sm text-end py-10 whitespace-nowrap font-extralight hover:tracking-wider duration-300">Test your skills ! </h1>
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
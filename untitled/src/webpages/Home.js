import React from 'react';
import Background from '../assets/backgroundw.mp4'

const Home = () => {
  return (
        <div className="w-full h-screen absolute">
          <video className="w-full h-full object-cover" src={Background} autoPlay loop muted/>
          <div className="absolute w-full h-full top-0 left-0 bg-gray-500/30"></div>
          <div className="absolute top-0 w-full h-full flex flex-col text-left p-4 ">
        <h1 className="text-5xl outline font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-black via-cyan-600 to-cyan-100 ml-28">ArcStar</h1>
            <h2 className="text-xl font-extralight text-black ml-44">-Closer like Proxima Centurai.</h2>
          </div>
        </div>
  );
};

export default Home;
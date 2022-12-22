import React from 'react';
import Background from '../assets/backgroundw.mp4';

const About = () => {
  return (
    <div className="w-full h-screen absolute">
      <video className="w-full h-full object-cover" src={Background} autoPlay loop muted />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-500/30"></div>
      <div className="absolute top-0 w-full h-full text-white p-4 ">
        <h1 className="text-3xl">Explore karna baaki hai abhi 😅</h1>
      </div>
    </div>
  );
};

export default About;

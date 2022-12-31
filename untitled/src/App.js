import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './webpages/Home';
import Community from './webpages/Community';
import Profile from './webpages/Profile';
import Compiler from './webpages/Compiler';
import About from './webpages/About';
import Signup from './webpages/Signuppage';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/compiler" element={<Compiler/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

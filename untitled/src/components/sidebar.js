import React from 'react';
import '../App.css';
import { HiOutlineHome, HiOutlineInformationCircle } from 'react-icons/hi';
import { GiFlexibleStar } from 'react-icons/gi';
import { IoIosPeople, } from 'react-icons/io';
import { RiCodeSSlashLine, RiInstagramFill, RiLinkedinBoxFill, RiGithubFill, RiTwitterFill } from 'react-icons/ri';
import { BsPerson, } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

    const menuItem=[
    {
        path: "/home",
        name: "Home",
        icon: <HiOutlineHome />
    },
    {
        path: "/community",
        name: "Community",
        icon: <IoIosPeople />
    },
    {
        path: "/compiler",
        name: "Compiler",
        icon: <RiCodeSSlashLine/>
    },
    {
        path: "/about",
        name: "AboutUs",
        icon: <HiOutlineInformationCircle/>
    },
    {
        path: "/profile",
        name: "Profile",
        icon: <BsPerson/>
    },
]

const user=[
    {
        path: "/signup",
        name: "LogIn / SignUp "
    },
]

return (
    <div className="flex w-full md:h-full h-[40%] fixed">
        <div className="bg-black text-white md:m-2 m-1 md:w-72 w-9 md:rounded-none rounded-full">
            <div className="flex md:p-10 p-2">
                <GiFlexibleStar size={45}/>
            </div>  
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} keys={index} className="flex hover:tracking-wide md:m-2 m-1 md:p-2 p-1 md:gap-4 rounded-xl">
                        <div className="md:text-2xl text-gray-200 text-xl"> {item.icon} </div>
                        <div className="px-2 md:text-gray-200 overflow-hidden">{item.name}</div>
                    </NavLink>
                ))
            }
            <div  className="m-12 h-7 text-center justify-center bg-gradient-to-tr from-[#0700c5e3] to-[#00e1ffe0] rounded-md hover:bg-gradient-to-bl overflow-hidden">
            {
                user.map((user, index) => (
                    <NavLink to={user.path} keys={index} className="text-gray-200">
                        <div>{user.name}</div>
                    </NavLink>
                ))
            }
            </div>
            <div>
                <div className="md:grid grid-cols-4 md:text-3xl text-2xl md:gap-5 py-32 md:m-5 m-1 justify-center items-center md:cursor-pointer text-blue-600">
                    <div className="flex md:text-blue-600 md:hover:text-blue-300 py-1">
                        <a href='https://www.instagram.com' target="blank" >
                            <RiInstagramFill />
                        </a>
                    </div>
                    <div className="flex md:text-blue-500 md:hover:text-blue-300 py-1">
                        <a href='https://www.github.com' target="blank" >
                            <RiGithubFill />
                        </a>
                    </div>
                    <div className="flex md:text-blue-400 md:hover:text-blue-500 py-1">
                        <a href='https://www.linkedin.com' target="blank" >
                            <RiLinkedinBoxFill />
                        </a>
                    </div>
                    <div className="flex md:text-blue-300 md:hover:text-blue-500 py-1">
                        <a href='https://www.twitter.com' target="blank" >
                            <RiTwitterFill />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Sidebar;
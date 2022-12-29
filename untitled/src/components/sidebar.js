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
        name: "About Us",
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
    <div className="flex w-full h-full fixed">
        <div className="bg-black text-white m-2 w-72">
            <div className="flex p-10 ">
                <GiFlexibleStar size={45}/>
            </div>  
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} keys={index} className="flex text-gray-200 hover:tracking-wide m-2 p-2 gap-4 rounded-xl">
                        <div className=" text-2xl"> {item.icon} </div>
                        <div className="px-2">{item.name}</div>
                    </NavLink>
                ))
            }
            <div  className=" m-12 h-7 text-center justify-center bg-gradient-to-tr from-[#0700c5e3] to-[#00e1ffe0] rounded-md hover:bg-gradient-to-bl ">
            {
                user.map((user, index) => (
                    <NavLink to={user.path} keys={index} className="text-gray-200  ">
                        <div>{user.name}</div>
                    </NavLink>
                ))
            }
            </div>
            <div>
                <div className="grid grid-cols-4 h-20 text-3xl gap-5 my-44 m-5 justify-center cursor-pointer">
                    <div className="flex items-top text-blue-600 hover:text-blue-300">
                        <a href='https://www.instagram.com' target="blank" >
                            <RiInstagramFill />
                        </a>
                    </div>
                    <div className="flex items-center text-blue-500 hover:text-blue-300">
                        <a href='https://www.github.com' target="blank" >
                            <RiGithubFill />
                        </a>
                    </div>
                    <div className="flex items-top text-blue-400 hover:text-blue-500">
                        <a href='https://www.linkedin.com' target="blank" >
                            <RiLinkedinBoxFill />
                        </a>
                    </div>
                    <div className="flex items-center  text-blue-300 hover:text-blue-500">
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

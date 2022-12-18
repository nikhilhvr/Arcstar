import React from 'react';
import { HiOutlineHome, HiOutlineInformationCircle } from 'react-icons/hi';
import { IoIosPeople, } from 'react-icons/io';
import { RiCodeSSlashLine, } from 'react-icons/ri';
import { BsPerson, } from 'react-icons/bs';
import { TbArrowRampRight2, } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Sidebar = ({Children}) => {
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
        name: "About",
        icon: <HiOutlineInformationCircle/>
    },
    {
        path: "/profile",
        name: "Profile",
        icon: <BsPerson/>
    }
]

    return (
    <div className="flex mx-10 fixed">
        <div className="bg-slate-800 h-screen ">
            <div className="flex m-7 gap-7 ">
                <h1 className="text-3xl text-white">Untitled</h1>
                <div className="pt-2 text-2xl text-white hover:scale-110">
                    <TbArrowRampRight2/>
                </div>
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} keys={index} className="flex ml-6 pt-8 gap-4" activeclassName="active">
                        <div className=" text-gray-200 text-2xl "> {item.icon} </div>
                        <div className=" text-gray-400 hover:scale-105 hover:text-gray-200 w-32 px-1 hover:bg-gray-700 rounded-sm">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{Children}</main>
    </div>
    );
};

export default Sidebar;

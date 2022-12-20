import React, {useState} from 'react';
import '../App.css';
import { HiOutlineHome, HiOutlineInformationCircle, HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoIosPeople, } from 'react-icons/io';
import { RiCodeSSlashLine, } from 'react-icons/ri';
import { BsPerson, } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
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
        name: "About us",
        icon: <HiOutlineInformationCircle/>
    },
    {
        path: "/profile",
        name: "Profile",
        icon: <BsPerson/>
    }
]

    return (
        <div className="flex w-full ">
            <div style={{width: isOpen ? "300px":"65px"}}className="bg-slate-900 text-white h-[100vh] px-1 py-4 transition-0.5 duration-500">
            <div className="flex items-center p-6">
                <h1 style={{ display: isOpen ? "block" : "none" }} className="text-3xl text-center text-white ">Untitled</h1>
                    <div style={{ marginLeft: isOpen ? "100px" : "-6px" }} className="flex text-2xl cursor-pointer hover:text-semibold">
                        <HiOutlineMenuAlt4 onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} keys={index} className="flex text-gray-200 hover:tracking-wide m-2 p-2 gap-4 rounded-xl" activeclassName="active">
                        <div className=" text-2xl  "> {item.icon} </div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={` whitespace-pre duration-500 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden "}`}>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main className="w-full p-8">{children}</main>
    </div>
    );
};

export default Sidebar;

import React, {useState} from 'react';
import '../App.css';
import { HiOutlineHome, HiOutlineInformationCircle, HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoIosPeople, } from 'react-icons/io';
import { RiCodeSSlashLine, RiInstagramFill, RiLinkedinBoxFill, RiGithubFill, RiTwitterFill } from 'react-icons/ri';
import { BsPerson, } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { MdPersonAdd } from 'react-icons/md'


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
        way: "/signup",
        call: "Log In / Sign Up ",
        icon:<MdPersonAdd/>

    },
]

return (
    <div className="flex w-full h-full fixed">
        <div style={{width: isOpen ? "300px":"65px"}}className="bg-slate-900 text-white px-1 py-5 transition-0.5 duration-500">
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
                        <div  className={` whitespace-pre duration-500 ${!isOpen && "opacity-0 w-32 px-1 translate-x-20 overflow-hidden "}`}>{item.name}</div>
                    </NavLink>
                ))
            }
            <div style={{ display: isOpen ? "block" : "none" }} className=" py-24 h-0 m-3 text-center justify-center transition-all duration-500 before:content-[''] before:fixed before:bottom-64 before:left-0 before:translate-x-1/2 before:w-12 before:h-0.5 before:transition-all before:duration-500 before:bg-blue-500 hover:before:w-36 hover:before:opacity-100">
            {
                user.map((user, page) => (
                    <NavLink to={user.way} keys={page} className="flex text-gray-200 rounded-md h-8 gap-3">
                        <div className=" text-2xl px-4"> {user.icon} </div>
                        <div  className={` whitespace-pre duration-500 ${!isOpen && " opacity-0  translate-x-20 overflow-hidden "}`}>{user.call}</div>
                    </NavLink>
                ))
            }
            </div>
            <div style={{ display: isOpen ? "block" : "none" }}>
                <div className="grid grid-cols-4 mx-auto w-30 h-24 text-3xl gap-5 p-3 m-10 justify-center cursor-pointer">
                    <div className="flex items-top text-blue-600 hover:text-4xl">
                        <a href='https://www.instagram.com' target="blank" >
                            <RiInstagramFill />
                        </a>
                    </div>
                    <div className="flex items-center text-blue-500 hover:text-4xl">
                        <a href='https://www.github.com' target="blank" >
                            <RiGithubFill />
                        </a>
                    </div>
                    <div className="flex items-top text-blue-400 hover:text-4xl">
                        <a href='https://www.linkedin.com' target="blank" >
                            <RiLinkedinBoxFill />
                        </a>
                    </div>
                    <div className="flex items-center  text-blue-300 hover:text-4xl">
                        <a href='https://www.twitter.com' target="blank" >
                            <RiTwitterFill />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <main className="w-full p-8">{children}</main>
    </div>
    );
};

export default Sidebar;

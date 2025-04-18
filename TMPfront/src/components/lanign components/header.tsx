import React ,{useState}from 'react';
import logo from "../../assets/TMPlogo.png"
import { BurgerMenu } from '../common/Iconse';
import SideBar from './SideBar';

const Navbar :React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const openSideBar = ()=>{
        setOpen(!open);
    }
    return (
        <nav className="w-full flex items-center justify-between px-6 py-3 shadow-sm bg-white">
            {/* Left: Logo */}
            <div className="flex items-center">
                <img
                        src={logo} 
                    alt="Logo"
                    className="h-10 w-10 object-contain rounded-2xl"
                />
            </div>

            {/* Right: Links */}
            <button onClick={openSideBar}>
            <BurgerMenu className='block md:hidden' />
            </button>
            <SideBar isOpen={open}/>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
                <a href="#" className="hover:text-black">About</a>
                <a href="#" className="hover:text-black">Log In</a>
                <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm"
                >
                    Sign Up
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

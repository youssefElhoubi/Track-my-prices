import React, { useState } from "react"
import { Menu } from "lucide-react"
import Logo from "../../assets/TMPlogo.png"
import Sidebar from "./sidebar"
import { Logout } from "../common/Iconse"

const Header:React.FC = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center z-10 w-full">
            <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-2 overflow-hidden">
                    <img src={Logo} alt="trackMyPrice Logo" className="h-7 w-7 object-cover" />
                </div>
                <h1 className="text-xl font-bold">trackMyPrice</h1>
            </div>
            <button className="text-white">
                <Menu className="h-6 w-6 block md:hidden" onClick={() => { setisOpen(!isOpen) }} />
                    <Logout className="h-6"/>
            </button>
            <Sidebar isOpen={isOpen} ClassName="absolute left-0 top-16" />
        </header>
    )
}
export default Header

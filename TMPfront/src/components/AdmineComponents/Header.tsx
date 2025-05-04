import { Bell } from "lucide-react"
import Logo from "../../assets/TMPlogo.png"

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center z-10 w-full">
            <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-2 overflow-hidden">
                    <img src={Logo} alt="trakMyPrice Logo" className="h-7 w-7 object-cover" />
                </div>
                <h1 className="text-xl font-bold">trakMyPrice</h1>
            </div>
            <button className="text-white">
                <Bell className="h-6 w-6" />
            </button>
        </header>
    )
}

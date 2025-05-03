import { Bell } from "lucide-react"

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-2">
                    <img src="/placeholder.svg?height=30&width=30" alt="trakMyPrice Logo" className="h-7 w-7" />
                </div>
                <h1 className="text-xl font-bold">trakMyPrice</h1>
            </div>
            <button className="text-white">
                <Bell className="h-6 w-6" />
            </button>
        </header>
    )
}

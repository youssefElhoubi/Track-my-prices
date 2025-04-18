import React from 'react'

type props = {
    isOpen?: boolean
}

const SideBar: React.FC<props> = ({ isOpen }) => {

    return (
        <>
            <div className={`bg-white p-6 left-1/2 transform -translate-x-1/2 transition-all ease-in-out duration-500 ${isOpen ? "absolute top-14 " : "hidden top-0"} md:hidden`} >

                <nav className="flex flex-col space-y-6 w-60">
                    <a href="#" className="text-black text-lg">About</a>
                    <a href="#" className="text-black text-lg">Log in</a>
                    <a
                        href="#"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-4 py-4 rounded-2xl text-left"
                    >
                        sign Up
                    </a>
                </nav>
            </div>
        </>
    )
}

export default SideBar
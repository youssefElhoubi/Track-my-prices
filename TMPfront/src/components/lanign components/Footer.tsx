import React from "react"
import { Facebook, Instagram, Twitter } from "../common/Iconse"


const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-wrap justify-start md:justify-around gap-8">
                    <div>
                        <h3 className="text-white font-semibold mb-4 ">Track My Prices</h3>
                        <p className="text-sm w-[75%]">Making smart shopping accessible to
                            everyone</p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div >
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2 text-sm flex justify-around gap-4 ">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    <Facebook className="w-7 text-white"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    <Twitter/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    <Instagram/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import { useState } from "react"
import { NavLink } from "react-router"
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';

function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    return (
        <nav className="h-16 bg-blue-400 w-full relative shadow-md">
            <div className="h-full w-full flex justify-between items-center px-4 md:px-20">
                <h1 className="font-bold text-xl text-white">TodoApp</h1>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center text-white font-medium">
                    <li> <NavLink to={"/"} className={({isActive}) => isActive ? "text-blue-900 font-bold" : "hover:text-blue-100 transition"}>Home</NavLink> </li>
                    <li> <NavLink to={"/About"} className={({isActive}) => isActive ? "text-blue-900 font-bold" : "hover:text-blue-100 transition"}>About</NavLink> </li>
                    <li> <NavLink to={"/task"} className={({isActive}) => isActive ? "text-blue-900 font-bold" : "hover:text-blue-100 transition"}>Task</NavLink> </li>
                </ul>
                
                {/* Mobile Menu Icon */}
                <div className="md:hidden text-white">
                    {isNavOpen ? (
                        <MdOutlineClose
                        className="text-3xl cursor-pointer"
                        onClick={() => setIsNavOpen(false)}
                        />
                    ) : (
                        <MdOutlineMenu
                        className="text-3xl cursor-pointer"
                        onClick={() => setIsNavOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Dropdown Menu (Preserving your exact logic) */}
            {isNavOpen && (
                <ul className="absolute top-16 left-0 w-full bg-blue-500 shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden text-white font-medium border-t border-blue-300 z-50">
                    <li> 
                        <NavLink to={"/"} onClick={() => setIsNavOpen(false)} className="block py-2 hover:translate-x-1 transition-transform">
                            Home
                        </NavLink> 
                    </li>
                    <li> 
                        <NavLink to={"/About"} onClick={() => setIsNavOpen(false)} className="block py-2 hover:translate-x-1 transition-transform">
                            About
                        </NavLink> 
                    </li>
                    <li> 
                        <NavLink to={"/task"} onClick={() => setIsNavOpen(false)} className="block py-2 hover:translate-x-1 transition-transform">
                            Task
                        </NavLink> 
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default NavBar
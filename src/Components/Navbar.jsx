import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className="fixed w-full z-10 top-0 bg-white shadow-xl">
            <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-8">
                <div>
                    <p className="text-3xl font-bold">
                        Haptic
                    </p>
                </div>

                <div className="hidden lg:block">
                    <ul className="flex gap-8">
                        <li>
                            <NavLink className='text-lg font-medium'>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className='text-lg font-medium'>
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className='text-lg font-medium'>
                                Blog
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className='text-lg font-medium'>
                                Services
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className='text-lg font-medium'>
                                Career
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className='text-lg font-medium'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <BiSearch className="text-3xl cursor-pointer" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="shadow-md bg-black text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">

                {/* Logo / Title */}
                <h1 className="text-center text-2xl md:text-4xl font-bold mb-4">
                    Online Library System
                </h1>

                {/* Navbar */}
                <nav className="flex items-center justify-between">

                    {/* Desktop Menu */}
                    <ul className="flex items-center gap-4 mx-auto">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `inline-block text-lg font-medium  transition-all duration-300 ease-in-out px-4 py-2 rounded-xl ${isActive ? "bg-white text-black" : ""}`}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/books"
                                className={({ isActive }) => `inline-block text-lg font-medium  transition-all duration-300 ease-in-out px-4 py-2 rounded-xl ${isActive ? "bg-white text-black" : ""}`}
                            >
                                Browse Books
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/add-books"
                                className={({ isActive }) => `inline-block text-lg font-medium  transition-all duration-300 ease-in-out px-4 py-2 rounded-xl ${isActive ? "bg-white text-black" : ""}`}
                            >
                                Add Book
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
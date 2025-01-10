import { Link } from "react-router-dom";
import rmLogo from "../assets/rm-logo.png";

export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center w-full">
            {/* Logo on the Left */}
            <div className="flex items-center">
                    <Link to="/" className="hover:text-gray-400 transition">
                        <img src={rmLogo} alt="Rick and Morty Logo" className="w-12 h-12 mr-3"/>
                    </Link>
                <span className="text-xl font-bold">Rick & Morty</span>
            </div>

            {/* Nav Links on the Right */}
            <ul className="flex space-x-6">
                <li>
                    <Link to="/characters" className="hover:text-gray-400 transition">
                        Characters
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-gray-400 transition">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-gray-400 transition">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
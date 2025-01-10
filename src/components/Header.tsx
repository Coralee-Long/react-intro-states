import { NavBar } from "./NavBar.tsx";

export const Header = () => {
    return (
        <header className="w-full sticky top-0 z-50 bg-gray-800 text-white py-4 px-8 shadow-md">
            <NavBar />
        </header>
    );
};


import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="sticky top-0 bg-slate-800 text-white px-6 py-4 flex justify-between items-center shadow-md z-50">
            <h1 className="text-xl font-bold">AI Image Generator</h1>
            <div className="flex space-x-4">
                <Link
                    to="/"
                    className={`hover:text-blue-400 transition-colors ${location.pathname === "/" ? "text-blue-400 font-semibold" : ""
                        }`}
                >
                    Home
                </Link>
                <Link
                    to="/history"
                    className={`hover:text-blue-400 transition-colors ${location.pathname === "/history" ? "text-blue-400 font-semibold" : ""
                        }`}
                >
                    History
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {UseAuth} from "../context/UseAuth.ts";

const Navbar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated , logout} = UseAuth();

    const routes = [
        { to: "/", name: "Home" },
        { to: "/AboutPage", name: "About" },
        { to: "/ContactPage", name: "Contacts" },
        { to: "/Dashboard", name: "Dashboard"} ,
    ];

    const isActive = (to: string) => to === location.pathname;
    const onLoginPressed = (): void => {
        navigate("/login")
    }

    const onLogOutPressed = (): void => {
        navigate("/login")
        logout()
    }
    return (
        <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center h-16 relative w-full">
                    <div className="text-xl font-bold text-gray-800">Easy Pos</div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
                        {routes.map((route, index) => (
                            <Link
                                key={index}
                                to={route.to}
                                className={`text-gray-700 hover:text-blue-500 cursor-pointer ${
                                    isActive(route.to) ? "bg-black text-white" : ""
                                }`}
                            >
                                {route.name}
                            </Link>
                        ))}
                    </div>

                    <div className="ml-auto">
                        {!isAuthenticated &&(
                            <button onClick={onLoginPressed} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                Login
                            </button>
                        )}
                        {isAuthenticated && (
                            <button onClick={onLogOutPressed} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

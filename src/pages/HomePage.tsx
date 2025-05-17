import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Boxes, BarChart3 } from "lucide-react";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to POS System</h1>
                <p className="text-lg text-gray-600 mt-2">Choose an option to get started</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
                <div
                    onClick={() => navigate("/sales")}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center"
                >
                    <ShoppingCart className="w-12 h-12 text-indigo-600 mb-4" />
                    <span className="text-xl font-semibold text-gray-700">Sales</span>
                </div>

                <div
                    onClick={() => navigate("/inventory")}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center"
                >
                    <Boxes className="w-12 h-12 text-green-600 mb-4" />
                    <span className="text-xl font-semibold text-gray-700">Inventory</span>
                </div>

                <div
                    onClick={() => navigate("/reports")}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center"
                >
                    <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
                    <span className="text-xl font-semibold text-gray-700">Reports</span>
                </div>
            </div>

            <button
                onClick={() => navigate("/settings")}
                className="mt-10 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
                Go to Settings
            </button>
        </div>
    );
};

export default HomePage;

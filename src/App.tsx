import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CustomerPage from "./pages/CustomerPage.tsx";
import Navbar from "./pages/NavBar.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx"; // ✅ Import the missing page

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="p-6">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/About" element={<AboutPage />} />
                        <Route path="/Contact" element={<ContactPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/customers" element={<CustomerPage />} /> {/* ✅ Added route */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
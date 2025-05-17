import {Outlet} from "react-router-dom";
import Navbar from "./NavBar.tsx";
import {Toaster} from "react-hot-toast";

const Layout = () => {
    return <div className="">
        <Navbar/>
        <Outlet/>
        <Toaster
            position="top-right"
        />
    </div>
}

export default Layout
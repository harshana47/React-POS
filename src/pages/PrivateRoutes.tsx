import {Navigate} from "react-router-dom";
import {UseAuth} from "../context/UseAuth.ts";

const PrivateRoutes = () => {
    const { isAuthenticated } = UseAuth()

    if (isAuthenticated) return <Navigate to="/login" />;

    return <Outlet/>
}

export default PrivateRoutes;
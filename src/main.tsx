import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router";
// import App from "./App.tsx";
// import {Toaster} from "react-hot-toast";
import AuthProvider from "./context/AuthProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>

    </StrictMode>,
)
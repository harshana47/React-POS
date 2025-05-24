import {createContext} from "react";

export interface AuthContextType {
    isAuthenticated: boolean;
    // setIsAuthenticated: (isAuthenticated: boolean) => void;
    login: () => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
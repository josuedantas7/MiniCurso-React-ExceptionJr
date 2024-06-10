import { createContext, useState } from "react";

export const AuthContext = createContext({})


function AuthProvider({ children }) {

    const [user, setUser] = useState({})

    const isLogged = !!user

    const login = () => {
        setUser({name: 'Josué Dantas', age: 22})
    }

    const logout = () => {
        setUser(null)
    }
    
    return (
        <AuthContext.Provider value={{isLogged, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider

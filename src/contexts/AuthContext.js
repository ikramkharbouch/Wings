import { createContext, useState, useContext } from "react";

const AuthContext = createContext({})

const AuthProvider = (props) => {

    const [connected, setConnected] = useState(localStorage.getItem("logged"))

    const login = () => {
        localStorage.setItem("logged", true)
        setConnected(true)
    }

    const logout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("logged")
        setConnected(false)
    }

    const authContextValue = {connected, login, logout};
    return <AuthContext.Provider value={authContextValue} {...props} />
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
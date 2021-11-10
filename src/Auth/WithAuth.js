import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const WithAuth = ({children, To}) => {
    
    const { connected } = useAuth()

    if (connected) {
        return children
    } else {
        return (<Navigate to={To} />)
    }
    
}

export default WithAuth
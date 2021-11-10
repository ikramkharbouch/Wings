import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const WithAuth = ({children, To}) => {
    // Check localStorage

    const { connected } = useAuth()

    console.log(connected)

    if (connected) {
        return children
    } else {
        return (<Navigate to={To} />)
    }
    
}

export default WithAuth
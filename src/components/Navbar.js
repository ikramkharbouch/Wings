import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Navbar = () => {

  const { logout, connected } = useAuth()

  return (<>
    <nav className="bg-gray-100 w-full h-20 shadow-lg text-white-600 flex items-center justify-between">
      <ul className="w-full">
        <div className="flex justify-between w-3/5 mx-auto">
          <div className="">
            <h1 className="text-2xl font-bold text-blue-500">Wings</h1>
          </div>
          <div className="flex gap-5 text-gray-500">
            <li>
              <Link to="/">Home</Link>
            </li>
            {connected && <li>
              <Link to="/posts">Posts</Link>
            </li>}
            
            {!connected && <li>
              <Link to="/login">Login</Link>
            </li>}

            {connected && <li onClick={logout} className="cursor-pointer">
              Logout
            </li>}

          </div>
        </div>

      </ul>
    </nav>
  </>)
}

export default Navbar
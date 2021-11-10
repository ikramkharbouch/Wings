import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const Login = () => {

    let navigate = useNavigate();

    const { login, connected } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "test@test.fr",
            password: "test",
        }
    })

    const onSubmit = (data) => {
        if (data) {
            localStorage.setItem("email", data["email"])
            login()
            navigate("/")
        }
    }

    return (
        <>
            {connected ? <Navigate to="/" /> : <div className="w-3/5 mx-auto">
                <h1 className="text-gray-600 font-bold text-3xl mt-5">Login Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10 flex flex-col gap-5">
                    <input type="text" placeholder="Email" className="px-10 py-4 rounded-lg border shadow-lg" {...register("email", { required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})} />{errors.email && errors.email.type === "required" && <p className="text-red-400">This is required</p>}
                    {errors.email && errors.email.type === "pattern" && <p className="text-red-400">Email must be valid</p>}
                    <input type="password" placeholder="Password" className="px-10 py-4 rounded-lg border shadow-lg" {...register("password", { required: true, pattern: {value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i} })} />{errors.password && errors.password === "required" && <p className="text-red-400">This is required</p>}
                    {errors.password && errors.password.type === "pattern" && <p className="text-red-400">Password must contain 8 characters, at least one letter and one number</p>}
                    <input type="submit" value="Login" className="px-4 py-4 bg-blue-500 text-white font-bold rounded-lg cursor-pointer" />
                </form>
            </div>}
        </>
    )
}

export default Login
import { useEffect, useState } from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Card = ({ title, body }) => {

    return (<>
        <div className="flex flex-col bg-blue-100 px-10 py-10 rounded-lg">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="mt-5">{body}</p>
        </div>
    </>)
}

const Cards = () => {

    // fetch the api here

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const loadData = async () => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts')
            const formattedResult = await result.json()

            let status = result.status

            if (status === 200 && formattedResult) {
                setPosts(formattedResult)
                setIsLoading(false)
            } else if (status !== 200) {
                setIsLoading(false)
                setError("Something went wrong!")
            }

        } catch (e) {
            setIsLoading(false)
            setError("Something went wrong!")
        }

    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            loadData()
        }, 2000)
    }, [])

    return (
        <>
            {error && (<h1 className="text-red-400 font-bold mt-10">{error}</h1>)}
            {
                isLoading ? (<Loader
                    type="ThreeDots"
                    color="#3B82F6"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />) : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
                    {posts && posts.map((post) => (
                        <Card title={post.title} body={post.body} key={post.id} />
                    ))}
                </div>
            }
        </>
    )
}

export default Cards
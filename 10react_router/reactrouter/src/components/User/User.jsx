import { useParams } from "react-router-dom"


const User = () => {
    const {userid}=useParams()
  return (
    <div className="bg-gray-500 text-white text-3xl justify-center p-4">User: {userid}</div>
  )
}

export default User

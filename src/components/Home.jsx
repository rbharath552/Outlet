import { Link } from "react-router-dom";
const Home = () => {
 
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded shadow-md">
        
        <h1 className="text-3xl font-bold mb-6">
          Welcome to Home Page
        </h1>

        <div className="space-x-4">
          <Link to="/login">
            <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
              Login
            </button>
          </Link>

          <Link to="/profile">
            <button className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600">
              Register
            </button>
          </Link>
        </div>

      </div>
    </div>
  
   </>
  )
}

export default Home
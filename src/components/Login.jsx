import { Navigate, useNavigate, } from "react-router-dom"


const Login = () => {

 const Navigate=useNavigate() 
  
  const sumbitchange=()=>{
Navigate("/")
  }
  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">LOGIN</h2>

        

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4 rounded"
        />

        <button  onClick={sumbitchange}className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
          Return To Home
        </button>
      </div>
    </div>
   
    {/* <div className="flex p-10 justify-center items-center text-center text-xl">
       <div className="h-100 w-150 bg-emerald-300">
   <div className='flex justify-center items-center p-10'>

      </div>
     <button  onClick={sumbitchange} className='bg-black text-white rounded mx-2'>Return To Home</button>
   </div>
    </div> */}

     </>
  )
}

export default Login
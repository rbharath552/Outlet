import { Navigate, useNavigate, } from "react-router-dom"


const Login = () => {

 const Navigate=useNavigate() 
  
  const sumbitchange=()=>{
Navigate("/")
  }
  return (
    <>
    
   
    <div className="flex p-10 justify-center items-center text-center text-xl">
       <div className="h-100 w-150 bg-emerald-300">
<div className='flex justify-center items-center p-10'>

</div>
     <button  onClick={sumbitchange} className='bg-black text-white rounded mx-2'>Login</button>
   </div>
    </div>

     </>
  )
}

export default Login
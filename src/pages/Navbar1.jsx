
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
   <>
   <div className='h-20  bg-amber-300  flex justify-between items-center '>
    <div className='mx-10 h-20 w-30 flex justify-center items-center '>
       
       
   </div>
   
  <div className=' mx-10 flex justify-between items-center gap-10'>
    <Link to="/" className={({isActive})=>isActive?"bg-black text-white rounded":""}>Home</Link>
    
    <Link to="/Login" className={({isActive})=>isActive?"bg-black text-white rounded":""}>Login</Link>
    
    <Link to="/Profile" className={({isActive})=>isActive?"bg-black text-white rounded":""}>Profile</Link>
  </div>
    </div>

   
   </>
  )
}

export default Navbar1
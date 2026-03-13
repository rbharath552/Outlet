
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='h-20  bg-amber-300  flex justify-between items-center '>
    <div className='mx-10 h-20 w-30 flex justify-center items-center '>
       
       
   </div>
   
  <div className=' mx-10 flex justify-between items-center gap-10'>
    <Link to="/Login" className={({isActive})=>isActive?"bg-black text-white rounded":""}>login</Link>
    <Link to="/" className={({isActive})=>isActive?"bg-black text-white rounded":""}>home</Link>
    <Link to="/Profile" className={({isActive})=>isActive?"bg-black text-white rounded":""}>profile</Link>
  </div>
    </div>

   
   </>
  )
}

export default Navbar
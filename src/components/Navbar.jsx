import img2 from './assets/img2.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='h-20  bg-cyan-800  flex justify-between items-center '>
    <div className='mx-10 h-20 w-30 flex justify-center items-center '>
       
       <img src={img2} alt="" />
   </div>
   
  <div className=' mx-10 flex justify-between items-center gap-10'>
    <NavLink to="/login" className={({isActive})=>isActive?"bg-black text-white rounded":""}>login</NavLink>
    <NavLink to="/" className={({isActive})=>isActive?"bg-black text-white rounded":""}>home</NavLink>
    <NavLink to="/profile" className={({isActive})=>isActive?"bg-black text-white rounded":""}>profile</NavLink>
  </div>
    </div>

   
   </>
  )
}

export default Navbar
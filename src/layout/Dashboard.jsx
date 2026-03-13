import React from 'react'
// import Navbar from ''
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <> 
    

    <Outlet>
     <Navbar/>
    </Outlet>
    
    </>
  )
}
export default Dashboard
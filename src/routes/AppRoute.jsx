import { Routes, Route, } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Dashboard from "../layout/Dashboard";

function AppRoute() {
  return (
    <Routes>
      
            <Route path="/" element={<Home/>}/>
     
         
{/* 
        <Route path="/dashboard" element={<Dashboard/>}/> */}
          <Route path="/Login" element={<Login/>} />
          <Route path="profile" element={<Profile />} />

    
    </Routes>
  );
}
export default AppRoute;
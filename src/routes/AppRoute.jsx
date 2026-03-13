import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Dashboard from "../layout/Dashboard";

function AppRoute() {
  return (
    <Routes>
      
            <Route path="/" element={<Login/>}/>
     
         

        <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />

    
    </Routes>
  );
}
export default AppRoute;
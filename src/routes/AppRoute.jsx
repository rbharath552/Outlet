import { Routes, Route, } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";

import MainLayout from "../layout/Mainlayout";

function AppRoute() {
  return (
    <Routes>
      
            <Route path="/" element={<Home/>}/>

            <Route element={<MainLayout/>}>
              <Route path="/Login" element={<Login/>} />
          <Route path="/profile" element={<Profile />} />

            </Route>
        

       

          

    
    </Routes>
  );
}
export default AppRoute;
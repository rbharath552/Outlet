import { Outlet } from "react-router-dom";
import Navbar1 from "../pages/Navbar1";

const MainLayout=()=>{
    return(
        <>
        <Navbar1/>
        <Outlet/>
        </>
    )
}
export default MainLayout;
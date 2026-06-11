// Import React Router outlet
import { Outlet } from "react-router-dom";

// Import Navbar component
import Navbar from "../components/common/Navbar";

// Main Layout Component

const MainLayout = () => {

return (

<div  
  className="  
    min-h-screen  
    bg-slate-950
    text-white 
    transition duration-300  
  "  
>  

  {/* Navigation Bar */}  
  <Navbar />  

  {/* Main Content Area */}  
  <main  
    className="  
      max-w-7xl  
      mx-auto  
      px-6  
      py-10  
    "  
  >  

    {/* Render nested routes */}  
    <Outlet />  

  </main>  

</div>

);
};

export default MainLayout;
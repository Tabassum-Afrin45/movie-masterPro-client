import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar/>
        <div className="mt-4">
          <Outlet />
        </div>
        <Footer/>
      </div>

      <Toaster/>
    </div>
  );
};

export default MainLayout;
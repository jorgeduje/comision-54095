import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      
    </div>
  );
};

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <Navbar />
      {/* Outlet is where our page components (Home, Login, etc.) will render */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
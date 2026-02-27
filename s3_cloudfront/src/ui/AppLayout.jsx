import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "../ui/Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;

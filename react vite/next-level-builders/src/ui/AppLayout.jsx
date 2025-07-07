import { Outlet } from "react-router";
import Navbar from "../features/Home/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;

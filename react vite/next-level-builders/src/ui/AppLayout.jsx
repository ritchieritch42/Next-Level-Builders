import { Outlet } from "react-router";
import Navbar from "../features/homepage/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;

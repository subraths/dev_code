import { Outlet } from "react-router-dom";
import Navbar from "./Navabar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

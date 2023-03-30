import { Outlet } from "react-router-dom";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
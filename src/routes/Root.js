import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { serifAccent } from "../utilities/utilities";

const Root = () => {

  useEffect(() => {
    serifAccent();
  }, [])
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
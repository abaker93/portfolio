import { Outlet } from "react-router-dom";
//import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      {/* <Background /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
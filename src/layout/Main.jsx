import { Outlet } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";
import Footer from "../Home/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

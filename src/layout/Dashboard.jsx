import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-3 ">
      <div className="w-64 min-h-screen bg-blue-600 text-white">
        <ul className="menu p-10">
          <li>
            <NavLink to="/" className="flex items-center gap-2 text-xl">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="flex items-center gap-2 text-xl">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="flex items-center gap-2 text-xl">
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

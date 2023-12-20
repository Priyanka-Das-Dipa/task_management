import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";
import Dashboard from "../layout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "login",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "login",
        element: <Register></Register>,
      },
    ],
  },
]);

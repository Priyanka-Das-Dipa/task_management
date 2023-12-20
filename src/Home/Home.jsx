import { Link } from "react-router-dom";
import banner from "../assets/images/banner.jpg";
import People from "./People";
const Home = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center px-10 py-5">
      <div className="w-full space-y-3">
        <h1 className="uppercase text-4xl font-semibold text-left">
          Task Management Project
        </h1>
        <p className="text-lg">
          Task management is the cornerstone of project success, ensuring
          seamless coordination and efficient workflow. In a well-organized task
          management project, teams collaborate through streamlined processes,
          utilizing tools like Gantt charts and Kanban boards to allocate
          resources and monitor progress.{" "}
        </p>
        <Link to="/login" className="my-5">
          <button className="btn ">Let’s Explore</button>
        </Link>
      </div>
      <div className="w-1/2">
        <img src={banner} alt="" />
      </div>

    </div>
    <People></People>
    </>
  );
};

export default Home;

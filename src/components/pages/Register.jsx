import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const bg = {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/47ZcqHh/bg-2.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    position: "relative",
  };
  const [showToast, setSowToast] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // const firstName = form.get("firstName");
    // const lastName = form.get("lastName");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    if (password.length < 6) {
      setRegisterError("password should more the 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your password have at least one UPPERCASE.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Your password have at least one LOWERCASE.");
      return;
    }

    setRegisterError(" ");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSowToast(true);
        Swal("Successfully!", "Logged in!", "success");
        navigate("/login");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setSowToast(true);
        Swal("Successfully!", "Your Registration is done!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="h-screen" style={bg}>
      {/* <Navbar></Navbar> */}
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="flex justify-center items-center mt-10 text-white"
      >
        <div className="border px-12 md:px-32  py-5 rounded-md">
          <form onSubmit={handleRegister}>
            <h2 className="text-2xl font-bold">Register</h2>
            <div className="space-y-2">
              <div className="flex w-72 flex-col gap-6 mt-5">
                <div className="relative h-11 w-full md:min-w-[350px]">
                  <input
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    name="firstName"
                  />
                  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    First Name
                  </label>
                </div>
              </div>
              <div className="flex w-72 flex-col gap-6 mt-5">
                <div className="relative h-11 w-full md:min-w-[350px]">
                  <input
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    name="lastName"
                  />
                  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Last Name
                  </label>
                </div>
              </div>
              <div className="flex w-72 flex-col gap-6 mt-5">
                <div className="relative h-11 w-full md:min-w-[350px]">
                  <input
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="email"
                    name="email"
                  />
                  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Username or Email
                  </label>
                </div>
              </div>

              <div className="flex w-72 flex-col gap-6">
                <div className="relative h-11 w-full md:min-w-[350px]">
                  <input
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type={showPass ? "text" : "password"}
                    name="password"
                  />
                  <span
                    className="absolute mt-5 mr-[20px]"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
              </div>
              <button className="btn btn-warning w-full mt-5">Register</button>
            </div>
            <p className="mt-5">
              Already have an Account?{" "}
              <Link to="/login" className="text-yellow-400 underline">
                Login
              </Link>
            </p>
          </form>
          {registerError && <p className="text-red-500">{registerError}</p>}
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="text-center flex justify-center items-center mt-3"
      >
        <div className="space-y-3 text-white">
          <button
            onClick={handleGoogleSignUp}
            className="py-2 px-9 border rounded-xl flex items-center justify-between  text-xl gap-6"
          >
            <FaGoogle className="text-2xl text-green-300"></FaGoogle> Continue
            with Google
          </button>
        </div>
      </div>

      {showToast &&
        Swal("Successfully!", "Your Registration is Done!", "success")}
    </div>
  );
};

export default Register;

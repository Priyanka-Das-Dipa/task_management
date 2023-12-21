import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showToast, setSowToast] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const bg = {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/47ZcqHh/bg-2.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    position: "relative",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    if (password.length < 6) {
      setLoginError("password should more the 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setLoginError("Your password have at least one UPPERCASE.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setLoginError("Your password have at least one LOWERCASE.");
      return;
    }

    setLoginError("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSowToast(true);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        // setUserName(result.user.displayName);
        // setUserProfile(result.user.photoURL);
        navigate(location?.state ? location.state : "/");
        console.log(location?.state ? location.state : "/");
        setSowToast(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="h-screen" style={bg}>
      {/* <Navbar></Navbar> */}
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="flex justify-center items-center mt-16 text-white"
      >
        <div className="border px-5 md:px-14 py-5  rounded-md">
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-bold">Login</h2>
            <div className="space-y-3">
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
                    className="absolute mt-5 ml[-20px]"
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
              <button className="btn btn-warning min-w-[350px] mt-5">
                Login
              </button>
            </div>
            <p className="mt-5">
              Do not have an Account?{" "}
              <Link to="/register" className="text-yellow-400 underline">
                Create an Account
              </Link>
            </p>
          </form>
          {loginError && <p className="text-red-500">{loginError}</p>}
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="text-center flex justify-center items-center mt-5"
      >
        <div className="space-y-3 ">
          <button
            onClick={handleGoogleSignIn}
            className="py-2 px-9 border rounded-xl flex items-center justify-between text-white text-xl gap-6"
          >
            <FaGoogle className="text-2xl text-green-300"></FaGoogle> Continue
            with Google
          </button>
        </div>
      </div>
      {showToast && Swal("Successfully!", "Logged in!", "success")}
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import MyLinks from "../Shared/MyLinks/MyLinks";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { BiLogIn } from "react-icons/bi";
import signUp from "../.././assets/register.png";
import { TbLogout2 } from "react-icons/tb";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleThemeToggle = (isDark) => {
    setTheme(isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  const handleLogOutBtn = () => {
    logOut();
    toast.success("Successfully Logout");
    navigate("/");
  };

  const links = (
    <>
      <MyLinks to={"/"}>Home</MyLinks>
      <MyLinks to={"/bills"}>Bills</MyLinks>

      {user && (
        <>
          <MyLinks to={"/add-bill"}>Add Bill</MyLinks>
          <MyLinks to={"/myPayBills"}>Pay Bills</MyLinks>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainer className={"flex justify-center items-center"}>
        <div className="navbar-start">
          <Link to={"/"} className="text-2xl text-gray-500 font-bold">
            Pay<span className="text-blue-800">Up</span>
          </Link>
        </div>

        <div className="md:navbar-end navbar-center">
          <div className="hidden lg:flex">
            <ul className="">{links}</ul>
          </div>

          {user ? (
            <div className="  flex justify-center items-center ">
              {" "}
              <div
                data-tip={user.displayName}
                className="md:size-12 size-8 tooltip tooltip-bottom border-2 border-[#021247] rounded-full "
              >
                <img
                  className="w-full bg-cover h-full rounded-full  "
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
              <Link
                onClick={handleLogOutBtn}
                to={"/login"}
                className="btn text-white hover:rounded-2xl hover:border bg-red-700 ml-2 mr-2 btn-sm md:btn-md "
              >
                Log Out <TbLogout2 />
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <Link
                to={"login"}
                className="btn primary-btn hover:rounded-2xl! btn-sm md:btn-md "
              >
                <BiLogIn /> Login
              </Link>
              <MyLinks
                className={
                  "btn primary-btn text-sm! hover:rounded-2xl! btn-sm md:btn-md "
                }
                to={"/register"}
              >
                <div className="size-5">
                  <img src={signUp} alt="" />{" "}
                </div>{" "}
                Register
              </MyLinks>{" "}
            </div>
          )}

          <label className="swap swap-rotate">
            <input
              onChange={(e) => handleThemeToggle(e.target.checked)}
              type="checkbox"
              checked={theme === "dark"}
              className="toggle theme-controller -z-50 "
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10  fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </MyContainer>

      <div className="shadow-sm bg-base-100/30 backdrop-blur-md lg:hidden fixed bottom-0 left-0 w-full z-50">
        <div className=" flex justify-center items-center">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import MyLinks from "../Shared/MyLinks/MyLinks";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleThemeToggle = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  const handleLogOutBtn = () => {
    logOut();
    toast.success("Successfully Logout");
    navigate("/");
  };
  console.log(user);

  const links = (
    <>
      <MyLinks to={"/"}>Home</MyLinks>
      <MyLinks>Bills</MyLinks>
      <MyLinks to={"/myPayBills"}>My Pay Bills</MyLinks>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainer>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            ></ul>
          </div>
          <a className=" text-xl">PayUp</a>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {user ? (
            <div className="flex justify-center items-center gap-2">
              {" "}
              <div
                data-tip={user.displayName}
                className="md:size-12 size-8 tooltip  tooltip-bottom border-2 border-[#02471f] rounded-full "
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
                className="btn  btn-sm md:btn-md "
              >
                Log Out
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2">
              <Link to={"login"} className="btn  btn-sm md:btn-md ">
                Login
              </Link>
            </div>
          )}
          <input
            onChange={(e) => handleThemeToggle(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            checked={theme === "dark"}
            className="toggle theme-controller"
          />
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;

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
      <MyLinks>Home</MyLinks>
      <MyLinks>Bills</MyLinks>
      <MyLinks>My Pay Bills</MyLinks>
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
            <button className={"btn"} onClick={handleLogOutBtn}>
              LogOut
            </button>
          ) : (
            <MyLinks className={"btn"} to={"/login"}>
              Login
            </MyLinks>
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

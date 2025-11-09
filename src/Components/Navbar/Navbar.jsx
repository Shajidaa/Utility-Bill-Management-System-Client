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

  const links = (
    <>
      <MyLinks to={"/"}>Home</MyLinks>
      <MyLinks to={"/bills"}>Bills</MyLinks>
      <MyLinks to={"/add-bill"}>Add Bill</MyLinks>
      <MyLinks to={"/myPayBills"}>My Pay Bills</MyLinks>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainer className={"flex justify-center items-center"}>
        <div className="navbar-start">
          <Link to={"/"} className="text-xl">
            PayUp
          </Link>
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
                className="md:size-12 size-8 tooltip tooltip-bottom border-2 border-[#02471f] rounded-full "
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
            className="toggle theme-controller "
          />
        </div>
      </MyContainer>

      <div className="shadow-sm bg-base-100/30 backdrop-blur-md md:hidden fixed bottom-0 left-0 w-full z-50">
        <div className=" flex justify-center items-center">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import MyLinks from "../Shared/MyLinks/MyLinks";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { BiLogIn, BiMenu, BiX } from "react-icons/bi";
import signUp from "../.././assets/register.png";
import { TbLogout2 } from "react-icons/tb";
import { FaChevronDown, FaUser, FaCog } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeProfileDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  const links = (
    <>
      <MyLinks to={"/"} onClick={closeMobileMenu}>
        Home
      </MyLinks>
      <MyLinks to={"/bills"} onClick={closeMobileMenu}>
        Bills
      </MyLinks>

      <MyLinks to={"/services"}>Services</MyLinks>

      <MyLinks to={"/aboutUs"} onClick={closeMobileMenu}>
        About Us
      </MyLinks>

      {user && (
        <>
          <MyLinks to={"/dashboard"} onClick={closeMobileMenu}>
            Dashboard
          </MyLinks>
        </>
      )}
      <MyLinks to={"/help"} onClick={closeMobileMenu}>
        Help
      </MyLinks>
    </>
  );
  return (
    <>
      {/* Main Navbar */}
      <nav className=" shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-gray-900/95">
        <MyContainer>
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="shrink-0">
              <Link
                to={"/"}
                className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Pay<span className="text-blue-600 dark:text-blue-400">Up</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <ul className="flex items-center space-x-1">{links}</ul>
            </div>

            {/* Right Side - User Actions & Theme Toggle */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <label className="swap swap-rotate">
                <input
                  onChange={(e) => handleThemeToggle(e.target.checked)}
                  type="checkbox"
                  checked={theme === "dark"}
                  className="sr-only"
                />

                {/* Sun icon */}
                <svg
                  className={`swap-off w-6 h-6 lg:w-8 lg:h-8 fill-current text-yellow-500 hover:text-yellow-600 transition-colors duration-200 cursor-pointer ${
                    theme === "dark" ? "hidden" : "block"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* Moon icon */}
                <svg
                  className={`swap-on w-6 h-6 lg:w-8 lg:h-8  fill-current text-blue-400 hover:text-blue-300 transition-colors duration-200 cursor-pointer ${
                    theme === "dark" ? "block" : "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>

              {/* User Section */}
              {user ? (
                <div className="relative">
                  {/* Profile Dropdown Trigger */}
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
                    title={user.displayName}
                  >
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-blue-500 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={user.photoURL}
                        alt={user.displayName}
                      />
                    </div>

                    <FaChevronDown
                      className={`text-sm text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                        isProfileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Profile Dropdown Menu */}
                  {isProfileDropdownOpen && (
                    <>
                      {/* Backdrop */}
                      <div
                        className="fixed inset-0 z-10"
                        onClick={closeProfileDropdown}
                      ></div>

                      {/* Dropdown Content */}
                      <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-20 overflow-hidden">
                        {/* User Info Header */}
                        <div className="px-4 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-gray-200 dark:border-gray-700">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full border-2 border-blue-500 overflow-hidden">
                              <img
                                className="w-full h-full object-cover"
                                src={user.photoURL}
                                alt={user.displayName}
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800 dark:text-gray-200">
                                {user.displayName}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="py-2">
                          {/* Profile Link */}
                          <Link
                            to={"/myProfile"}
                            onClick={closeProfileDropdown}
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            <FaUser className="text-blue-500" />
                            <span className="text-gray-700 dark:text-gray-300">
                              My Profile
                            </span>
                          </Link>

                          {/* Theme Toggle */}
                          <button
                            onClick={() => {
                              handleThemeToggle(theme === "light");
                              closeProfileDropdown();
                            }}
                            className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            {theme === "dark" ? (
                              <>
                                <svg
                                  className="w-5 h-5 text-yellow-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">
                                  Switch to Light Mode
                                </span>
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-5 h-5 text-blue-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">
                                  Switch to Dark Mode
                                </span>
                              </>
                            )}
                          </button>

                          {/* Divider */}
                          <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

                          {/* Logout */}
                          <button
                            onClick={handleLogOutBtn}
                            className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 text-red-600 dark:text-red-400"
                          >
                            <TbLogout2 className="text-lg" />
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  {/* Login Button */}
                  <Link
                    to={"/login"}
                    className="flex items-center space-x-2 px-3 py-2 lg:px-4 lg:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg text-sm lg:text-base"
                  >
                    <BiLogIn className="text-lg" />
                    <span className="hidden bg-blue-500 hover:bg-blue-600 sm:block">
                      Login
                    </span>
                  </Link>

                  {/* Register Button */}
                  <Link
                    to={"/register"}
                    className="flex items-center space-x-2 px-3 py-2 lg:px-4 lg:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg text-sm lg:text-base"
                  >
                    <div className="w-4 h-4">
                      <img
                        src={signUp}
                        alt="Register"
                        className="w-full h-full"
                      />
                    </div>
                    <span className="hidden bg-blue-500 hover:bg-blue-600 sm:block">
                      Register
                    </span>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <BiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <BiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <ul className="space-y-4">{links}</ul>
              </div>
            </div>
          )}
        </MyContainer>
      </nav>
    </>
  );
};

export default Navbar;

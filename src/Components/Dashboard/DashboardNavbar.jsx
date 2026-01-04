import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { FaChevronDown, FaUser, FaHome, FaTachometerAlt } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { HiMenuAlt3 } from "react-icons/hi";

const DashboardNavbar = ({ onToggleSidebar }) => {
  const { user, logOut } = useAuth();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOutBtn = () => {
    logOut();
    toast.success("Successfully Logout");
    navigate("/");
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const closeProfileDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex items-center justify-between h-20 px-6 lg:px-8">
        {/* Left Side - Menu Toggle & Branding */}
        <div className="flex items-center gap-6">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
            aria-label="Toggle sidebar"
          >
            <HiMenuAlt3 className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>

          {/* Dashboard Branding */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
              <FaTachometerAlt className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 -mt-1">
                Welcome back, {user?.displayName?.split(" ")[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Actions & Profile */}
        <div className="flex items-center gap-3">
          {/* Back to Home Link */}
          <Link
            to="/"
            className="hidden lg:flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
          >
            <FaHome className="w-4 h-4" />
            <span>Home</span>
          </Link>

          {/* Profile Dropdown */}
          {user && (
            <div className="relative">
              {/* Profile Dropdown Trigger */}
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                title={user.displayName}
              >
                <div className="w-10 h-10 rounded-full border-2 border-blue-500 overflow-hidden shadow-md">
                  <img
                    className="w-full h-full object-cover"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </div>
                <div className="hidden xl:block text-left">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {user.displayName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user.email}
                  </p>
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
                  <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-20 overflow-hidden">
                    {/* User Info Header */}
                    <div className="px-6 py-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-full border-3 border-white dark:border-gray-700 overflow-hidden shadow-lg">
                          <img
                            className="w-full h-full object-cover"
                            src={user.photoURL}
                            alt={user.displayName}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                            {user.displayName}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {user.email}
                          </p>
                          <div className="mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-3">
                      {/* Profile Link */}
                      <Link
                        to="/dashboard/myProfile"
                        onClick={closeProfileDropdown}
                        className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
                          <FaUser className="text-blue-600 dark:text-blue-400 w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            Profile
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Manage your account
                          </p>
                        </div>
                      </Link>

                      {/* Dashboard Home Link */}
                      <Link
                        to="/dashboard"
                        onClick={closeProfileDropdown}
                        className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors duration-200">
                          <FaTachometerAlt className="text-indigo-600 dark:text-indigo-400 w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            Dashboard Home
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Go to overview
                          </p>
                        </div>
                      </Link>

                      {/* Divider */}
                      <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

                      {/* Logout */}
                      <button
                        onClick={handleLogOutBtn}
                        className="w-full flex items-center space-x-4 px-6 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 text-red-600 dark:text-red-400 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors duration-200">
                          <TbLogout2 className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Logout</p>
                          <p className="text-sm opacity-75">
                            Sign out of your account
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;

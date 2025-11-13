import React from "react";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { FaPencil } from "react-icons/fa6";
import { toast } from "react-toastify";
const MyProfile = () => {
  const { user } = useAuth();
  const handleEdit = () => {
    return toast.info("Feature in progress. Available soon.");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-gray-900 px-6 py-10 transition duration-300">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="bg-blue-50 dark:bg-gray-700 text-center py-8 relative">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            My Profile
          </h1>

          <div className="mt-6 relative inline-block">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 mx-auto object-cover"
            />
            <button
              onClick={handleEdit}
              className="absolute bottom-1 right-1 bg-white dark:bg-gray-600 text-gray-600 dark:text-white rounded-full p-1 shadow-md hover:bg-blue-100 dark:hover:bg-gray-500 transition"
            >
              <FaPencil />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Personal Info
          </h2>

          <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <FaUser className="text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your name
                </p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {user?.displayName}
                </p>
              </div>
            </div>
            <span className="text-gray-400 dark:text-gray-500">›</span>
          </div>

          <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email address
                </p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {user?.email}
                </p>
              </div>
            </div>
            <span className="text-gray-400 dark:text-gray-500">›</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

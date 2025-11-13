import React from "react";
import { MdManageAccounts } from "react-icons/md";
import { SiTeamspeak } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { VscGoToEditingSession } from "react-icons/vsc";

const Help = () => {
  return (
    <div className="min-h-screen  transition duration-500">
      <div className="bg-sky-100 dark:bg-sky-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          How can we help?
        </h1>
        <div className="max-w-xl mx-auto flex justify-center">
          <input
            type="text"
            placeholder='Try "payment issue" or "manage account"'
            className="w-full px-5 py-3
             rounded-xl border border-gray-300
              dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800
               dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          Popular topics:{" "}
          <span className="text-sky-600 dark:text-sky-400">
            payment, card error, edit profile, billing
          </span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Account settings",
            desc: "Change your password, email, or manage your account.",
            icon: <MdManageAccounts />,
          },
          {
            title: "Payments & billing",
            desc: "Manage your credit card, billing info, and transactions.",
            icon: "💳",
          },
          {
            title: "Teams & groups",
            desc: "Create, manage, and collaborate with your team.",
            icon: <SiTeamspeak />,
          },
          {
            title: "Download & sharing",
            desc: "Save or share your reports and receipts easily.",
            icon: <FaCloudDownloadAlt />,
          },
          {
            title: "Editing & designing",
            desc: "Customize your account and dashboard visuals.",
            icon: <VscGoToEditingSession />,
          },
          {
            title: "Fix a problem",
            desc: "Find quick solutions to common issues.",
            icon: "💡",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
          >
            <div className="text-3xl">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-3">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">
        Need help fast?{" "}
        <span className="text-sky-600 dark:text-sky-400 cursor-pointer hover:underline">
          Contact Support
        </span>
      </div>
    </div>
  );
};

export default Help;

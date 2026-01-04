import { Link, NavLink, useLocation } from "react-router";
import { 
  FaTachometerAlt, 
  FaFileInvoiceDollar, 
  FaPlus, 
  FaUser, 
  FaHome,
  FaChartBar,
  FaCreditCard,
  FaHistory,
  FaCog,
  FaQuestionCircle
} from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";

const DashboardSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigationLinks = [
    {
      to: "/dashboard",
      icon: FaChartBar,
      label: "Overview",
      description: "Dashboard summary",
      end: true
    },
    {
      to: "/dashboard/myPayBills",
      icon: FaFileInvoiceDollar,
      label: "My Pay Bills",
      description: "View all bills"
    },
    {
      to: "/dashboard/add-bill",
      icon: FaPlus,
      label: "Add Bill",
      description: "Create new bill"
    },
    {
      to: "/dashboard/myProfile",
      icon: FaUser,
      label: "My Profile",
      description: "Account settings"
    }
  ];

  const quickActions = [
    {
      to: "/dashboard/add-bill",
      icon: FaPlus,
      label: "Quick Add Bill",
      color: "bg-green-500"
    },
    {
      to: "/dashboard/myPayBills",
      icon: FaCreditCard,
      label: "Pay Bills",
      color: "bg-blue-500"
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl border-r border-gray-200 dark:border-gray-700 z-50 transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
              <FaTachometerAlt className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">PayUp</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Management System</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          {/* Navigation */}
          <nav className="flex-1 p-6">
            {/* Main Navigation */}
            <div className="mb-8">
              <h3 className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mb-4 px-2">
                Main Menu
              </h3>
              
              <ul className="space-y-2">
                {navigationLinks.map((link) => {
                  const IconComponent = link.icon;
                  const isActive = link.end 
                    ? location.pathname === link.to 
                    : location.pathname.startsWith(link.to);
                  
                  return (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        end={link.end}
                        onClick={onClose}
                        className={`group flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 relative overflow-hidden ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                          isActive 
                            ? "bg-white/20 shadow-lg" 
                            : "bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30"
                        }`}>
                          <IconComponent className={`w-5 h-5 transition-all duration-200 ${
                            isActive 
                              ? "text-white" 
                              : "text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold transition-colors duration-200 ${
                            isActive ? "text-white" : ""
                          }`}>
                            {link.label}
                          </p>
                          <p className={`text-sm transition-colors duration-200 ${
                            isActive 
                              ? "text-white/80" 
                              : "text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400"
                          }`}>
                            {link.description}
                          </p>
                        </div>
                        <HiOutlineChevronRight className={`w-5 h-5 transition-all duration-200 ${
                          isActive 
                            ? "text-white opacity-100 translate-x-0" 
                            : "text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }`} />
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mb-4 px-2">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <Link
                      key={index}
                      to={action.to}
                      onClick={onClose}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center shadow-md`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                        {action.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                  <FaQuestionCircle className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Need Help?</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Get support and learn more about PayUp features.
              </p>
              <Link
                to="/help"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                Visit Help Center
                <HiOutlineChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center gap-4 p-4 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-200">
                <FaHome className="w-5 h-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">Back to Home</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Return to main site</p>
              </div>
              <HiOutlineChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
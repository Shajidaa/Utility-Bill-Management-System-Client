import { NavLink } from "react-router";

const MyLinks = ({ children, to, className, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `${className} ${
        isActive 
          ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" 
          : "text-gray-700 dark:text-gray-300 border-b-2 border-transparent"
      }
       flex items-center px-3 py-2 lg:px-4 lg:py-3 text-base lg:text-lg font-medium 
       relative
       hover:text-blue-600 dark:hover:text-blue-400 hover:border-b-blue-300 dark:hover:border-b-blue-500
       transition-all duration-300
       `}
    >
      <span className="relative">{children}</span>
      {/* Active indicator line */}
      {window.location.pathname === to && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
      )}
    </NavLink>
  );
};

export default MyLinks;

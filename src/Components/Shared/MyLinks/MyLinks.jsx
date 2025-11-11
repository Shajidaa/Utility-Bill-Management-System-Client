import { NavLink } from "react-router";

const MyLinks = ({ children, to, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${className} ${
        isActive ? "text-blue-600 " : ""
      }
       text-lg font-semibold 
      ml-2 mr-2 border-b-2 border-b-transparent
       hover:text-blue-600 hover:border-b-2 hover:border-blue-500 `}
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;

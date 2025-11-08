import React from "react";
import { NavLink } from "react-router";

const MyLinks = ({ children, to, className }) => {
  return (
    <NavLink
      to={to}
      className={`${className} ml-2 border-b-2 border-b-transparent `}
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;

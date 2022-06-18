import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  className: string;
}

const MenuItem: React.FC<Props> = ({ to, className, icon, iconActive }) => {
  return (
    <NavLink to={to} className={className}>
      {({ isActive }) => {
        return isActive ? <span>{iconActive}</span> : <span>{icon}</span>;
      }}
    </NavLink>
  );
};

export default MenuItem;

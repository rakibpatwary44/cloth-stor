import React from "react";
import { NavLink } from "react-router";
import logo from "../../../src/assets/shopee-1.svg";

const Navbar = () => {
  return (
    <div>
      <div className="h-[50px] bg-green-600 flex gap-5 pl-5 items-center">
        <img className="w-10 h-10" src={logo} alt="" />
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-gray-500"
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-gray-500"
          }
          to="/product"
        >
          Product
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

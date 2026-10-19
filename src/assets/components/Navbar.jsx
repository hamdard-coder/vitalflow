import React from "react";
import { FaGripLines } from "react-icons/fa";
import logo from "../VitalFlow-Images/logo/logo.svg";
import Button from "./Button/Button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 md:z-50 px-4 py-4  md:mx-auto md:max-w-6xl md:py-6 bg-white">
      <nav className="md:flex md:justify-between ">
        {/* logo */}
        <div className=" flex justify-between items-center md:flex md:justify-center md:items-center cursor-pointer">
          <div className="w-9.5 bg-[#4586ff]  md:flex md:justify-center p-2 rounded-xl flex">
            <img src={logo} alt="" className="w-5.25" />
            <span className="ml-4 md:hidden">Vital+Flow</span>
          </div>
          <div className="flex flex-col gap-2 w-5 md:hidden">
            <span className="h-0.5 w-full bg-black"></span>
            <span className="h-0.5 w-full bg-black"></span>
          </div>
          <span className="md:ml-2 md:text-2xl hidden md:block">
            Vital+Flow
          </span>
        </div>
        {/* links */}
        <div className="hidden md:block">
          <ul className="flex space-x-3">
            <li>
              <a href="" className="text-[18px]">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-[18px]">
                Services
              </a>
            </li>
            <li>
              <a href="" className="text-[18px]">
                Doctors
              </a>
            </li>
            <li>
              <a href="" className="text-[18px]">
                Blog
              </a>
            </li>
          </ul>
        </div>
        {/* navBtn */}
        <div className="hidden md:block ">
          <Button />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

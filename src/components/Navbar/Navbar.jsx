import React from "react";
import Container from "../Container";
import logo from "../../assets/VitalFlow-Images/logo/logo.svg";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-2">
            <div className="w-9.5 h-9.5 bg-[#4586ff] rounded-xl flex items-center justify-center">
              <img src={logo} alt="logo" className="w-5.25" />
            </div>
            <span className="font-semibold text-xl">Vital+Flow</span>
          </div>

          <button className="flex flex-col items-center justify-center gap-2 lg:hidden">
            <span className="block w-5 h-0.75 bg-black rounded-full "></span>
            <span className="block w-5 h-0.75 bg-black rounded-full "></span>
          </button>

          {/* links-desktop */}
          <div className="hidden lg:block">
            <ul className="flex space-x-6 ">
              <li>
                <a href="" className="font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="" className="font-semibold">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="font-semibold">
                  Doctors
                </a>
              </li>
              <li>
                <a href="" className="font-semibold">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* nav-button */}
          <div className="hidden lg:block">
            <Button title="Book a call" />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

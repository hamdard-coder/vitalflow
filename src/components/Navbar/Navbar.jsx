import React, { useState } from "react";
import Container from "../Container";
import logo from "../../assets/VitalFlow-Images/logo/logo.svg";
import Button from "../Button/Button";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 fixed left-0 right-0 z-100 bg-white">
      <Container>
        <nav className="flex items-center justify-between">
          {/* logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9.5 h-9.5 bg-[#4586ff] rounded-xl flex items-center justify-center">
              <img src={logo} alt="logo" className="w-5.25" />
            </div>
            <span className="font-semibold text-xl">Vital+Flow</span>
          </Link>

          {/* mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex flex-col items-center justify-center gap-2 lg:hidden"
          >
            {isOpen ? (
              <>
                <span className="block w-6 h-0.75 bg-black rounded-full rotate-45 translate-y-1.25 transition-transform duration-300" />
                <span className="block w-6 h-0.75 bg-black rounded-full -rotate-45 -translate-y-1.25 transition-transform duration-300" />
              </>
            ) : (
              <>
                <span className="block w-5 h-0.75 bg-black rounded-full" />
                <span className="block w-5 h-0.75 bg-black rounded-full" />
              </>
            )}
          </button>

          {/* links-desktop */}
          <div className="hidden lg:block">
            <ul className="flex space-x-6 ">
              <li>
                <NavLink to="/about" className="font-semibold">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="font-semibold">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/doctors" className="font-semibold">
                  Doctors
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="font-semibold">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* nav-button */}
          <div className="hidden lg:block">
            <Button title="Book a call" />
          </div>
        </nav>
      </Container>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Link to="/" className="absolute top-6 left-4 flex items-center gap-2">
          <div className="w-9.5 h-9.5 bg-[#4586ff] rounded-xl flex items-center justify-center">
            <img src={logo} alt="Vital+Flow logo" className="w-5.25" />
          </div>
          <span className="font-semibold text-xl">Vital+Flow</span>
        </Link>

        <ul className="flex flex-col items-center gap-8">
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
            >
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

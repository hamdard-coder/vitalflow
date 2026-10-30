import React, { useState } from "react";
import Container from "../Container";
import logo from "../../assets/VitalFlow-Images/logo/logo.svg";
import Button from "../Button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 fixed left-0 right-0 z-100 bg-white">
      <Container>
        <nav className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-2">
            <div className="w-9.5 h-9.5 bg-[#4586ff] rounded-xl flex items-center justify-center">
              <img src={logo} alt="logo" className="w-5.25" />
            </div>
            <span className="font-semibold text-xl">Vital+Flow</span>
          </div>

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

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute top-6 left-4 flex items-center gap-2">
          <div className="w-9.5 h-9.5 bg-[#4586ff] rounded-xl flex items-center justify-center">
            <img src={logo} alt="Vital+Flow logo" className="w-5.25" />
          </div>
          <span className="font-semibold text-xl">Vital+Flow</span>
        </div>

        <ul className="flex flex-col items-center gap-8">
          <li>
            <a
              href=""
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
            >
              Doctors
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

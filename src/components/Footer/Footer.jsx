import React from "react";
import Container from "../Container";
import logo from "../../assets/VitalFlow-Images/logo/logo.svg";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <section className=" mt-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-20 ">
          <div>
            {/* left  */}
            <div className="flex items-center gap-2">
              <div className="w-9.5 h-9.5 bg-[#4586ff] rounded-xl flex items-center justify-center">
                <img src={logo} alt="logo" className="w-5.25" />
              </div>
              <span className="font-semibold text-xl">Vital+Flow</span>
            </div>
            <h2 className="py-8 text-gray-700 text-xl max-w-80">
              Creative healthcare template to launch your site quick and easily
            </h2>
            <div>
              <Button title="Book a call" />
            </div>
          </div>
          <div className=" col-span-1 lg:col-span-2 mt-4">
            <header className="text-2xl font-semibold ">Stay up to date</header>

            <div className="flex gap-4 pt-4 ">
              <input
                type="text"
                placeholder="name@email.com"
                className=" bg-[#f5faff] pl-4 lg:pr-30 rounded-xl outline-0"
              />

              <a
                href=""
                className="bg-[#4586ff] px-10 py-4 font-semibold rounded-2xl text-white "
              >
                Subscribe
              </a>
            </div>
            <p className="pt-2 text-gray-700 ">
              by subscribing you will agree to privacy and policy
            </p>

            <div>
              <div className="py-16 flex md:gap-18 lg:gap-18">
                <div className="flex flex-col gap-2 text-gray-500">
                  <h3 className="pb-4 font-semibold text-xl text-black">
                    Static pages
                  </h3>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Home
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    About
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Contact
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    404
                  </a>
                </div>

                <div className="flex flex-col gap-2 text-gray-500">
                  <h3 className="pb-4 font-semibold text-xl text-black">
                    CMS Pages
                  </h3>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Services
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Doctors
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Careers
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Blogs
                  </a>
                </div>

                <div className="flex flex-col gap-2 text-gray-500">
                  <h3 className="pb-4 font-semibold text-xl text-black">
                    Detail pages
                  </h3>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Service (CMS)
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Doctor (CMS)
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Career (CMS)
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Blog (CMS)
                  </a>
                </div>

                <div className="flex flex-col gap-2 text-gray-500">
                  <h3 className="pb-4 font-semibold text-xl text-black">
                    Follow us
                  </h3>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Linkedin
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Facebook
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Twitter
                  </a>
                  <a
                    href=""
                    className="hover:text-black transition duration-300
                  "
                  >
                    Youtube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;

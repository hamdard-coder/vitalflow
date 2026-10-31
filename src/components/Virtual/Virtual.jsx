import React from "react";
import Container from "../Container";
import { FaStar } from "react-icons/fa";

const Virtual = () => {
  return (
    <section className="py-18">
      <Container>
        {/* main container */}
        <div className="bg-blue-50 p-10 rounded-4xl">
          {/* header */}
          <div className="flex flex-wrap items-center gap-4 pb-14">
            <div className="text-2xl lg:text-4xl font-semibold">
              Virtual Consultation
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
              </div>
              <div>
                <p>5.0 (980 Reviews)</p>
              </div>
            </div>
          </div>

          {/* form */}
          <form className=" grid grid-cols-1 lg:grid lg:grid-cols-4 lg:gap-x-4">
            <div>
              <label htmlFor="" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="shadow py-4 pl-2 pr-18 rounded-xl focus:outline-1 focus:outline-blue-300 bg-white w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
                Doctor
              </label>
              <input
                type="text"
                placeholder="Dr Name"
                className="shadow py-4  pl-2 pr-18 rounded-xl focus:outline-1 focus:outline-blue-300 bg-white w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Location"
                className="shadow py-4 pl-2 pr-18 rounded-xl focus:outline-1 focus:outline-blue-300 bg-white w-full"
              />
            </div>
            <div>
              <input
                type="Submit"
                className="bg-[#4586ff] text-white py-4 px-16 mt-8 rounded-full font-semibold w-full"
              />
            </div>
          </form>
          <div className="flex flex-wrap items-center gap-2 pt-12">
            <p className=" text-2xl lg:text-4xl font-semibold">200K+</p>
            <p>
              Cured satisfied <br /> patients around the globe
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Virtual;

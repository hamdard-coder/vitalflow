import React from "react";
import { FaStar } from "react-icons/fa";

const Virtual = () => {
  return (
    <section className="md:mx-auto md:max-w-6xl bg-blue-50 md:mt-16 rounded-[30px] md:p-8 m-4 p-2">
      <div>
        {/* main container */}
        <header className="flex flex-col items-center justify-center  md:flex-row md:items-center md:justify-start md:gap-4 mt-8 md:mt-0 ">
          <div>
            <h1 className="text-4xl">Virtual Consultation</h1>
          </div>
          {/* stars */}
          <div className="flex gap-2 md:flex md:items-center md:gap-2 mt-4 ">
            <div className="flex items-center">
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
            </div>
            <div>
              <p className="text-2xl">5.0 (980 Reviews)</p>
            </div>
          </div>
        </header>
        <form action="" className="md:flex md:items-center md:gap-4 mt-12">
          <div className="flex flex-col">
            <label htmlFor="" className="mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="py-3 pl-2 pr-25 bg-white rounded-xl md:focus:border md:focus:border-blue-400 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="mb-2">
              Doctor
            </label>
            <input
              type="text"
              placeholder="Dr Ahmad"
              className="py-3 pl-2 pr-25 bg-white rounded-xl outline-0 md:focus:border md:focus:border-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="Location"
              className="py-3 pl-2 pr-25 bg-white rounded-xl outline-0 md:focus:border md:focus:border-blue-400"
            />
          </div>
          <div>
            <input
              type="Submit"
              className="bg-[#4586ff] px-16 py-3 text-white text-[18px] rounded-full mt-6 cursor-pointer opacity-40"
            ></input>
          </div>
        </form>
        <div className="md:flex md:items-center md:gap-4 md:mt-16">
          <p className="md:text-5xl">200K+</p>
          <p className="md:text-[18px]">
            Cured satisfied patients <br /> around the globe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Virtual;

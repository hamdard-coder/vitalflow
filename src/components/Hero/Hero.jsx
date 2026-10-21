import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import appointment1 from "../../assets/VitalFlow-Images/hero/hero_image2.webp";
import appointent2 from "../../assets/VitalFlow-Images/hero/hero_image.webp";
import hero from "../../assets/VitalFlow-Images/hero/hero_image1.avif";

import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="mt-30 md:mx-auto md:max-w-6xl md:py-8 md:mt-20">
      {/* container */}
      <div className=" gird grid-cols-1 md:grid md:grid-cols-2 md:gap-x-24">
        {/* text */}
        <div>
          {/* reviews-Stars */}
          <div className=" flex gap-2 justify-center items-center md:flex md:justify-start md:items-center md:gap-2 md:mt-18">
            <div className=" flex md:flex md:space-x-1">
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
            </div>
            <span>5.0 (980 Reviews)</span>
          </div>
          <div className="md:flex-col md:items-start md:justify-start">
            <h1 className="text-center md:text-start text-5xl mt-4 md:text-7xl md:mt-8">
              Partner in health and wellness
            </h1>
            <p className="text-gray-500 text-center mt-4 text-[18px] px-4 md:text-[25px] md:mt-8 md:text-start">
              Providing advanced healthcare solutions with a compassionate touch
              for every patient.
            </p>
          </div>

          {/* video */}
          <div className="flex items-center justify-center mt-8 gap-2 md:flex md:justify-start md:gap-4 md:mt-8 cursor-pointer">
            <Button title="Book a call" />
            <div className=" flex items-center gap-2 md:flex md:items-center md:gap-2">
              <span className="border border-gray-200 rounded-full p-2">
                <IoIosPlay />
              </span>
              <span>Watch Video</span>
            </div>
          </div>
          {/* Appointment*/}
          <div className="flex justify-center items-center md:flex md:items-center md:justify-start gap-25 mt-8">
            <div className="flex relative">
              <img
                src={appointment1}
                alt=""
                className="w-12 h-12 border-4 border-gray-100 rounded-full absoulte left-12 z-10 "
              />
              <img
                src={appointent2}
                alt=""
                className="w-12 h-12 border-4 border-gray-100 rounded-full absolute left-10 z-12"
              />
              <img
                src={appointment1}
                alt=""
                className="w-12 h-12 border-4 border-gray-100 rounded-full absolute left-20 z-20"
              />
            </div>
            <div>
              <h1>5000+ Appointments</h1>
              <p>Patients booked already</p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="p-4 mt-4 md:mt-0 md:p-0 ">
          <img src={hero} alt="" className="rounded-[50px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

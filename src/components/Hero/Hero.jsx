import React from "react";
import Container from "../Container";
import hero1 from "../../assets/VitalFlow-Images/hero/hero_image1.avif";
import { FaStar } from "react-icons/fa";
import Button from "../Button/Button";
import { FaPlay } from "react-icons/fa";
import hero2 from "../../assets/VitalFlow-Images/hero/hero_image.webp";
import hero3 from "../../assets/VitalFlow-Images/hero/hero_image2.webp";

const Hero = () => {
  return (
    <section className="py-30">
      <Container>
        {/* main hero content */}
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-x-40">
          {/* left hero content */}
          <div className="py-20">
            {/* rate */}
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
            {/* hero texts */}
            <div className="my-10">
              <p className="text-5xl lg:text-6xl font-semibold">
                Partner in health and wellness
              </p>
              <p className="text-2xl text-gray-500 pt-10">
                Providing advanced healthcare solutions with a compassionate
                touch for every patient.
              </p>
            </div>
            {/* videos and button */}
            <div className="flex items-center gap-2 my-10">
              <div>
                <Button title="Book a call" />
              </div>
              <div className="flex items-center gap-2">
                <div className="border border-gray-300 p-3 rounded-full">
                  <FaPlay className="text-[10px]" />
                </div>
                <div>
                  <span className="font-semibold">Watch Video</span>
                </div>
              </div>
            </div>
            {/* pictures */}
            <div className="flex items-center gap-35">
              <div className="relative flex items-center">
                <div className="absolute left-18  w-12 z-4 border-2 border-gray-50 rounded-full">
                  <img src={hero3} alt="" className="w-full" />
                </div>
                <div className="absolute left-10 z-2 w-12 rounded-full border-2 border-gray-50">
                  <img src={hero2} alt="" />
                </div>
                <div className="absolute  w-12  bg-sky-200 rounded-full">
                  <img src={hero3} alt="" />
                </div>
              </div>
              <div>
                <p>5000+ Appointments</p>
                <p className=" text-gray-500">Patients booked already</p>
              </div>
            </div>
          </div>

          {/* right hero content */}
          <div>
            <img
              src={hero1}
              alt="image"
              className="rounded-[50px] w-full object-cover object-center "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

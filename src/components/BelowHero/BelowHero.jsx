import React from "react";
import belowImage from "../../assets/VitalFlow-Images/below_hero/image1.avif";
import belowImage1 from "../../assets/VitalFlow-Images/below_hero/image2.avif";
import belowImage2 from "../../assets/VitalFlow-Images/below_hero/image3.avif";
import Button from "../Button/Button";

const BelowHero = () => {
  return (
    <section className="mt-30 md:mx-auto md:max-w-6xl md:py-8 md:mt-20">
      {/* container */}
      <div className="gird grid-cols-1 md:grid md:grid-cols-2 md:gap-x-24">
        {/* taxts */}
        <div className="pl-4 md:pl-0 mb-4">
          <div
            className="flex items-center gap-2
          "
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="text-[20px]">Why us</div>
          </div>
          <h1 className="text-[40px] mt-4">
            Why choose VitalFlow for your healthcare?
          </h1>
          <div className="flex items-center gap-4 mt-12">
            <div>
              <span className=" p-3 rounded-full border-2 border-gray-200">
                01
              </span>
            </div>
            <div>
              <h1 className="text-[22px]">Experienced Professionals</h1>
              <p className="text-gray-500">
                Our team of dedicated healthcare providers brings years of
                experience and expertise to deliver care
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <div>
              <span className=" p-3 rounded-full border-2 border-gray-200">
                02
              </span>
            </div>
            <div>
              <h1 className="text-[22px]">Advanced Technology</h1>
              <p className="text-gray-500">
                Our team of dedicated healthcare providers brings years of
                experience and expertise to deliver care
              </p>
            </div>
          </div>
          <a href="" className="mt-12 block">
            <Button title="Get Started" />
          </a>
        </div>
        {/* image */}
        <div className="relative z-0 p-4 md:p-0">
          <img src={belowImage} className=" rounded-[30px]" alt="" />
          <div className="w-80 bg-white shadow rounded-2xl md:absolute md:top-55 md:-left-10 absolute top-40 left-8">
            {/* innerContainer */}
            <div className="p-4">
              <div className="mb-4">
                <h1 className="text-[18px]">Available Doctors</h1>
                <p className="text-gray-500">Choose Doctors</p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <img
                    src={belowImage1}
                    alt=""
                    className="w-12 rounded-full bg-blue-50"
                  />
                </div>
                <div>
                  <h1 className="text-[18px]">Jonathan Reed</h1>
                  <p className="text-gray-500 text-[14px]">
                    Gastroenterologist
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={belowImage2}
                    alt=""
                    className=" w-12 rounded-full  bg-blue-50"
                  />
                </div>
                <div>
                  <h1 className="text-[18px]">Olivia Bennett</h1>
                  <p className="text-gray-500 text-[14px]">Dermatologist</p>
                </div>
              </div>
              <button className="bg-blue-50 w-full py-4 rounded-2xl text-blue-400 mt-4">
                Meet Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelowHero;

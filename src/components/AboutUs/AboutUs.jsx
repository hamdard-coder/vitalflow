import React from "react";
import Container from "../Container";
import Button from "../Button/Button";
import about1 from "../../assets/VitalFlow-Images/aboutUs/about.avif";

const AboutUs = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
          {/* main container */}
          <div className="flex justify-start">
            {/* right */}
            <div className="relative">
              <img src={about1} className="w-138 rounded-3xl" alt="" />
            </div>
          </div>

          <div>
            {/* left */}
            <div className="flex items-center gap-2 pt-12 lg:pt-0 ">
              <div className="w-2 h-2 rounded-full bg-[#4586ff] "></div>
              <p>About us</p>
            </div>
            <div className="my-6">
              <h1 className="text-4xl font-semibold lg:text-[44px]">
                Vision for a healthier and brighter tomorrow
              </h1>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center w-12 h-12 md:w-13 md:h-13 lg:w-13 lg:h-13 shrink-0 border-2 border-gray-300 rounded-full mb-4 ">
                <p className="font-semibold">01</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                 Our Mission
                </h2>
                <p className="text-gray-500 mt-2">
                Our mission is to deliver compassionate and high-quality healthcare services.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center justify-center  w-12 h-12 md:w-13 md:h-13 lg:w-13 lg:h-13 shrink-0 border-2 border-gray-300 rounded-full mb-4 ">
                <p className="font-semibold">02</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="text-gray-500 mt-2">
                 Leading healthcare provider, recognized for innovative practices and care.
                </p>
              </div>
            </div>
            <div className="my-12">
              <Button title="What we do" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;

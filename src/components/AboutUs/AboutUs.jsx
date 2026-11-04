import React from "react";
import Container from "../Container";
import Button from "../Button/Button";
import about1 from "../../assets/VitalFlow-Images/aboutUs/about.avif";
import about2 from "../../assets/VitalFlow-Images/aboutUs/about2.svg";
import about3 from "../../assets/VitalFlow-Images/aboutUs/about3.svg";

const AboutUs = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-4">
          {/* main container */}
          <div className="lg:flex lg:justify-start">
            {/* right */}
            <div className="relative md:flex md:justify-center md:items-center">
              <img src={about1} className="w-138 h-130 rounded-3xl" alt="" />
            </div>
          </div>

          <div>
            {/* left */}
            <div className="flex items-center gap-2 pt-12 lg:pt-0 ">
              <div className="w-2 h-2 rounded-full bg-[#4586ff] "></div>
              <p>About us</p>
            </div>
            <div className="my-8">
              <h1 className="text-4xl font-semibold lg:text-[44px]">
                Vision for a healthier and brighter tomorrow
              </h1>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center w-12 h-12  shrink-0  mb-4 
              rounded-full shadow bg-white p-3">
                <img src={about2} className="" />
              </div>
              <div className="py-4">
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-gray-700 text-xl mt-2 max-w-90">
                  Our mission is to deliver compassionate and high-quality
                  healthcare services.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center justify-center  w-12 h-12   shrink-0  p-3  shadow  rounded-full mb-4 ">
                <img src={about3} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="text-gray-700 text-xl mt-2 max-w-90">
                  Leading healthcare provider, recognized for innovative
                  practices and care.
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

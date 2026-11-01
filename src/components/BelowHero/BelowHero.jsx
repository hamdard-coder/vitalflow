import React from "react";
import Container from "../Container";
import Button from "../Button/Button";
import below1 from "../../assets/VitalFlow-Images/below_hero/image1.avif";
import below2 from "../../assets/VitalFlow-Images/below_hero/image2.avif";
import below3 from "../../assets/VitalFlow-Images/below_hero/image3.avif";

const BelowHero = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
          {/* main container */}

          <div>
            {/* left */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4586ff] "></div>
              <p>Why us</p>
            </div>
            <div className="my-6">
              <h1 className="text-4xl font-semibold lg:text-5xl">
                Why choose VitalFlow for your healthcare?
              </h1>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center lg:w-16 lg:h-12 border-2 border-gray-300 rounded-full mb-4 ">
                <span className="p-2 lg:p-0">01</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                  Experienced Professionals
                </h2>
                <p className="text-gray-500 mt-2">
                  Our team of dedicated healthcare providers brings years of
                  experience and expertise to deliver care
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center justify-center  lg:w-16 lg:h-12 border-2 border-gray-300 rounded-full mb-4 ">
                <span className="p-2 lg:p-0">02</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Advanced Technology</h2>
                <p className="text-gray-500 mt-2">
                  We utilize cutting-edge medical technology to provide accurate
                  diagnoses and effective treatments
                </p>
              </div>
            </div>
            <div className="my-12">
              <Button title="Get Started" />
            </div>
          </div>

          <div className="flex justify-end">
            {/* right */}
            <div className="relative">
              <img src={below1} className="w-120 rounded-3xl" alt="" />

              <div className="absolute w-75 lg:w-[320px] h-78 shadow bg-white rounded-2xl lg:-bottom-12 lg:-left-12 lg:top-40 left-5 top-18">
                <div className="p-4">
                  <div>
                    <h3 className="font-semibold text-xl">Available Doctors</h3>
                    <p className="text-gray-500">Choose Doctors</p>
                  </div>
                  <div className="flex items-center gap-4 my-8">
                    <div>
                      <img
                        src={below2}
                        className="w-11 bg-blue-50 rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold font-xl">Jonathan Reed</h3>
                      <p className="text-gray-500 text-sm">
                        Gastroenterologist
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <img
                        src={below3}
                        className="w-11 bg-blue-50 rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold font-xl">Olivia Bennett</h3>
                      <p className="text-gray-500 text-sm">Dermatologist</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center">
                    <a href="" className="bg-blue-50 text-blue-400 px-10 py-3 lg:px-18 lg:py-3 rounded-xl">
                      Meet Our Experts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BelowHero;

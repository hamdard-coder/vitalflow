import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import serviceData from "../ServiceCard/data";

const Service = () => {
  return (
    <section className="mt-40 md:mx-auto md:max-w-6xl md:py-8 md:mt-20">
      <header>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="text-[20px]">
            <p>Services</p>
          </div>
        </div>
        <div>
          <p className="text-center text-3xl md:text-5xl ">
            Personalized solutions for <br /> better oral health
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-y-8 md:grid md:grid-cols-3 md:gap-4 md:mt-8 px-4 py-8">
        {/* cards-container */}
        {serviceData.map((data) => (
          <ServiceCard key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Service;

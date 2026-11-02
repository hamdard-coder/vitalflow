import React from "react";

import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ image, title, description, cardBtn }) => {
  return (
    <div className="w-full h-94.25 bg-[#f5faff] px-10 py-5 rounded-3xl shadow ">
      <header className="flex justify-center">
        <div className="w-19.5 h-19.5 bg-[#2127320d] flex items-center justify-center rounded-full text-center">
          <img src={image} className="w-9.5" alt="" />
        </div>
      </header>
      {/* card-body */}

      <div className="py-10">
        <h1 className="text-center text-[24px] font-semibold">{title}</h1>
        <p className="max-w-80 md:max-w-80 mx-auto text-center py-4 text-gray-500">
          {description}
        </p>
      </div>
      {/* card footer */}

      <div className="flex items-center gap-2 justify-center">
        <a href="" className="font-semibold text-xl">
          {cardBtn}
        </a>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default ServiceCard;

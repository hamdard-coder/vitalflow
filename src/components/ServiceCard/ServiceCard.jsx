import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

const ServiceCard = ({ image, title, description, cardBtn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className=" bg-[#f5faff] rounded-4xl cursor-pointer"
    >
      <div className="flex justify-center">
        {/* card-container */}
        <span className=" p-4 bg-blue-50 rounded-full mt-10 ">
          <img src={image} className="w-9.5  " alt="" />
        </span>
      </div>
      {/* card-body */}
      <div className="px-8 my-8">
        <h3 className="text-center my-4 text-2xl">{title}</h3>
        <p className="text-[18px] text-gray-500 text-justify">{description}</p>
      </div>
      {/* card-footer */}
      <div className="flex items-center gap-2 justify-center pb-4">
        <a href="">{cardBtn}</a>
        <FaArrowRightLong className="text-[14px]" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;

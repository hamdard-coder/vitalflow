import React from "react";
import { motion } from "motion/react";
import Container from "../Container";
import ServiceCard from "../ServiceCard/ServiceCard";
import data from "../ServiceCard/data";

const Service = () => {
  return (
    <section className="pt-40 pb-12 lg:py-12 md:py-30">
      <Container>
        <header>
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#4586ff] "></div>
            <p className="font-semibold">Service</p>
          </motion.div>
          <motion.h1
            className="text-center text-2xl lg:text-[50px] md:text-[50px] font-semibold py-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Personalized solutions for <br /> better oral health
          </motion.h1>
        </header>
        <motion.div
          className="grid grid-cols-1 place-items-center md:grid-cols-1 lg:grid-cols-3 gap-6 "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          {data.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Service;

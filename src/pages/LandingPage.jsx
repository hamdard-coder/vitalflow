import React from "react";
import Hero from "../components/Hero/Hero";
import Virtual from "../components/Virtual/Virtual";
import BelowHero from "../components/BelowHero/BelowHero";
import Contact from "../components/Contact/Contact";
import Service from "../components/Service/Service";
import AboutUs from "../components/AboutUs/AboutUs";

const LandingPage = () => {
  return (
    <>
      <main>
        <Hero />
        <Virtual />
        <BelowHero />
        <Service />
        <AboutUs />
      </main>
    </>
  );
};

export default LandingPage;

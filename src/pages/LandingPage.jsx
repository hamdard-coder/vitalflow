import React from "react";
import Hero from "../components/Hero/Hero";
import Virtual from "../components/Virtual/Virtual";
import BelowHero from "../components/BelowHero/BelowHero";
import Contact from "../components/Contact/Contact";

const LandingPage = () => {
  return (
    <>
      <main>
        <Hero />
        <Virtual />
        <BelowHero />
      </main>
    </>
  );
};

export default LandingPage;

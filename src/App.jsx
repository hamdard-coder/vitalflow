import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Virtual from "./components/Virtual/Virtual";
import BelowHero from "./components/BelowHero/BelowHero";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import Service from "./components/Service/Service";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Virtual />
      <BelowHero/>
      <Service/>
      <AboutUs/>
      <Contact/>
    </>
  );
}

export default App;

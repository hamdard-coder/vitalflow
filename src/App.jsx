import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Virtual from "./components/Virtual/Virtual";
import Hero from "./components/Hero/Hero";
import BelowHero from "./components/BelowHero/BelowHero";
import Service from "./components/Service/Service";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Virtual />
      <BelowHero />
      <Service />
    </>
  );
}

export default App;

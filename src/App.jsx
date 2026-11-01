import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Virtual from "./components/Virtual/Virtual";
import BelowHero from "./components/BelowHero/BelowHero";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Virtual />
      <BelowHero/>
    </>
  );
}

export default App;

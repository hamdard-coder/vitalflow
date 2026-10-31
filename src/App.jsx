import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Virtual from "./components/Virtual/Virtual";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Virtual />
    </>
  );
}

export default App;

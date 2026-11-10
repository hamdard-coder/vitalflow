import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;

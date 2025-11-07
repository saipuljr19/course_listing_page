import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import CourseDetail from "./components/services/CourseDetail.jsx"; // Tambahkan ini

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Services />
              <Footer />
            </>
          }
        />

        {/* Halaman detail kursus */}
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

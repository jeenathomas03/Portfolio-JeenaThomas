import React from "react";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import EducationExperience from "./pages/EducationExperience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar /> 
      <Home/>
      <About/>
      <Projects/>
      <EducationExperience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

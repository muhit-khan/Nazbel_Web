import React from "react";
import "./Homepage.css";
import Banner from "./body/Banner/Banner";
import Services from "./body/Services/Services";
import About from "./body/About/About";
import Navabar from "../../components/Navbar/Navabar";
import Footer from "../../components/Footer/Footer";
import Gallery from "./body/Gallery/Gallery";

const Homepage = () => {
  return (
    <>
      <Navabar />
      <Banner />
      <About />
      <Services />
      <Gallery />
      <Footer />
    </>
  );
};

export default Homepage;

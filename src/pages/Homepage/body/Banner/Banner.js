import React, { useEffect, useState } from "react";
import "./Banner.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import logo from "../../../../assets/Banner/nazbel-logo.png";
import banner1 from "../../../../assets/Banner/fire1.webp";
import banner2 from "../../../../assets/Banner/fire2.webp";
import banner3 from "../../../../assets/Banner/fire3.webp";

const Banner = () => {
  const [value, setValue] = useState(0);
  const bannerImg = [banner1, banner2, banner3];

  useEffect(() => {
    if (value > 2) {
      setValue(0);
    }
    const interval = setInterval(() => {
      setValue(value + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <section className="banner">
      <div className="banner-img-slider">
        <div className="banner-img">
          <img src={bannerImg[value]} alt="banner1" />
        </div>
      </div>
      <div className="banner-text">
        <div className="container">
          <div className="banner-text-container">
            {/* <h1>nazbel</h1> */}
            <div className="banner-logo">
              <img src={logo} alt="logo" />
            </div>
            <h2>
              Igniting Confidence, Extinguishing Flames – Your Trusted
              Firefighters.
            </h2>
            <p>
              {" "}
              “Elevating engineering with expertise in Civil, Aviation,
              Fireproofing, IoT, Safety & Security, crafting a legacy of
              visionary solutions and redefining possibilities.”
            </p>
            <FaAngleDoubleDown className="banner-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import "./GroupWebsites.css";
import { FaFire, FaRobot } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { GiArmorUpgrade } from "react-icons/gi";

const GroupWebsites = () => {
  const ratingsData = [
    {
      name: "Nazbel Fireproofing",
      icon: <FaFire style={{ color: "#BE3144" }} />,
    },
    {
      name: "Nazbel Geotechnical",
      icon: <FaEarthAsia style={{ color: "#0766AD" }} />,
    },
    {
      name: "Nazbel Defence",
      icon: <GiArmorUpgrade style={{ color: "#EC8F5E" }} />,
    },
    { name: "Nazbel Robotice", icon: <FaRobot style={{ color: "#C3ACD0" }} /> },
  ];

  return (
    <section className="group-websites" data-aos="fade-up">
      <div className="container">
        <h1 className="title-middle">Our Group Websites</h1>

        <div className="website-items">
          {ratingsData.map((item, index) => {
            const { name, icon } = item;

            return (
              <div key={index} className="website-item">
                <h2>{icon}</h2>
                <a href="">{name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GroupWebsites;

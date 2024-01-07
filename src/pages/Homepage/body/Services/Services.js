import React from "react";
import "./Services.css";
import { servicesData } from "./servicesData";
import { FaStar } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services" data-aos="fade-up">
      <div className="container">
        <h2 className="title-middle">Services</h2>
        <p className="title-text">
          Guardians of Safety: From meticulous Fire Extinguisher Inspections to
          Expert Installations and Comprehensive Emergency Response Plans, we
          are your trusted partners in fire protection
        </p>
        <div className="services-container">
          {servicesData.map((item, index) => {
            const { title, description, price, rating, img } = item;
            const stars = Array.from({ length: rating }, (_, index) => (
              <FaStar key={index} />
            ));

            return (
              <div key={index} className="service-card">
                <div className="service-card-img">
                  <img src={img} alt="service-image" />
                </div>
                <div className="service-card-text">
                  <h2>{title}</h2>
                  <h3>{description}</h3>
                  <span>{stars}</span>
                  <p>${price}</p>
                </div>
                <button>Details</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

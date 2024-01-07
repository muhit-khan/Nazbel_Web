import React from "react";
import "./Founder.css";
import { FaNewspaper } from "react-icons/fa";
import founderImg from "../../../../assets/Founder/founder.webp";

const Founder = () => {
  const news = [
    {
      title: "The making of nazbel",
      date: "Aug 20, 2023 | Business Today",
    },
    {
      title: "Nazbel's big comeback",
      date: "Aug 04, 2023 | Business Today",
    },
    {
      title: "The making of nazbel",
      date: "Aug 20, 2023 | Business Today",
    },
    {
      title: "Nazbel's big comeback",
      date: "Aug 04, 2023 | Business Today",
    },
  ];

  return (
    <section className="founder">
      <div className="container">
        <h2 className="title">Founder's Corner</h2>
        <div className="founder-container">
          <div className="founder-news-container">
            <div className="founder-news">
              <h2>News and Updates</h2>
              {news.map((item, index) => {
                const { title, date } = item;

                return (
                  <div className="news-item" key={index}>
                    <h3>
                      <FaNewspaper style={{ marginRight: "1rem" }} /> {title}
                    </h3>
                    <p>{date}</p>
                  </div>
                );
              })}
            </div>
            <button>View more</button>
          </div>
          <div className="founder-info">
            <h2>
              Fire safety isn't just a business for us; it's a commitment to
              protecting lives and property. As the owner of Nazbel, I believe
              in empowering our clients with top-notch fire extinguishing
              solutions. Every inspection, installation, and emergency response
              plan is crafted with precision, driven by our dedication to
              creating safer environments. We're not just selling fire
              extinguishers; we're delivering peace of mind and a promise of
              protection.
            </h2>
            <div className="founder-info-img">
              <img src={founderImg} alt="founder" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

import React from "react";
import "./About.css";
import nazbel1 from "../../../../assets/About/nazbel1.webp";
import nazbel2 from "../../../../assets/About/nazbel2.webp";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="title">Nazbel Group</h2>
        <div className="about-container">
          <div className="about-text">
            <p>
              Embark on a journey with NAZBEL GROUP, where innovation meets
              excellence in a realm of engineering activities. From the elegance
              of Civil engineering to the soaring heights of Aviation, the
              steadfast commitment to Fireproofing, the cutting-edge world of
              IoT, and the unwavering dedication to Safety & Security — NAZBEL
              GROUP transcends boundaries, crafting a legacy of visionary
              solutions that redefine the landscape of possibilities.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur ad, atque hic consectetur corrupti dicta eligendi vel
              quae tenetur ex aliquid quam, consequatur earum commodi quo
              necessitatibus dolores beatae. Maiores excepturi nesciunt, amet
              quia ratione numquam, unde animi minus exercitationem ducimus
              nihil sed corporis accusantium voluptatem ut natus. Reprehenderit,
              nemo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              quia aspernatur enim quisquam ducimus debitis accusamus, dicta
              maxime repellendus eum quos voluptatum placeat laboriosam commodi,
              corporis id! Quod, saepe perspiciatis!
            </p>
          </div>
          <div className="about-img">
            <div className="about-img-big">
              <img src={nazbel2} alt="nazbel2" />
            </div>
            <div className="about-img-small">
              <img src={nazbel1} alt="nazbel1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

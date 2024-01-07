import React from "react";
import "./Gallery.css";
import img1 from "../../../../assets/Services/services1.webp";
import img2 from "../../../../assets/Services/services2.webp";
import img3 from "../../../../assets/Services/services3.webp";

const Gallery = () => {
  const imageCollection = [
    {
      img: img1,
      title: "Safety in Focus",
      borderTop: "#92C7CF",
      borderBottom: "#E0AED0",
    },
    {
      img: img2,
      title: "Guardians at Work",
      borderTop: "#FFB996",
      borderBottom: "#92C7CF",
    },
    {
      img: img3,
      title: "Flame Defense Chronicles",
      borderTop: "#D9EDBF",
      borderBottom: "#FF8F8F",
    },
  ];

  const handleGalleryClick = () => {
    console.log("Hello");
  };

  return (
    <div className="gallery" data-aos="fade-right">
      <div className="container">
        <h2 className="title-middle">Gallery</h2>
        <p className="title-text">
          Experience safety and expertise with our curated photo collections. In
          'Safety in Focus,' witness meticulous fire extinguisher inspections.
          'Guardians at Work' captures the precision of our technicians during
          installations. 'Flame Defense Chronicles' unfolds the development of
          emergency response plans, showcasing our commitment to transforming
          spaces into safer environments.
        </p>
        <div className="gallery-container">
          {imageCollection.map((item, index) => {
            const { img, borderTop, borderBottom, title } = item;
            return (
              <div key={index}>
                <div
                  style={{
                    borderTop: `1rem solid ${borderTop}`,
                    borderBottom: `1rem solid ${borderBottom}`,
                  }}
                  className="gallery-collection-cover"
                >
                  <div
                    className="gallery-collection"
                    onClick={handleGalleryClick}
                  >
                    <img src={img} alt="gallery-collection" />
                  </div>
                </div>
                <h4 className="gallery-collection-text">{title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

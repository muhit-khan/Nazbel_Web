import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/Banner/nazbel-logo.png";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import androidDownload from "../../assets/Footer/andoird-download.webp";
import appleDownload from "../../assets/Footer/apple-download.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-container">
          <div className="footer-logo-container">
            <div className="footer-logo">
              <img src={footerLogo} alt="footer-logo" />
            </div>
            <p> {<FaMapMarkerAlt />} Dhaka - 1212, Bangladesh</p>
            <p> {<FaPhoneAlt />} +880 1711-871696</p>
            <p> {<MdMail />} info@nazbelgroup.com</p>
          </div>
          <div className="footer-subscribe-container">
            <h3>Subscribe to our newsletter</h3>
            <div className="footer-subscribe">
              <input type="text" placeholder="user@example.com" />
              <button>Submit</button>
            </div>
          </div>
          <div className="footer-downloads-container">
            <h3>Download Our App</h3>
            <div className="footer-download-img">
              <img src={androidDownload} alt="android-download" />
              <img src={appleDownload} alt="apple-download" />
            </div>
          </div>
        </div>
        <div className="footer-bottom-container">
          <p>&copy; 2024 Nazbel group</p>
          <p>All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  const handleDeliveryClick = () => {
    navigate("/delivery");
    window.scrollTo(0, 0);
  };

  const handlePrivacyPolicyClick = () => {
    navigate("/privacy-policy");
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            src={assets.logo}
            alt="Logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
          <p>
            Delicious meals delivered to your door, anytime, anywhere. Follow us
            on social media for the latest offers and updates! Need help?
            Contact our 24/7 customer support team.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com/?lang=en">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://pk.linkedin.com/">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={handleLogoClick} style={{ cursor: "pointer" }}>
              Home
            </li>
            <li onClick={handleAboutClick} style={{ cursor: "pointer" }}>
              About
            </li>
            <li onClick={handleDeliveryClick} style={{ cursor: "pointer" }}>
              Delivery
            </li>
            <li
              onClick={handlePrivacyPolicyClick}
              style={{ cursor: "pointer" }}
            >
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+92-222-3456789</li>
            <li>tomato@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;

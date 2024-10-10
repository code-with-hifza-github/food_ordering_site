import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <h6 className="about-subtitle">
        Welcome to Tomato.com, where we believe that good food brings people
        together!
      </h6>
      <p className="about-description">
        Our journey began with a simple idea: to deliver delicious meals right
        to your doorstep. With a commitment to quality ingredients and
        exceptional service, we have grown to become a favorite choice for food
        lovers. At Tomato.com, we strive to offer a diverse menu that caters to
        various tastes and preferences, ensuring there's something for everyone.
        Our team is passionate about food, and we work tirelessly to create
        dishes that not only satisfy your hunger but also bring joy to your
        dining experience. Join us as we continue to innovate and bring fresh
        ideas to your table. Thank you for choosing Tomato.com, and we look
        forward to serving you!
      </p>
      <h4 className="about-mission">Our Mission</h4>
      <p className="about-mission-description">
        To deliver delightful meals and memorable experiences, making every bite
        special.
      </p>
      <h4 className="about-values">Our Values</h4>
      <ul className="about-values-list">
        <li>Quality: We prioritize fresh, high-quality ingredients.</li>
        <li>Customer Satisfaction: Your happiness is our top priority.</li>
        <li>
          Innovation: We are always looking for new ways to enhance your
          experience.
        </li>
      </ul>
    </div>
  );
};

export default About;

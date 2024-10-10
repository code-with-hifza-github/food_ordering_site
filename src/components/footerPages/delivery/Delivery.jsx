import React from "react";
import "./Delivery.css";

const Delivery = () => {
  return (
    <div className="delivery-container">
      <h1 className="delivery-title">Delivery Information</h1>
      <p className="delivery-description">
        We understand that convenience is key. That's why we offer fast and
        reliable delivery services to ensure your meals arrive hot and fresh.
        Here’s what you need to know about our delivery process:
      </p>
      <h3 className="delivery-subtitle">Delivery Areas</h3>
      <p>We currently deliver to the following areas:</p>
      <ul className="delivery-list">
        <li>City Center</li>
        <li>Downtown</li>
        <li>Suburban Areas</li>
      </ul>
      <p className="delivery-note">
        If you are unsure whether we deliver to your location, please feel free
        to contact our customer support team.
      </p>
      <h3 className="delivery-subtitle">Delivery Times</h3>
      <ul className="delivery-list">
        <li>Standard Delivery: 30-45 minutes</li>
        <li>Peak Hours: 45-60 minutes</li>
      </ul>
      <p className="delivery-note">
        We strive to deliver your meals as quickly as possible, but please
        understand that times may vary depending on traffic and demand.
      </p>
      <h3 className="delivery-subtitle">Delivery Fees</h3>
      <ul className="delivery-list">
        <li>Free delivery on orders over $50</li>
        <li>Standard delivery fee: $5</li>
      </ul>
      <h3 className="delivery-subtitle">How to Order</h3>
      <p className="delivery-description">
        Ordering is easy! Simply browse our menu, add your favorite dishes to
        the cart, and check out. You can track your order status in real time
        through our app or website.
      </p>
    </div>
  );
};

export default Delivery;

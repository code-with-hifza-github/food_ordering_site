import React from "react"; 
import "./PrivacyPolicy.css"; 

const PrivacyPolicy = () => {
  

  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <h3 className="privacy-policy-subtitle">Introduction</h3>
      <p className="privacy-policy-description">
        At Tomato.com, we respect your privacy and are committed to protecting
        your personal information. This Privacy Policy explains how we collect,
        use, and share your information when you use our website and services.
      </p>
      <h3 className="privacy-policy-subtitle">Information We Collect</h3>
      <p className="privacy-policy-description">
        <b>Personal Information:</b> When you create an account, place an order,
        or contact us, we may collect personal information such as your name,
        email address, phone number, and delivery address.
      </p>
      <p className="privacy-policy-description">
        <b>Usage Data:</b> We collect information about how you use our website,
        including your IP address, browser type, pages visited, and time spent
        on the site.
      </p>
      <h3 className="privacy-policy-subtitle">How We Use Your Information</h3>
      <p className="privacy-policy-description">We use your information to:</p>
      <ul className="privacy-policy-list">
        <li>Process and deliver your orders</li>
        <li>Improve our services and user experience</li>
        <li>Communicate with you about your orders and promotions</li>
        <li>Ensure compliance with legal obligations</li>
      </ul>
      <h3 className="privacy-policy-subtitle">Sharing Your Information</h3>
      <p className="privacy-policy-description">
        We do not sell or rent your personal information to third parties. We
        may share your information with trusted service providers who assist us
        in operating our website and delivering our services.
      </p>
      <h3 className="privacy-policy-subtitle">Your Rights</h3>
      <p className="privacy-policy-description">
        You have the right to access, correct, or delete your personal
        information. If you wish to exercise these rights, please contact us at
        tomato@gmail.com.
      </p>
      <h3 className="privacy-policy-subtitle">Changes to This Policy</h3>
      <p className="privacy-policy-description">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new policy on our website.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

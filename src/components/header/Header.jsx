import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Welcome to Tomato! Fresh, hot, and tasty food delivered right to your
          door.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

  // ....
  const navigate = useNavigate();

  const navigator = () => {
    navigate("/ExploreMenu")
  }
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Welcome to Tomato! Fresh, hot, and tasty food delivered right to your
          door.
        </p>
        <button onClick={navigator}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

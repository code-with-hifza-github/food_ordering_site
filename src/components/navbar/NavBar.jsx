import React, { useContext, useState } from "react";
import "./NavBar.css";
import assets from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom"; 
import { StoreContext } from "../context/StoreContext";

const NavBar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate(); 

  const handleSearchClick = () => {
    navigate("/search"); 
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt=""
          onClick={handleSearchClick} 
          style={{ cursor: "pointer" }} 
        />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token?<button onClick={() => setShowLogin(true)}>Sign in</button>
        : <div className="navbar-profile">
          <img src={assets.profile_icon}/>
          <ul className="nav-profile-dropdown">
          <li><img src={assets.bag_icon}/><p>Orders</p></li>
          <hr/>
          <li><img src={assets.logout_icon}/><p>Logout</p></li>
          </ul>
          </div>}
        
      </div>
    </div>
  );
};

export default NavBar;

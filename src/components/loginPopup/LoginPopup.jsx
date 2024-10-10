import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import assets from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Log In");

  // State variable for saving data
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "" 
  });

  // Handle input changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // Handle form submission
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Log In") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    
    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Log In" ? (
            <>
              <input
                name="username"
                onChange={onChangeHandler}
                value={data.username}
                type="text"
                placeholder="Enter Your Username"
                required
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </>
          ) : (
            <>
              <input
                name="username"
                onChange={onChangeHandler}
                value={data.username}
                type="text"
                placeholder="Enter Your Username"
                required
              />
              <input
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </>
          )}
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I Agree to the Terms of use & Privacy Policy.</p>
        </div>
        {currState === "Log In" ? (
          <p>
            Create new Account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an Account?
            <span onClick={() => setCurrState("Log In")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

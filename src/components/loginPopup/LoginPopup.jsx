import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import assets from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Log In");

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));

    setErrors((errors) => ({ ...errors, [name]: "" }));
  };

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
        if (response.data.message.includes("Username")) {
          setErrors((errors) => ({
            ...errors,
            username: response.data.message,
          }));
        } else if (response.data.message.includes("Email")) {
          setErrors((errors) => ({ ...errors, email: response.data.message }));
        } else if (response.data.message.includes("Password")) {
          setErrors((errors) => ({
            ...errors,
            password: response.data.message,
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            general: response.data.message,
          }));
        }
      }
    } catch (error) {
      setErrors((errors) => ({
        ...errors,
        general: "An error occurred. Please try again.",
      }));
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
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
              {errors.username && (
                <p className="error-message">{errors.username}</p>
              )}
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Enter Your Password"
                required
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
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
              {errors.username && (
                <p className="error-message">{errors.username}</p>
              )}
              <input
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                placeholder="Enter Your Email"
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Enter Your Password"
                required
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
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

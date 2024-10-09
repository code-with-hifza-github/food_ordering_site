import React, { useState } from "react";
import "./LoginPopup.css";
import assets from "../../assets/assets";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Log In");
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email format. Example: user@example.com");
      console.log("Email validation failed!"); 
      return false;
    } else {
      setEmailError("");
      console.log("Email is valid!");
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordStrength("Password is too weak.");
      console.log("Password too short!"); 
      return false;
    } else if (password.length >= 6 && password.length < 10) {
      setPasswordStrength("Password strength is moderate.");
    } else {
      setPasswordStrength("Password is strong.");
    }
    console.log("Password is valid!"); 
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currState === "Log In" && username && password.length >= 6) {
      const userDetails = {
        username,
        password,
      };
      console.log("Logging in User:", userDetails);
      setShowLogin(false); 
    } else if (currState === "Sign Up") {
      
      const isEmailValid = validateEmail(email);
      const isPasswordValid = validatePassword(password);

      if (isEmailValid && isPasswordValid) {
        const userDetails = {
          username,
          email,
          password,
        };
        console.log("Signing up User:", userDetails);
        setShowLogin(false);
      } else {
        console.log("Form validation failed! Check email and password.");
        return;
      }
    }

    axios.post('http://localhost:3001/users', { username, email, password })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleSubmit} className="login-popup-container">
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
                type="text"
                placeholder="Enter Your Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </>
          ) : (
            <input
              type="text"
              placeholder="Enter Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          {currState === "Sign Up" && (
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value); 
              }}
              autoComplete="email" 
              required
            />
          )}
          {currState === "Sign Up" && emailError && (  
            <p className="error">{emailError}</p>
          )}

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (currState === "Sign Up") {
                validatePassword(e.target.value); 
              }
            }}
            autoComplete="current-password" 
            required
          />
          {currState === "Sign Up" && passwordStrength && (  
            <p className="strength">{passwordStrength}</p>
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
            Already have an Account?{" "}
            <span onClick={() => setCurrState("Log In")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

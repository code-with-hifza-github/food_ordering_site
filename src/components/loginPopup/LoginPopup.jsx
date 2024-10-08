import React, { useState } from "react";
import "./LoginPopup.css";
import assets from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Log In");

  const [username, setUsername] = useState(""); // Username state added
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /\S+@\S+\.\S+/; 
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email format. Example: user@example.com");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordStrength("Password is too weak.");
    } else if (password.length >= 6 && password.length < 10) {
      setPasswordStrength("Password strength is moderate.");
    } else {
      setPasswordStrength("Password is strong.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic for both Log In and Sign Up
    if (currState === "Log In") {
      if (username && password.length >= 6) {
        const userDetails = {
          username,
          password,
        };
        console.log("User Details: ", userDetails);
        setShowLogin(false); // Close popup after login
      }
    } else {
      // Logic for Sign Up
      if (!emailError && password.length >= 6) {
        const userDetails = {
          email,
          password,
        };
        console.log("User Details: ", userDetails);
        setShowLogin(false); // Close popup after creating account
      }
    }
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
              {/* Change email input to username input for login */}
              <input
                type="text"
                placeholder="Enter Your Username" // Placeholder changed
                value={username} // Use username state
                onChange={(e) => setUsername(e.target.value)} // Update username state
                required
              />
            </>
          ) : (
            <input
              type="text"
              placeholder="Enter Your Name"
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
              required
            />
          )}
          {currState === "Sign Up" && emailError && (  // Show email error only during sign up
            <p className="error">{emailError}</p>
          )}

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // Validate password strength only if signing up
              if (currState === "Sign Up") {
                validatePassword(e.target.value); 
              }
            }}
            required
          />
          {currState === "Sign Up" && passwordStrength && (  // Show password strength only during sign up
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

// import React, { useState } from "react";
// import "./LoginPopup.css";
// import assets from "../../assets/assets";
// import axios from "axios";

// const LoginPopup = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState("Log In");


//   return (
//     <div className="login-popup">
//       <form onSubmit={handleSubmit} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="Close"
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currState === "Log In" ? (
//             <>
//               <input
//                 type="text"
//                 placeholder="Enter Your Username" 
//                 value={username} 
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </>
//           ) : (
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           )}
//           {currState === "Sign Up" && (
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 validateEmail(e.target.value); 
//               }}
//               autoComplete="email" 
//               required
//             />
//           )}
//           {currState === "Sign Up" && emailError && (  
//             <p className="error">{emailError}</p>
//           )}

//           <input
//             type="password"
//             placeholder="Enter Your Password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               if (currState === "Sign Up") {
//                 validatePassword(e.target.value); 
//               }
//             }}
//             autoComplete="current-password" 
//             required
//           />
//           {currState === "Sign Up" && passwordStrength && (  
//             <p className="strength">{passwordStrength}</p>
//           )}
//         </div>

//         <button type="submit">
//           {currState === "Sign Up" ? "Create Account" : "Log In"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, I Agree to the Terms of use & Privacy Policy.</p>
//         </div>
//         {currState === "Log In" ? (
//           <p>
//             Create new Account?{" "}
//             <span onClick={() => setCurrState("Sign Up")}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an Account?{" "}
//             <span onClick={() => setCurrState("Log In")}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;

import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import assets from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {

  const {url, setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("Log In");

  // state variable for saving data
  const[data, setData] = useState({
    name : "",
    email : "",
    password : ""
  })

// pick data from input field and save in state variable
const onChangeHandler = (event) =>{
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value}))
}

const onLogin = async (event) =>  {
event.preventDefault()
let newUrl = url;
if(currState==="Login"){
  newUrl += "/api/user/login"
}
else{
  newUrl += "/api/user/register"
}
const response = await axios.post(newUrl, data);

if(response.data.success) {
  setToken(response.data.token);
  localStorage.setItem("token", response.data.token);
  setShowLogin(false)
}
else{
  alert(response.data.message)
}
}



  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Log In" ? (
            <></>
          ) : (
            <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Enter Your Name" required />
          )}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Enter Your Email" required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Enter Your Password" required />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Log In"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I Agree to the Terms of use & Privacy Policy.</p>
        </div>
        {currState === "Log In" ? (
          <p>
            Create new Accout?{" "}
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

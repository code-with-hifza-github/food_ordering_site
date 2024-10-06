import React from "react";
import "./AppDownload.css";
import assets from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download
        <br /> Tomato App
      </p>
      <div className="app-download-platforms"> 
        <a href="https://play.google.com/store/games?hl=en"><img src={assets.play_store} alt="Play Store"/></a>
        <a href="https://www.apple.com/app-store/>"><img src={assets.app_store} alt="App Store" /></a>
      </div>
    </div>
  );
};

export default AppDownload;

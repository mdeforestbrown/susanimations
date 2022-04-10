import React, { useEffect } from "react";
import logo from "./logo-hd-crop.png";
import showreel from "./showreel.mp4";

const Header = () => {
  return (
    <header className="App-header">
      <video playsInline autoPlay muted loop className="App-header-video">
        <source src={showreel} type="video/mp4" />
      </video>
      <h1 className="App-header-title">susanimations</h1>
      <h2 className="App-header-sub-title">COMING SOON...</h2>
      {/* <p className="App-header-blurb">hello! welcome to susanimations, scroll down below to check out some of my recent start stop animations!</p> */}
      <img id="susanimations-logo" src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;

import React, { useEffect } from "react";
import logo from "./susanimations.jpeg";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    function listener(evt: { detail: number }) {
      if (evt.detail === 5) {
        navigate("/login");
      }
    };
    const img = document.getElementById("susanimations-logo");
    img?.addEventListener("click", listener);
    return () => {
      img?.removeEventListener("click", listener);
    };
  }, []);

  return (
    <header className="App-header">
      <img id="susanimations-logo" src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;

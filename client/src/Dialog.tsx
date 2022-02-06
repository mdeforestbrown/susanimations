import React, { useState } from "react";
import "./App.css";

const Dialog = () => {
  const [password, setPassword] = useState("");

  const handleChange = (event: { target: { value: any } }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log({password});
  }

  return (
    <div className="App-login-dialog">
      <form onSubmit={handleSubmit} className="App-login-form">
        <label className="App-label">
          <input
            placeholder=" super-secret-password "
            className="App-password-input"
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <input className="App-submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Dialog;

import React, { useState } from "react";
import "./App.css";
import Dialog from "./Dialog";

const Login = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <div className="App-main">
      <h1>Hello Susannah</h1>
     
      {dialogOpen ? <Dialog/> :  <button className="App-login-button" onClick={() => setDialogOpen(true)}>Login</button>}
    </div>
  );
};

export default Login;

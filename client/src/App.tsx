import React from "react";
import Header from "./Header";
import Main from "./Main";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="" element={<Main />}/>
          {/* <Route path="/login" element={<Login />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

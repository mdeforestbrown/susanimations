import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { VideoType } from "./types";
import VideoPage from "./VideoPage";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="App-main">
      {/* <h1 className="App-text-portfolio">portfolio</h1>
      <div className="App-div-horizontal">
        <button className="App-text-navigate" onClick={() => navigate("2D")}>
          2D
        </button>
        <button className="App-text-navigate" onClick={() => navigate("3D")}>
          3D
        </button>
      </div>
      <div className="App-div-horizontal">
        <button
          className="App-text-navigate"
          onClick={() => navigate("learning")}
        >
          learning
        </button>
        <button className="App-text-navigate" onClick={() => navigate("music")}>
          music
        </button>
        <button
          className="App-text-navigate"
          onClick={() => navigate("stories")}
        >
          stories
        </button>
      </div>
      <Routes>
        <Route
          path={"/2D"}
          element={<VideoPage videoType={VideoType["2D"]} />}
        />
        <Route
          path={"/3D"}
          element={<VideoPage videoType={VideoType["3D"]} />}
        />
      </Routes> */}
    </div>
  );
};

export default Main;

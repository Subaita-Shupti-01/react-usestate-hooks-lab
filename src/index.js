// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyMoodWidget from "./MyMoodWidget";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div style={{ display: "flex", gap: "12px", padding: "20px" }}>
      {/* using prop to set initial condition */}
      <MyMoodWidget condition="Sunny" />
      <MyMoodWidget condition="Rainy" />
      <MyMoodWidget condition="Cloudy" />
    </div>
  </React.StrictMode>
);

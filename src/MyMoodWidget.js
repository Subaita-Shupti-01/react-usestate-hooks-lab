// src/MyMoodWidget.js
import React, { useState, useEffect } from "react";
import Sunny from "./Sunny.png";
import Rainy from "./Rainy.webp";
import Cloudy from "./Cloudy.png";
import "./MyMoodWidget.css"; // optional for styling

function MyMoodWidget(props) {
  // props.condition is an optional initial condition like "Sunny", "Rainy", "Cloudy"
  const [condition, setCondition] = useState(props.condition || "Sunny");
  const [imgSrc, setImgSrc] = useState(Sunny); // image shown
  const [count, setCount] = useState(0);

  // update image whenever condition changes
  useEffect(() => {
    if (condition === "Sunny") setImgSrc(Sunny);
    else if (condition === "Rainy") setImgSrc(Rainy);
    else if (condition === "Cloudy") setImgSrc(Cloudy);
    else setImgSrc(Sunny); // fallback
  }, [condition]);

  // called when mood button is clicked
  const handleMoodClick = () => {
    setCount(prev => prev + 1);
  };

  // optional: let user change condition inside the widget
  const handleSelectChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <div className="mood-widget">
      <h2>My Mood Weather Widget</h2>
      <div className="mood-top">
        <img src={imgSrc} alt={condition} className="mood-image" />
        <div className="mood-info">
          <p className="mood-condition">Condition: <strong>{condition}</strong></p>
          <p className="mood-text">How does this weather make me feel?</p>
          <button className="mood-button" onClick={handleMoodClick}>
            Express Mood ({count})
          </button>
        </div>
      </div>

      {/* optional control to change condition (demonstrates props/state interplay) */}
      <div className="mood-controls">
        <label>
          Choose condition:
          <select value={condition} onChange={handleSelectChange}>
            <option value="Sunny">Sunny</option>
            <option value="Rainy">Rainy</option>
            <option value="Cloudy">Cloudy</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default MyMoodWidget;

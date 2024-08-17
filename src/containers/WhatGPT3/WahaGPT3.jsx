import React from "react";
import "./WahaGPT3.css";
import Feature from "../../Components/Feature/Feature";
const WahaGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradent-text">
        The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
      <Feature />
      <Feature />
      <Feature />
      </div>
    </div>
  );
};

export default WahaGPT3;

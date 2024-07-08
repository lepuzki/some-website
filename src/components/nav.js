import React from "react";
import "./nav.css";

export default function Card() {
  return (
    <nav className="nav">
      <div className="left">
        <img
          src={`${process.env.PUBLIC_URL}/spin.svg`}
          alt="Loading spinner"
          width="80"
          height="80"
        />
        <h2>Left</h2>
      </div>

      <div className="middle">
        <h2>Middle</h2>
      </div>

      <div className="right">
        <h2>Right</h2>
      </div>
    </nav>
  );
};
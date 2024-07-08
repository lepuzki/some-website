import React from "react";
import "./nav.css";
import Sharingan from "./sharingan";

export default function Card() {
  return (
    <nav className="nav">
      <div className="left">
        <div className="logo">
          <a href="https://naruto.fandom.com/wiki/Sharingan" >
          <Sharingan />
          </a>
        </div>
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
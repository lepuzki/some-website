import React from "react";
import "./card.css";

export default function Card(props) {
    return (
        <div className="card">
            <div className="container">
                <h2>
                    <b>{props.title}</b>
                </h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
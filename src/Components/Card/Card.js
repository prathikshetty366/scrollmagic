import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <p>
          <strong>{props.character.name}</strong>
        </p>
        <p>{props.character.alterEgo}</p>
        <p>{props.character.alignment}</p>
      </div>
    </div>
  );
}

export default Card;

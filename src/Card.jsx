/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";

//rfc for shortcut
export default function Card(props) {
  return (
    <div className="column is-2">
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
            alt={props.name}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-size-7 card--name">{props.name}</p>
          <p className="subtitle is-6">No. {props.id}</p>
          <h2>{props.weight}</h2>
        </div>
      </div>
    </div>
      </div>

  );
}

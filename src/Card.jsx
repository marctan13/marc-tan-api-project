/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react"

//rfc for shortcut
export default function Card(props, {data}) {

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={props.imgSrc} alt={props.name} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-size-7 card--name">{props.name}</p>
          <p className="subtitle is-6">No. {props.id}</p>
          <h2>{props.weight}</h2>
          <p className="type">{props.type} type</p>
          {/* <p className="abilities">{props.ability}</p> */}
        </div>
      </div>
    </div>
  );
}

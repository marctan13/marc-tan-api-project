/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";

//rfc for shortcut
export default function Card(props, {data}) {

  async function getAbilities() {
    await data.abilities.map(poke => {
      return (
        <>
          <div className="group">
            <h2>{poke.ability.name}</h2>
          </div>
        </>
      );
    }
    )}

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
          <p>{props.type}</p>
          <p>{getAbilities}</p>
        </div>
      </div>
    </div>
  );
}

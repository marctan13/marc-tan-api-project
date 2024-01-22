/* eslint-disable react/prop-types */
import React from "react";

export default function Info(props, { data }) {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <h2>ID {props.id}</h2>
        <p className="type">{props.type}</p>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
          alt={props.name}
        />
        {/* <div className="abilities">
          <h2>{props.ability}</h2>
          <h2>{props.ability2}</h2>
        </div> */}
        {/* <div className="abilities">
          {data.abilities.map((poke) => {
            return (
              <>
                <div className="group">
                  <h2>{poke.ability.name}</h2>
                </div>
              </>
            );
          })}
        </div> */}
        {/* <div className="abilities">
          {props.abilities}
        </div> */}
        {/* <div className="base-stat">
          {
            props.stats.map(poke=>{
              return(
                <>
                <h3>{poke.stat.name}:{poke.base_stat}</h3></>
              )
            })
          }
        </div> */}
      </div>
    </>
  );
}

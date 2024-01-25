/* eslint-disable react/prop-types */
import React from "react";

export default function Info({ data, type, abilityone, abilitytwo }) {
  return (
    <>
      <div className="main-card">
        <div className="main-title">
        <h1 className="main-name">{data.name}</h1>
        <h2 className="main-id">ID {data.id}</h2>
        </div>
        <div className="abilities">
          <p>{abilityone}</p>
          <p>{abilitytwo}</p>
        </div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          alt={data.name}
        />
        <p className="main-type">{type} Type</p>
        {/* <div className="base-stat">
          {
            data.stats.map(poke => {
              return (
                <>
                  <h3>{poke.stat.name}: {poke.base_stat}</h3>
                </>
              )
            })
          }
        </div> */}
      </div>
    </>
  );
}

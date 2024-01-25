/* eslint-disable react/prop-types */
import React from "react";

export default function Info({ data, type, abilityone, abilitytwo }) {
  let bgColor;
  let fontColor;
  switch (type) {
    case "electric":
      bgColor = "#EDF67D";
      break;
    case "fire":
      bgColor = "#FF8585";
      break;
    case "water":
      bgColor = "#A7B5C8";
      break;
    case "psychic":
      bgColor = "#FDCFF3";
      break;
    case "dark":
      bgColor = "#40434E";
      fontColor = "white";
      break;
    case "rock":
      bgColor = "#E59F76";
      break;
    case "fighting":
      bgColor = "#BD8B9C";
      break;
    case "normal":
      bgColor = "#F0E6EF";
      break;
    case "poison":
      bgColor = "#F0A6CA";
      break;
    case "ghost":
      bgColor = "#9C89B8";
      break;
    case "ground":
      bgColor = "#784F41";
      fontColor = "white";
      break;
    case "dragon":
      bgColor = "#1B065E";
      fontColor = "white";
      break;
    case "ice":
      bgColor = "#BFD7EA";
      break;
    case "steel":
      bgColor = "#0B3954";
      fontColor = "white";
      break;
    default:
      bgColor = "#d5e396";
  }
  const styles = {
    backgroundColor: bgColor,
    color: fontColor,
  };

  return (
    <>
      <div style={styles} className="column is-4 main-container">
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
      </div>
    </>
  );
}

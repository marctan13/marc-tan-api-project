/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import "./style.css";
import Card from "./Card";
import Info from "./Info";
// import Worker from "./Worker"

function App() {
  const [data, setData] = useState([]);
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [type, setType] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [otherPokemon, setOtherPokemon] = useState([]);
  const [randomData, setRandomData] = useState([]); //array of random 5 gen pokemon

  const url = "https://pokeapi.co/api/v2/pokemon/";

  const urls = [
    `${url}${Math.floor(Math.random() * 151)}`,
    `${url}${Math.floor(Math.random() * 100) + 151}`,
    `${url}${Math.floor(Math.random() * 135) + 251}`,
    `${url}${Math.floor(Math.random() * 107) + 386}`,
    `${url}${Math.floor(Math.random() * 156) + 493}`,
    `${url}${Math.floor(Math.random() * 72) + 649}`,
    `${url}${Math.floor(Math.random() * 88) + 721}`,
  ];

  const { id } = data;
  const [abilityone, abilitytwo] = abilities;

  //fetches api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${url}${pokemonName}`);
        result.json().then((json) => {
          setData(json);
          setType(json.types[0].type.name);
          setAbilities(json.abilities.map((abi) => abi.ability.name));
          fetch(`${url}?limit=1500&offset=0`)
            .then((response) => response.json())
            .then((otherData) =>
              setOtherPokemon(otherData.results.map((p) => p.name))
            );
          Promise.all(urls.map((url) => fetch(url)))
            .then((responses) =>
              Promise.all(responses.map((result) => result.json()))
            )
            .then((data) => setRandomData(data));
        });
      } catch (error) {
        console.log("failed to fetch data" + error);
      }
    };
    fetchData();
  }, [pokemonName]);

  function handleChange(e) {
    setPokemonName(e.target.value.toLowerCase());
  }

  async function handleRandomClick(index) {
    setPokemonName(randomData[index].name);
  }

  const buttonsEl = () => {
    return randomData.map((data, index) => (
      <button key={index} onClick={() => handleRandomClick(index)}>
        Generate Gen {index + 1} Pokemon
      </button>
    ));
  };

  const renderOtherPokemonCards = () => {
    return Array.from({ length: 6 }, (_, index) => (
      <Card
        key={index}
        name={otherPokemon[id - index - 2]}
        id={id - index - 1}
      />
    ));
  };

  const renderMorePokemonCards = () => {
    return Array.from({ length: 6 }, (_, index) => (
      <Card key={index} name={otherPokemon[id + index]} id={id + index + 1} />
    ));
  };

  return (
    <div>
      <div className="container">
        <h1 id="title">Poke API Project</h1>
        {/* <Worker /> */}
        <section className="hero is-link">
          <div className="hero-body">
            <input
              className="input is-primary"
              onChange={handleChange}
              type="text"
              id="pokemonName"
              placeholder="Enter Pokemon Name"
            />
            <div className="btn-group">{buttonsEl()}</div>
          </div>
        </section>
        <section className="section left-content">
          <div className="columns">{renderOtherPokemonCards()}</div>
          <div className="columns mid-container">
            <Info
              data={data}
              type={type}
              abilityone={abilityone}
              abilitytwo={abilitytwo}
            />
          </div>
          <div className="columns">{renderMorePokemonCards()}</div>
        </section>
      </div>
    </div>
  );
}

export default App;

/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import "./style.css";
import Card from "./Card";
// import Info from "./Info";

function App() {
  const [data, setData] = useState([]);
  const [pokemonName, setPokemonName] = useState("pikachu");

  const url = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${url}${pokemonName}`);
      result.json().then((json) => { //returns a promise and turns into json
        setData(json);
      });
    };
    fetchData();
  }, [pokemonName]);

  //state variable for type
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchType = async () => {
      const result = await fetch(`${url}${pokemonName}`);
      result.json().then((json) => {
        setType(json.types[0].type.name);
      });
    };
    fetchType();
  }, [pokemonName]);

  // const [ability, setAbilities] = useState([]);

  // useEffect(() => {
  //   const fetchAbility = async () => {
  //     const result = await fetch(`${url}${pokemonName}`)
  //     result.json().then(json => {
  //       setAbilities(json.abilities.map(data => {
  //         data.ability.name
  //       }))
  //     })
  //   }
  //   fetchAbility()
  // }, [pokemonName])

  // console.log(ability)

  //fetches other pokemon
  const [otherPokemon, setOtherPokemon] = useState([]);

  useEffect(() => {
    fetch(`${url}?limit=1500&offset=0`)
      .then((response) => response.json())
      .then((otherData) =>
        setOtherPokemon(otherData.results.map((p) => p.name))
      );
  }, [pokemonName]);

  //Promise all
  const [randomData, setRandomData] = useState([]);

  const urls = [
    `${url}${Math.floor(Math.random() * 151)}`,
    `${url}${Math.floor(Math.random() * 99) + 151}`,
    `${url}${Math.floor(Math.random() * 134) + 251}`,
    `${url}${Math.floor(Math.random() * 106) + 386}`,
    `${url}${Math.floor(Math.random() * 155) + 493}`,
  ];

  Promise.all(urls.map((url) => fetch(url)))
    .then((responses) => Promise.all(responses.map((result) => result.json())))
    .then((data) => setRandomData(data));

  // console.log(randomData)

  // function handleClick() {
  //   setPokemonName(
  //     fetch(`${url}${Math.floor(Math.random() * 151)}`)
  //       .then((response) => response.json())
  //       .then((randomData) => setPokemonName(randomData.name))
  //   );
  // }
  //GEN ONE
  function handleClick() {
    setPokemonName(randomData[0].name);
  }

  //GEN TWO
  function handleClickTwo() {
    setPokemonName(randomData[1].name);
  }

  //GEN THREE
  function handleClickThree() {
    setPokemonName(randomData[2].name);
  }

  //GEN FOUR
  function handleClickFour() {
    setPokemonName(randomData[3].name);
  }

  //GEN FIVE
  function handleClickFive() {
    setPokemonName(randomData[4].name);
  }

  //Updates state variable
  function handleChange() {
    setPokemonName(document.querySelector("#pokemonName").value);
  }

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0) + string.slice(1);
  // }

  console.log(pokemonName);
  console.log(data);
  // console.log(ability)
  // console.log(data.abilities[0].ability.name)
  // console.log(data.types[0].type.name)
  // console.log(pokemonName);
  // console.log(data);
  // console.log(data.id);
  // console.log(otherPokemon[id - 6]);
  // console.log(pokemonName.abilities.map(poke => {
  //   poke.ability.name
  // }))

  const { id, name, weight } = data;

  return (
    <div>
      <div className="container">
        <h1 id="title">Poke API Project</h1>
        <section className="hero is-link">
          <div className="hero-body">
            <input
              className="input is-primary"
              onChange={handleChange}
              type="text"
              id="pokemonName"
              placeholder="Enter Pokemon Name"
            />
            <div>
              <button onClick={handleClick} className="randomButton">
                Generate Gen 1 Pokemon
              </button>
              <button onClick={handleClickTwo} className="randomButton">
                Generate Gen 2 Pokemon
              </button>
              <button onClick={handleClickThree} className="randomButton">
                Generate Gen 3 Pokemon
              </button>
              <button onClick={handleClickFour} className="randomButton">
                Generate Gen 4 Pokemon
              </button>
              <button onClick={handleClickFive} className="randomButton">
                Generate Gen 5 Pokemon
              </button>
            </div>
          </div>
        </section>
        <section className="section left-content">
          <div className="columns">
            <div className="column is-2">
              {id > 4 && (
                <Card
                  name={otherPokemon[id - 6]}
                  // name={otherPokemon[data.indexOf(pokemonName)]}
                  imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    id - 5
                  }.png`}
                  id={id - 5}
                />
              )}
            </div>
            <div className="column is-2">
              {id > 4 && (
                <Card
                  name={otherPokemon[id - 5]}
                  imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    id - 4
                  }.png`}
                  id={id - 4}
                />
              )}
            </div>
            <div className="column is-2">
              {id > 3 && (
                <Card
                  name={otherPokemon[id - 4]}
                  imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    id - 3
                  }.png`}
                  id={id - 3}
                />
              )}
            </div>
            <div className="column is-2">
              {id > 2 && (
                <Card
                  name={otherPokemon[id - 3]}
                  imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    id - 2
                  }.png`}
                  id={id - 2}
                />
              )}
            </div>
            <div className="column is-2">
              {id > 1 && (
                <Card
                  name={otherPokemon[id - 2]}
                  imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    id - 1
                  }.png`}
                  id={id - 1}
                />
              )}
            </div>
          </div>
          <div className="columns">
            <div className="column is-4 main--card">
              <Card
                name={name}
                imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                id={id}
                weight={`${weight} lbs`}
                type={`${type} type`}
                // ability={ability}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-2">
              <Card
                name={otherPokemon[id]}
                imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  id + 1
                }.png`}
                id={id + 1}
              />
            </div>
            <div className="column is-2">
              <Card
                name={otherPokemon[id + 1]}
                imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  id + 2
                }.png`}
                id={id + 2}
              />
            </div>
            <div className="column is-2">
              <Card
                name={otherPokemon[id + 2]}
                imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  id + 3
                }.png`}
                id={id + 3}
              />
            </div>
            <div className="column is-2">
              <Card
                name={otherPokemon[id + 3]}
                imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  id + 4
                }.png`}
                id={id + 4}
              />
            </div>
            <div className="column is-2">
              <Card
                name={otherPokemon[id + 4]}
                imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  id + 5
                }.png`}
                id={id + 5}
              />
            </div>
          </div>
        </section>
        <div className="right-content hero is-info">
          {/* <Info data={data}/> */}
          {/* <Info name = {name} id={id} type={typeNames}/> */}
          {/* <Info name = {name} id={id} 
          type={data.types[0].type.name}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

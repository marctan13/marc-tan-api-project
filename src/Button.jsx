/* eslint-disable react/prop-types */
import React from 'react'

export default function Button({setPokemonName, url}){

    function handleClick() {
        setPokemonName(
          fetch(
            `${url}${Math.floor(Math.random() * 151)}`
          )
            .then((response) => response.json())
            .then((randomData) => setPokemonName(randomData.name))
        );
      }

      let gen = 1;

    return(
        <div>
        <button onClick = {handleClick} className='randomButton'>
            {`Generate Gen ${gen} Pokemon`}
        </button>
        </div>
    )
}
import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

function Index(props) {
  return (
    <>
      <h1 style={myStyle}>See all the Pokémon!</h1>
      <h2>
        <a href='/pokemon/new'>Get new Pokémon</a>
      </h2>
      <ul>
        {props.storage.map((pokemon, x) => {
          return (
            <li key={`${x}`}>
              <a href={`/pokemon/${x}`}>
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Index;

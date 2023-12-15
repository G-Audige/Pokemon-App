import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

function Show(props) {
  return (
    <>
      <h1 style={myStyle}>Gotta Catch 'Em All!</h1>
      <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.img + '.jpg'} alt={props.pokemon.name} />
      <br />
      <a href='/pokemon'>Back</a>
    </>
  );
}

export default Show;

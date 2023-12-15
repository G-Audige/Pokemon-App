import React from 'react';
const style = {
  margin: '1em',
};

function New() {
  return (
    <>
      <h1>Choose your new partner!</h1>
      <form action='/pokemon' method='POST'>
        <label>Name:</label>
        <input style={style} type='text' name='name' />
        <input type='submit' value='Collect Pokemon' />
      </form>
      <a href='/pokemon'>Back</a>
    </>
  );
}

export default New;

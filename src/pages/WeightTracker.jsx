import React from 'react';

export default function WeigthTracker() {
  return(
    <div>
      <h1>Weigth</h1>
      <button onClick={ () => localStorage.clear() }>Clear All</button>
    </div>
  );
}
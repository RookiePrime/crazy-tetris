import React from 'react';
import './App.css';

import GridSquare from './components/GridSquare'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridSquare color="1" />
    </div>
  );
}

export default App;
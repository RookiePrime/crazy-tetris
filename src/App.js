import React from 'react';
import './App.css';

import GridBoard from './components/GridBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard/>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';

import Controls from './components/Controls';
import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import PausePopup from './components/PausePopup';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <PausePopup />
    </div>
  );
}

export default App;
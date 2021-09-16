import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Controls from './components/Controls';

import { generateBoard } from './utils/gameHelpers';

function App() {
  const [board, setBoard] = useState(generateBoard);
  const [piece, setPiece] = useState({});

  return (
    <div className="App" >
      <Board        
        board={ board }
      />
      <Controls 
        board={ board }
        setBoard={ setBoard }
        piece={ piece }
        setPiece={ setPiece } 
      />
    </div>
  );
}

export default App;

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import './App.css';

import GridBoard from './components/GridBoard'
import NextBlock from './components/NextBlock'
import ScoreBoard from './components/ScoreBoard'
import Controls from './components/Controls'
import PausePopup from './components/PausePopup'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <PausePopup />
      </div>
    </Provider>
  );
}

export default App;
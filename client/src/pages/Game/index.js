import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'

import './game.css';

import GridBoard from '../../components/gameComponents/GridBoard'
import NextBlock from '../../components/gameComponents/NextBlock'
import ScoreBoard from '../../components/gameComponents/ScoreBoard'
import Controls from '../../components/gameComponents/Controls'
import PausePopup from '../../components/gameComponents/PausePopup'
import Settings from '../../components/gameComponents/Settings';
import Navigation from '../../components/gameComponents/Navigation';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="Game">
        <div className="gameboard">
        <GridBoard />
        <PausePopup />
        </div>
        <NextBlock />
        <ScoreBoard />
        <Settings/>
        <Controls />
        <Navigation />
      </div>
    </Provider>
  );
}

export default App;